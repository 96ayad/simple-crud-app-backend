const Liquidity = require("../models/liquidity.model");

////////ayad/////////
const getLiquidities = async (req, res) => {
    try {
      const { basemint } = req.params;
      const { quotemint } = req.params;
      const liquidities = await Liquidity.find({baseMint: basemint, quoteMint: quotemint});
      res.status(200).json(liquidities);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


const getLiquiditys = async (req, res) => {
  try {
    const liquiditys = await Liquidity.find({});

    // res.status(200).json(liquiditys);
    res.status(200).json("official:"+liquiditys);


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
  getLiquidities,
  getLiquiditys,
  getLiquidity,
  createLiquidity,
  updateLiquidity,
  deleteLiquidity,
};
