import nodemailer from "nodemailer";
import User from "../models/user.model";
import bcryptjs from "bcryptjs";
export const sendMail = async ({email,emailType,UserID}:any) => {
    try {
        const hashedToken = await bcryptjs.hash(UserID.toString(),10)
        if(emailType === "VERIFY") {
            await User.findByIdAndUpdate(UserID,{verifyToken:hashedToken,verifyTokenExpiry:Date.now() + 3600000})
        } else if(emailType === "RESET") {
            await User.findByIdAndUpdate(UserID,{forgetPasswordToken:hashedToken,forgetPasswordTokenExpiry:Date.now() + 3600000})
        }

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASS
            }
        });
    const mailOptions = {
        from: "anshtiwari200102@gmail.com",
        to: email,
        subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
        html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
        <br>
        ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
        </p>`
    }

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse

    } catch (error:any) {
        console.log(error.message);
        throw new Error(error.message)
    }
}