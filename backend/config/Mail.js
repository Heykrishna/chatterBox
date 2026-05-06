import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { createTransport } from 'nodemailer'

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS, // App Password ONLY
  },
});

const sendMail = (email, otp) => {
    const auth = createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: "do.not.mail.2fa@gmail.com",
            pass: "bnfn sfnw elcv cusx"
        }
    });
    const reciever = {
        from: "do.not.mail.2fa@gmail.com",
        to: email,
        subject: "OTP verification required",
        text: `Hlw Please verify your account by this Otp ${otp}`
    }
    auth.sendMail(reciever, (error, emailRes) => {
        if (error) return;
        console.log('otp is sent to mail.')
    });
}

export default sendMail;
