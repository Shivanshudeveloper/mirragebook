const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  product:{
    type: Object,
    required: true
  },
  productId: {
    type: String,
    required: true    
  },
  CreatedAt: {
    type: Date,
    default: Date.now
  }
});
const checkout = mongoose.model("checkout", checkoutSchema);
module.exports = checkout;
