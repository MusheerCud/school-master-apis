const init = () => {
  return {
    database: {
      mongoDbUri: process.env.MONGO_DB_URI
    }
  };
};

module.exports = { init };
