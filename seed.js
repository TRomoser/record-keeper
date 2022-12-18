require('dotenv').config();
require('./config/database');

const fetch = require('node-fetch');
const ROOT_URL = 'https://api.discogs.com/database/';
const token = process.env.DISCOGS_TOKEN;
const record = require('./models/record');

async function getRecord(req, res, next) {
    const data = await fetch(`https://api.discogs.com/database/search?q=nirvana&type=master&title=release_title=nevermind&year=1991&format=album&token=${token}`);
    const recordData = await data.json();
    for (record of recordData) {
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
    }
    console.log('Finished!');
}

getRecord();