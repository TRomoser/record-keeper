const fetch = require('node-fetch');
const TOKEN = process.env.DISCOGS_TOKEN;
const KEY = process.env.CONSUMER_KEY;
const SECRET = process.env.CONSUMER_SECRET;
const Item = require('../../models/item');

module.exports = {
  searchRecordAPI,
}

async function searchRecordAPI(req, res) {
  try {
    let response = await fetch(`https://api.discogs.com/database/search?q=814867021951&type=release&token=IZcuSFRFUwaJmmgiZSkyFmvNPniGlrnUGsNHwmCA`)
    let items = await response.json()
    console.log(items.results);
    if (!exists) {
      await Item.create({
        country: items.country,
        year: items.year,
        format: items.format,
        type: items.type,
        genre: items.genre,
        style: items.style,
        id: items.id,
        barcode: items.barcode,
        master_url: items.master_url,
        catno: items.catno,
        formats: items.format
        });
      return null
    } 
    return null
  }
  catch (err) {
    res.status(400).json(err);
  }
}

async function searchRecordDetail(req, res) {
  try {
    let response = await fetch(``);
    let items = await response.json();
    res.json(items)
  } catch (err) {
    res.status(400).json(err)
  }
}