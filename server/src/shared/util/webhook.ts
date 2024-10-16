import express, { Request, Response } from 'express';
import crypto from 'crypto';

import { clients } from '../../index';
import { getBankNames } from './paystack';

// Load environment variable as string
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY as string

const pasytackCallback = async (req: Request, res: Response) => {
  try {
    const hash = crypto.createHmac('sha512', PAYSTACK_SECRET_KEY)
      .update(JSON.stringify(req.body)).digest('hex')

    if (hash === req.headers['x-paystack-signature']) {
      res.sendStatus(200) // Send a 200 OK response to Paystack server

      const { event, data } = req.body

      // Listen for status of transfers for ticket refunds and revenue splits
      if (event.includes('transfer')) {
        if (event === 'transfer.success') {
          console.log(`${data.reason}: Transfer to ... was successful!`)
          return;
        } else if (event === 'transfer.failed') {
          console.log(`${data.reason}: Transfer to ... failed.`)
          // ***Retry transfer

          return;
        } else if (event === 'transfer.reversed') {
          console.log(`${data.reason}: Transfer to ... has been reversed.`)
          // ***Retry transfer

          return;
        }
      }

      // Listen for status of transactions for ticket purchases
      if (event.includes('charge')) {
        if (event === 'charge.success') {
          // Emit a success message to the frontend WebSocket connection
          return;
        } else if (event === 'charge.failed') {
          // Emit a failure message to the frontend WebSocket connection
          return;
        }
      }
    }

    res.status(400).send('Invalid signature')
    return;
  } catch (error) {
    res.sendStatus(500)
    console.log(500)
  }
}

// Miscellaneous route to display Paystack supported bank names
const paystackBankNames = async (req: Request, res: Response) => {
  try {
    const banks = await getBankNames()

    res.status(200).json({ banks })
    return;
  } catch (error) {
    res.sendStatus(500)
    console.log(error)
  }
}


export default (router: express.Router) => {
  router.post('/paystack/callback', pasytackCallback)
  router.get('/paystack/banks', paystackBankNames)
}