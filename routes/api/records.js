const express = require('express');
const router = express.Router();
const recordsCtrl = require('../../controllers/api/records');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/records'

// router.get('/', ensureLoggedIn, recordsCtrl.index);

router.get('/search', recordsCtrl.searchDiscogsAPI);
router.get('/', recordsCtrl.index);
router.get('/:id', ensureLoggedIn, recordsCtrl.show);
router.post('/', ensureLoggedIn, recordsCtrl.create);
router.put('/update/:id', ensureLoggedIn, recordsCtrl.update);
router.delete('/:id', ensureLoggedIn, recordsCtrl.delete);



module.exports = router;