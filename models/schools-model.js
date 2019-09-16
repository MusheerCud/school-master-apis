let express = require("express");
const { transporter } = require("../config/node_mailer");

const restGETMany = async (params, obj) => {
  await transporter
    .sendMail({
      from: "musheer@tmmmt.sa",
      to: "mushcud@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>" // html body
    })
    .then(success => console.log("mail sent success", success.messageId))
    .catch(err => console.log("Error on sending mail", err));
  return { alhamthulilah: "fine" };
};

module.exports = { restGETMany };
