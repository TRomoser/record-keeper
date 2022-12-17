const fetch = require('node-fetch');
const API_KEY = process.env.API_KEY;
const Item = require('../../models/item');

module.exports = {
  getItemAPI,
  getItemDetail
}

async function getItemAPI(req, res) {
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

async function getItemDetail(req, res) {
  try {
    let response = await fetch(``);
    let items = await response.json();
    res.json(items)
  } catch (err) {
    res.status(400).json(err)
  }
}