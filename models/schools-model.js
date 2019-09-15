let express = require("express");

const restGETMany = (params, obj) => {
  console.log("params", params);
  return { alhamthulilah: "fine" };
};

module.exports = { restGETMany };
