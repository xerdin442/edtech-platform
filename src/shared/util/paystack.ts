import axios from "axios"

interface paystackBankDetails {
  id: number
  name: string
  slug: string
  code: string
  longcode: string
  gateway: string | null
  pay_with_bank: boolean
  supports_transfer: boolean
  active: boolean
  country: string
  currency: string
  type: string
  is_deleted: boolean
  createdAt: string
  updatedAt: string
}

// Load the environment variables as strings
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY as string

export const getBankNames = async () => {
  const banksPerPage: number = 60
  const url = `https://api.paystack.co/bank?country=nigeria&perPage=${banksPerPage}`

  let bankNames: string[];
  const response = await axios.get(url)
  if (response.status === 200) {
    const banks = response.data.data
    bankNames = banks.map((bank: paystackBankDetails) => bank.name)
  } else {
    throw new Error('An error occured while fetching bank information')
  }

  return bankNames;
}

export const getBankCode = async (bankName: string) => {
  let recipientBank: paystackBankDetails;
  const banksPerPage: number = 60
  const url = `https://api.paystack.co/bank?country=nigeria&perPage=${banksPerPage}`

  const bankDetails = await axios.get(url)
  if (bankDetails.status === 200) {
    const banks = bankDetails.data.data
    recipientBank = banks.find((bank: paystackBankDetails) => bank.name === bankName)
    if (!recipientBank) {
      throw new Error('Bank not found. Kindly input the correct bank name')
    }
  } else {
    throw new Error('An error occured while fetching bank information')
  }

  return recipientBank.code;
}

export const verifyAccountDetails = async (accountDetails: Record<string, string>) => {
  const { accountName, accountNumber, bankName } = accountDetails
  const code = await getBankCode(bankName)

  // Check if the account details match and return an error message if there is a mismatch
  const url = `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${code}`
  const verification = await axios.get(url, {
    headers: { 'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}` }
  })

  if (verification.status === 200) {
    if (verification.data.data.account_name !== accountName.toUpperCase()) {
      return { unverified: true }
    }

    return { verified: true }
  } else {
    throw new Error('An error occured while verifiying account details')
  }
}

export const createTransferRecipient = async (accountDetails: Record<string, string>) => {
  const { accountName, accountNumber, bankName } = accountDetails
  const code = await getBankCode(bankName)

  // Create a new transfer recipient
  const url = 'https://api.paystack.co/transferrecipient'
  const recipient = await axios.post(url,
    {
      "type": "nuban",
      "bank_code": code,
      "name": accountName,
      "account_number": accountNumber,
      "currency": "NGN"
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`
      }
    }
  )

  if (recipient.status !== 201) {
    throw new Error('An error occured while creating transfer recipient')
  }

  return recipient.data.data.recipient_code;
}

export const deleteTransferRecipient = async (code: string) => {
  const url = `https://api.paystack.co/transferrecipient/${code}`
  const deleteRecipient = await axios.delete(url, {
    headers: { 'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}` }
  })

  if (deleteRecipient.status !== 200) {
    throw new Error('An error occured while deleting transfer recipient')
  }
}

export const initiateTransfer = async (recipient: string, amount: number, reason: string, metadata: Record<string, any>) => {
  const url = 'https://api.paystack.co/transfer'
  const transfer = await axios.post(url,
    {
      "amount": amount,
      "reason": reason,
      "source": "balance",
      "recipient": recipient,
      "currency": "NGN",
      "metadata": metadata
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`
      }
    }
  )

  if (transfer.status !== 200) {
    throw new Error('An error occured while creating transfer recipient')
  }

  return transfer.data.data.transfer_code;
}

export const initializeTransaction = async (email: string, amount: number, metadata: Record<string, any>) => {
  const url = 'https://api.paystack.co/transaction/initialize'
  const transaction = await axios.post(url,
    {
      "amount": amount,
      "email": email,
      "metadata": metadata
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`
      }
    }
  )

  if (transaction.status !== 200) {
    throw new Error('An error occured while creating transfer recipient')
  }

  return transaction.data.data.authorization_url
}