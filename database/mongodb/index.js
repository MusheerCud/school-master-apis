const mongoose = require("mongoose");
const { database } = require("../../config");

let connectDb = async () => {
  return mongoose.connect(database.mongoDbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = { connectDb };
