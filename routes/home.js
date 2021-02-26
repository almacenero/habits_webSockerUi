const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome Drugs Store!");
});

module.exports = router;
