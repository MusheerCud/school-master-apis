const express = require("express");
const router = express.Router();

// import new API endpoints here
const schoolRouter = require("./schools");

const getApiRouter = () => {
  router.use("/schools", schoolRouter);

  return router;
};

module.exports = getApiRouter;
