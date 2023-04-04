const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    require,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo2", TodoSchema);
