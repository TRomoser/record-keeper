require('dotenv').config();
require('./config/database');

const fetch = require('node-fetch');
const ROOT_URL = 'https://api.discogs.com/database/';
const token = process.env.DISCOGS_TOKEN;
const record = require('./models/itemSchema');

async function getRecord(req, res, next) {
    const response = await fetch(`https://api.discogs.com/database/search?q=nirvana&title=nevermind&country=us&type=release&year=1991&barcode=720642442517&token=${token}`);
    const recordData = await response.json();
    console.log(recordData)
    // res.json(recordData);
    // for (record of recordData) {
        const exists = await Item.exists({apiId:record.id})
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
            })
        }
    // }
    console.log('Finished!');
}

getRecord();