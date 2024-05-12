const Liquidity = require("../models/liquidity.model");

const getLiquiditys = async (req, res) => {
  try {
    const liquiditys = await Liquidity.find({});
    res.status(200).json(liquiditys);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLiquidity = async (req, res) => {
  try {
    const { id } = req.params;
    const liquidity = await Liquidity.findById(id);
    res.status(200).json(liquidity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createLiquidity = async (req, res) => {
  try {
    const liquidity = await Liquidity.create(req.body);
    res.status(200).json(liquidity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLiquidity = async (req, res) => {
  try {
    const { id } = req.params;

    const liquidity = await Liquidity.findByIdAndUpdate(id, req.body);

    if (!liquidity) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updateLiquidity = await Liquidity.findById(id);
    res.status(200).json(updateLiquidity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteLiquidity = async (req, res) => {
  try {
    const { id } = req.params;

    const liquidity = await Liquidity.findByIdAndDelete(id);

    if (!liquidity) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLiquiditys,
  getLiquidity,
  createLiquidity,
  updateLiquidity,
  deleteLiquidity,
};