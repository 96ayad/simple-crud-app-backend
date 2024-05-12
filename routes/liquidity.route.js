const express = require("express");
const Liquidity = require("../models/liquidity.model.js");
const router = express.Router();
const {getLiquiditys, getLiquidity, createLiquidity, updateLiquidity, deleteLiquidity} = require('../controllers/liquidity.controller.js');


router.get('/', getLiquiditys);
router.get("/:id", getLiquidity);

router.post("/", createLiquidity);

// update a product
router.put("/:id", updateLiquidity);

// delete a product
router.delete("/:id", deleteLiquidity);




module.exports = router;