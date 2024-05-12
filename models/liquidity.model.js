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
    },

    baseMint: {
      type: String,
      required: true,
    },

    quoteMint: {
        type: String,
        required: true,
      },

  },
  {
    timestamps: true,
  }
);


const Liquidity = mongoose.model("Liquidity", LiquiditySchema);

module.exports = Liquidity;