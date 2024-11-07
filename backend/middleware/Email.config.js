import nodemailer from 'nodemailer'


 export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "pustaksansar571@gmail.com",
    pass: "qfwu kips kxar xkwh",
  },
});

const sendEmail=async()=>{
    try{
        const info = await transporter.sendMail({
            from: '"pustak sansar 👻" <pustaksansar571@gmail.com>', // sender address
            to: "nishabhatt229@gmail.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          });
          console.log(info)

    }catch (error){
        console.log(error)

    }
}

sendEmail()