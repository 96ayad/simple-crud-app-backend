// v2/sdk/liquidity/mint/
const mongoose = require("mongoose");

const LiquiditySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter Liquidity name"],
    },

    authority: {
      type: String,
      required: true,
      default: "00000000000000000000",
    },

    // price: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },

    // image: {
    //   type: String,
    //   required: false,
    // },

  },
  {
    timestamps: true,
  }
);


const Liquidity = mongoose.model("Liquidity", LiquiditySchema);

module.exports = Liquidity;