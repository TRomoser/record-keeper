const fetch = require('node-fetch');
const API_KEY = process.env.API_KEY;
const Item = require('../../models/item');

module.exports = {
  getItemsAPI,
  getItemDetail
}


async function getItemsAPI(req, res) {
  try {
    let response = await fetch(`https://api.discogs.com/database/search?release_title=nevermind&artist=nirvana&per_page=30&page=1?&token=IZcuSFRFUwaJmmgiZSkyFmvNPniGlrnUGsNHwmCA`)
    let items = await response.json()
    console.log(items.results.find(item.format.find(item === Album) =>) ))
    if (!exists) {
      await Item.create({

      });
    } 
  }
  catch (err) {
    res.status(400).json(err);
  }
}


async function getItemDetail(req, res) {
  try {
    let response = await fetch(``);
    let items = await response.json();
    // console.log(items);
    res.json(items)
  } catch (err) {
    res.status(400).json(err)
  }
}