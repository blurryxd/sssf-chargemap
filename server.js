'use strict';
require('dotenv').config();
const db = require('./database/db');
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const stationRoute = require('./routes/stationRoute');
const connectionsRoute = require('./routes/connectionsRoute');
const connectionTypesRoute = require('./routes/connectionTypesRoute');
const levelsRoute = require('./routes/levelsRoute');
const currentTypeRoute = require('./routes/currentTypeRoute');

server.use(cors());
server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
server.use(express.urlencoded({extended: false}));

server.use('/station', stationRoute);
server.use('/connections', connectionsRoute);
server.use('/connectionTypes', connectionTypesRoute);
server.use('/levels', levelsRoute);
server.use('/currenttype', currentTypeRoute);

db.on('connected', () => {
    server.listen(port, () => console.log(`Example app listening on port ${port}!`));
});

