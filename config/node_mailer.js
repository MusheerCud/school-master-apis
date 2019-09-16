const nodemailer = require("nodemailer");
const { smtpCredencial } = require("../config");

const transporter = nodemailer.createTransport({
  host: smtpCredencial.host,
  port: smtpCredencial.port,
  secure: smtpCredencial.isSecure, // true for 465, false for other ports
  auth: {
    user: smtpCredencial.username,
    pass: smtpCredencial.password
  }
});

module.exports = { transporter };
