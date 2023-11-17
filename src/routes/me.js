const express = require('express');
const router = express.Router();
const meRouter = require('../app/controllers/MeController');

router.get('/courses-saved', meRouter.index);
router.get('/trash', meRouter.trash);

module.exports = router;
