// v2/sdk/liquidity/mint/
const mongoose = require("mongoose");

const LiquiditySchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "Please enter Liquidity id"],
    },

    baseMint: {
      type: String,
      required: true,
    },

    quoteMint: {
        type: String,
        required: true,
    },

    lpMint: {
        type: String,
        required: true,
    },

    baseDecimals: {
        type: Number,
        required: true,
    },

    quoteDecimals: {
        type: Number,
        required: true,
    },

    lpDecimals: {
        type: Number,
        required: true,
    },

    version: {
        type: Number,
        required: true,
        default: 4,
    },

    programId: {
        type: String,
        required: true,
        default: "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8",
    },

    authority: {
        type: String,
        required: true,
    },

    openOrders: {
        type: String,
        required: true,
    },

    targetOrders: {
        type: String,
        required: true,
    },

    baseVault: {
        type: String,
        required: true,
    },

    quoteVault: {
        type: String,
        required: true,
    },

    withdrawQueue: {
        type: String,
        required: true,
    },

    lpVault: {
        type: String,
        required: true,
    },

    marketVersion: {
        type: Number,
        required: true,
        default: 4,
    },

    marketProgramId: {
        type: String,
        required: true,
        default: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    },

    marketId: {
        type: String,
        required: true,
    },

    marketAuthority: {
        type: String,
        required: true,
    },

    marketBaseVault: {
        type: String,
        required: true,
    },

    marketQuoteVault: {
        type: String,
        required: true,
    },

    marketBids: {
        type: String,
        required: true,
    },

    marketAsks: {
        type: String,
        required: true,
    },

    marketEventQueue: {
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