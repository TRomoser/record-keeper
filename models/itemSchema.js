const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  artists: {
    type: Object,
  },
  // IS THIS A BETTER WAY??
  // type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Artist',
  companies: {
    type: [Object],
  },
  estimatedWeight: {
    type: Number,
  },
  extraArtists: {
    type: [Object],
  },
  formats: {
    type: [Object],
  },
  genres: {
    type: [String],
  },
  styles: {
    type: String,
  },
  identifiers: {
    type: [Object],
  },
  labels: {
    type: [Object],
  },
  lowestPrice: {
    type: Number,
  },
  released: {
    type: Date,
  },
  tracklist: {
    type: [Object],
  },
  year: {
    type: Date,
  }
}, {
  timestamps: true
});

module.exports = itemSchema;
