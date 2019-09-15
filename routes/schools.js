let express = require("express");
let router = express.Router();
const schoolModel = require("../models/schools-model");

router.get("/", async function(req, res, next) {
  let data = await schoolModel.restGETMany(req.params, {});
  return res.status(200).send(data);
});
router.get("/add", function(req, res, next) {
  res.send("respond with a add");
});

module.exports = router;
