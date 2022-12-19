const fetch = require('node-fetch');
const BASE_URL = 'https://api.discogs.com/database/'
const API_TOKEN = process.env.DISCOGS_TOKEN;
const API_KEY = process.env.CONSUMER_KEY;
const API_SECRET = process.env.CONSUMER_SECRET;
const Record = require('../../models/item');

module.exports = {
  searchDiscogsAPI,
  index,
  // show,
  create,
  // edit,
  // delete: deleteRecord
}

async function searchDiscogsAPI(req, res) {
  const search = await fetch(`${BASE_URL}search?q=&${req.query.q}&token=${API_TOKEN}`).then(r => r.json()).then(data => data.results);
  res.json(search);
  console.log(search)
}

async function index(req, res) {
  const records = await Record.find({}).populate('category').exec();
  res.json(records);
}

// async function show(req, res) {
//   const record = Record.findById(req.params.id);
//   res.json(record)
// }

async function create(req, res) {
  req.body.user = req.user._id;
  try {
    const record = await Record.create(req.body);
    res.json(record);
  } catch (err) {
    res.status(400).json(err);
  }
}

// async function deleteRecord(req, res) {
//   req.body.user = req.user._id;
//   const record = await Record.findByIdAndDelete(req.params.id);
//   res.json(record);
// }


// async function searchAPI(req, res) {
//   try {
//     console.log('REQUEST ', req);
//     let response = await fetch(`${BASE_URL}search?q=814867021951&type=releasesearch?q=nirvana&title=nevermind&country=us&type=release&year=1991&barcode=720642442517&token=${API_TOKEN}`)
//     let items = await response.json();
//     console.log(items.results);
//       const record = await Item.create({
//         country: items.country,
//         year: items.year,
//         format: items.format,
//         type: items.type,
//         genre: items.genre,
//         style: items.style,
//         id: items.id,
//         barcode: items.barcode,
//         master_url: items.master_url,
//         catno: items.catno,
//         formats: items.format
//         });
//       console.log('RECORD ', record);
//     } 
//   catch (err) {
//     res.status(400).json(err);
//   }
// }

// async function searchRecordDetail(req, res) {
//   try {
//     let response = await fetch(``);
//     let items = await response.json();
//     res.json(items)
//   } catch (err) {
//     res.status(400).json(err)
//   }
// }
