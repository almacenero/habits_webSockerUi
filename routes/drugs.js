//const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const {
  drugsList,
  createDrug,
  findDrug,
  findOneDrugAndUpdate,
  deleteDrug,
} = require("./../controllers/drugsController");

router.post("/", createDrug);

router.get("/", drugsList);

router.get("/:id", findDrug);

router.put("/:id", findOneDrugAndUpdate);

router.delete("/:id", deleteDrug);

module.exports = router;
