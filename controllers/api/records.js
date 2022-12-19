const fetch = require('node-fetch');
const BASE_URL = 'https://api.discogs.com/database/'
const API_TOKEN = process.env.DISCOGS_TOKEN;
const API_KEY = process.env.CONSUMER_KEY;
const API_SECRET = process.env.CONSUMER_SECRET;
const Item = require('../../models/item');

module.exports = {
  searchDiscogsAPI,
}

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


async function searchDiscogsAPI(req, res) {
    console.log(req.query.q)
    const records = await fetch(`${BASE_URL}search?q=&${req.query.q}&token=${API_TOKEN}`).then(r => r.json()).then(data => data.results);
    console.log('This is backend: ' + records);
    res.json(records);
}

