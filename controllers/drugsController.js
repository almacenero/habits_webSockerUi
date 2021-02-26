const Drug = require("../models/Drug");

const drugsList = async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.json(drugs);
  } catch (error) {
    res.json({ message: error });
  }
};

const createDrug = async (req, res) => {
  const drug = Drug({
    name: req.body.name,
    typeDrug: req.body.typeDrug,
    amount: req.body.amount,
    price: req.body.price,
    localization: req.body.localization,
  });
  try {
    const savedDrug = await drug.save();
    res.json(savedDrug);
  } catch (error) {
    res.json({ message: error });
  }
};

const findDrug = async (req, res) => {
  try {
    const drug = await Drug.findById(req.params.id);

    res.json(drug);
  } catch (error) {
    res.json({ message: error });
  }
};

const findOneDrugAndUpdate = async (req, res) => {
  try {
    const drug = await Drug.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        typeDrug: req.body.typeDrug,
        amount: req.body.amount,
        price: req.body.price,
        localization: req.body.localization,
      }
    );
    res.json(drug);
  } catch (error) {
    res.json({ message: error });
  }
};

const deleteDrug = async (req, res) => {
  try {
    const removeDrug = await Drug.remove({ _id: req.params.id });
    res.json(removeDrug);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  drugsList,
  createDrug,
  findDrug,
  findOneDrugAndUpdate,
  deleteDrug,
};
