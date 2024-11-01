import axios from 'axios';
import * as cheerio from 'cheerio';

import { ISchool } from '../../schools/school.model';

export const sendEmail = async (school: ISchool, subject: string, content: string) => {  
  // Generate html content
  const $ = cheerio.load(content)
  const htmlContent = $.html()

  const data = {
    sender: {
      name: 'Edudesks Team',
      email: 'anitanwosu25@gmail.com',
    },
    to: [
      {
        email: `${school.email}`,
        name: `${school.name}`,
      },
    ],
    subject,
    htmlContent
  };

  try {
    const url = 'https://api.brevo.com/v3/smtp/email';
    const response = await axios.post(url, data, {
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json',
      },
    });

    console.log(`${subject} email sent to ${school.email}:`, response.data);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export const passwordResetMail = (school: ISchool) => {
  const content = `
    <p>Hello ${school.name},</p>
    <h1>${school.otp}</h1>
    <p>You requested for a password reset. This code expires in <b>1 hour1.</b></p>
    <p>If this wasn't you, please ignore this email.</p>`
  
  return content;
}

export const emailVerificationMail = (school: ISchool) => {
  const content = `
    <p>Hello ${school.name},</p>
    <h1>${school.otp}</h1>
    <p>Verify this code to confirm that this email address belongs to you. This code expires in <b>1 hour.</b></p>
    <p>If this wasn't you, please ignore this email.</p>`
  
  return content;
}