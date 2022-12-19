const express = require('express');
const router = express.Router();
const recordsCtrl = require('../../controllers/api/records');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/records'

// router.get('/', ensureLoggedIn, recordsCtrl.index);

router.get('/search',recordsCtrl.searchDiscogsAPI)

module.exports = router;