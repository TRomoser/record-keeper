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
  country: {
    type: String,
  },
  year: String,
  format: {
    type: String,
  },
  type: String,
  genre: String,
  style: String,
  id: Number,
  barcode: String,
  master_url: String,
  catno: String,
  formats: Object,
  notes: String,
}, {
  timeseries: true
})

module.exports = itemSchema;
