const express = require('express');
const router = express.Router();
const recordsCtrl = require('../../controllers/api/records');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/records'

// router.get('/', ensureLoggedIn, recordsCtrl.index);

router.get('/', recordsCtrl.index);
router.post('/', ensureLoggedIn, recordsCtrl.create);
router.get('/search', recordsCtrl.searchDiscogsAPI);
// router.delete('/:id', ensureLoggedIn, recordsCtrl.delete);
// router.get('/records/:id/edit', ensureLoggedIn, recordsCtrl.edit);
// router.put('/records/:id', ensureLoggedIn, recordsCtrl.update);



module.exports = router;