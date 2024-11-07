import { transporter } from "./Email.config.js";

export const sendverficationcode=async(email,verficationcode)=>{
    try{
        const response = await transporter.sendMail({
            from: '"pustak sansar 👻" <pustaksansar571@gmail.com>', // sender address
            to: email,// list of receivers
            subject: "verify your email", // Subject line
            text: "verify your email", // plain text body
            html: verficationcode, // html body
          });
          console.log('Email send successfully',response)

    }catch{
        console.log('Email error')
       
    }
}