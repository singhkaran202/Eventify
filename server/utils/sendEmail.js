const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: "587",
    auth: {
        type:"OAUTH2",


        user: "kdsrytube@gmail.com",

        clientId: "806244419977-anqte4mvu5ib6pfjdk5qoru71uk2csia.apps.googleusercontent.com",
        //from google cloud console, outh2
        clientSecret: "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",
        refreshToken: "1//04_b7j4-t6k4ACgYIARAAGAQSNwF-L9IrNDBwpdW_S_Vc362ShmXKCXFky6dw8_VLZZITQ2i_y21vdlPscm-GJpkRSUhId6PZ9NE",//https://developers.google.com/oauthplayground/
  
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  // Send Email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;