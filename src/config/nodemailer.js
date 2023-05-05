import { createTransport } from "nodemailer";

export const transporter = createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS_EMAIL,
  },
});

export const mailOptions = {
  from: "",
  to: process.env.EMAIL,
  subject: "",
  html: "",
};
