const mongoose = require('mongoose');
const Dessert = mongoose.model('Dessert');

// GET all desserts
const dessertList = async (req, res) => {
  try {
    const desserts = await Dessert.find();
    res.status(200).json(desserts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching desserts", error: err });
  }
};

const dessertReadOne = async (req, res) => {
  if (!req.params.id) return res.status(400).json({ message: "Dessert ID required" });

  try {
    const dessert = await Dessert.findById(req.params.id);
    if (!dessert) return res.status(404).json({ message: "Dessert not found" });
    res.status(200).json(dessert);
  } catch (err) {
    res.status(500).json({ message: "Error fetching dessert", error: err });
  }
};


module.exports = {
  dessertList,
  dessertReadOne
};
