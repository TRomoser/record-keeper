const fetch = require('node-fetch');
const BASE_URL = 'https://api.discogs.com/database/'
const API_TOKEN = process.env.DISCOGS_TOKEN;
const API_KEY = process.env.CONSUMER_KEY;
const API_SECRET = process.env.CONSUMER_SECRET;
const Record = require('../../models/item');

module.exports = {
  searchDiscogsAPI,
  index,
  show,
  update,
  create,
  delete: deleteRecord
}

async function searchDiscogsAPI(req, res) {
  const search = await fetch(`${BASE_URL}search?q=&${req.query.q}&token=${API_TOKEN}`).then(r => r.json()).then(data => data.results);
  res.json(search);
  console.log(search)
}

async function index(req, res) {
  const records = await Record.find({})
  // .populate('category').exec();
  res.json(records);
}

async function show(req, res) {
  const record = Record.findById(req.params.id);
  res.json(record)
}

async function update(req ,res) {
  try{
    await Record.findByIdAndUpdate(
      {_id: req.params.id}, req.body
      )
    const record = await Record.find({user: req.user._id});
    res.json(record);
  } catch(err) {
    return next(err);
  }
} 

async function create(req, res) {
  req.body.user = req.user._id;
    const record = await Record.create(req.body);
    res.json(record);
}

async function deleteRecord(req, res) {
  req.body.user = req.user._id;
  const record = await Record.findByIdAndDelete(req.params.id);
  res.json(record);
}

// async function deleteAll(req, res) {
//   req.body.user = req.user._id;
//   await FileSystemEntry.deleteMany({})
// }


