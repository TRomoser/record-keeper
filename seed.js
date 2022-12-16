require('dotenv').config();
require('./config/database');

const fetch = require('node-fetch');
const ROOT_URL = 'https://recordapi.io/api/v1/questions';
const key = process.env.API_KEY;
const Question = require('./models/question');

async function getRecord(req, res, next) {
    const data = await fetch(`${ROOT_URL}?apiKey=${key}&tags=HTML`);
    const recordData = await data.json();
    for (record of recordData) {
        const exists = await Item.exists({apiId:record.id})
        if (!exists) {
            await Item.create({
                apiId: record.id,
                record: record.record,
                choices: record.answers,
                answer: record.correct_answer,
                tag: record.tags[0].name,
                category: record.category,
                difficulty: record.difficulty
            })
        }
    }
    console.log('Finished!');
}

getRecord();