const Schema = require('mongoose').Schema;
// const mongoose = require('mongoose')

// const itemSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   id: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   artists: {
//     type: Object,
//   },
//   // IS THIS A BETTER WAY??
//   // type: mongoose.Schema.Types.ObjectId,
//   //     ref: 'Artist',
//   companies: {
//     type: [Object],
//   },
//   estimatedWeight: {
//     type: Number,
//   },
//   extraArtists: {
//     type: [Object],
//   },
//   formats: {
//     type: [Object],
//   },
//   genres: {
//     type: [String],
//   },
//   styles: {
//     type: String,
//   },
//   identifiers: {
//     type: [Object],
//   },
//   labels: {
//     type: [Object],
//   },
//   lowestPrice: {
//     type: Number,
//   },
//   released: {
//     type: Date,
//   },
//   tracklist: {
//     type: [Object],
//   },
//   year: {
//     type: Date,
//   }
// }, {
//   timestamps: true
// });

const itemSchema = new Schema({
  artist: {
    type: String,
    default: ''
  },
  year: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  country: {
    type: String,
    default: ''
  },
  format: {
    type: [String],
    default: ['']
  },
  type: {
    type: String,
    default: ''
  },
  genre: {
    type: [String],
    default: ['']
  },
  style: { 
    type: [String],
    default: ''
  },
  id: {
    type: Number,
    default: null
  },
  barcode: {
    type: [String],
    default: ['']
  },
  uri: {
    type: String,
    default: ''},
  master_url: {
    type: String,
    default: ''
  },
  catno: {
    type: String,
    default: ''
  },
  formats: {
    type: [Object],
    default: [{}]
  },
  notes: {
    type: String,
    default: ''
  }
})

module.exports = itemSchema;