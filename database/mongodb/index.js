const mongoose = require("mongoose");
const { init } = require("../../config");

let connectDb = async () => {
  const envVal = await init();
  const dbURI = envVal.database.mongoDbUri;

  return mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = { connectDb };

/*
module.exports = async function() {
  let databases = await Promise.all([connect(PROD_URI), connect(MKTG_URI)])
 
  return {
    production: databases[0],
    marketing: databases[1]
  }
}
*/
