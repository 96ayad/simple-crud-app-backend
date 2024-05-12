const express = require("express");
const Liquidity = require("../models/liquidity.model.js");
const router = express.Router();
const {getLiquidities, getLiquiditys, getLiquidity, createLiquidity, updateLiquidity, deleteLiquidity} = require('../controllers/liquidity.controller.js');

////////////ayad//////////
router.get("/:basemint/:quotemint", getLiquidities);
router.get('/', getLiquiditys);
router.get("/:id", getLiquidity);

router.post("/", createLiquidity);

// update a product
router.put("/:id", updateLiquidity);

// delete a product
router.delete("/:id", deleteLiquidity);




module.exports = router;