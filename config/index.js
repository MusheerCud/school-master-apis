const init = () => {
  require("dotenv").config();

  return {
    database: {
      mongoDbUri: process.env.MONGO_DB_URI
    },
    smtpCredencial: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      isSecure: _parseBoolean(process.env.SMTP_ISSECURE),
      username: process.env.SMTP_USER_NAME,
      password: process.env.SMTP_PASSWORD
    }
  };
};

_parseBoolean = str => (str && str.toLowerCase() === "true" ? true : false);

module.exports = init();
