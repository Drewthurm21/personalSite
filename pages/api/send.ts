import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const clientInfo = req.body;

  console.log('clientInfo inside route', clientInfo)
  
  const { data, error } = await resend.emails.send({
    from: 'drew@drewthurmcodes.com',
    to: ['drewthurmcodes@gmail.com'],
    subject: 'MAIL FROM DREWTHURMCODES.COM',
    react: EmailTemplate(clientInfo),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};