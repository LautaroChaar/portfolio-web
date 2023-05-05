// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "@/config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const values = req.body;
    if (!values.clientName || !values.clientEmail || !values.clientMessage) {
      return res.status(400).json({ message: "Bad request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        from: values.clientEmail,
        subject: `Hello! I am ${values.clientName} and I want to contact you`,
        html: `
      <div>
        <p style="font-size: 16px;">${values.clientMessage}</p>
      </div>`,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
