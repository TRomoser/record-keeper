const express = require('express');
const router = express.Router();
const recordsCtrl = require('../../controllers/api/records');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/records'

// router.get('/', ensureLoggedIn, recordsCtrl.index);

router.get('/', recordsCtrl.index);
router.get('/:id', ensureLoggedIn, recordsCtrl.show);
router.post('/', ensureLoggedIn, recordsCtrl.create);
router.delete('/:id', ensureLoggedIn, recordsCtrl.delete);
router.get('/records/:id/edit', ensureLoggedIn, recordsCtrl.edit);
router.put('/update/:id', ensureLoggedIn, recordsCtrl.update);
router.get('/search', recordsCtrl.searchDiscogsAPI);



module.exports = router;