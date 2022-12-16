const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  inventory: {
    type: [Object]
  }, 
  address: {
    type: String,
    required: true
  },
  embeddedInventory: {
    type: []
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Store', storeSchema);