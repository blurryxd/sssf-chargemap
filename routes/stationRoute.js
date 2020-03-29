'use strict';
const express = require('express');
const router = express.Router();
const stationController = require('../controllers/stationController');

router.get('/', stationController.station_get_all);

router.get('/:id', stationController.station_get_by_id);



module.exports = router;