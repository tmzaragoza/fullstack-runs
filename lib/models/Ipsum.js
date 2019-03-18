const mongoose = require('mongoose');

const ipsumSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

const Lorum = mongoose.model('Lorum', ipsumSchema);

module.exports = Lorum;
