'use strict';
require('dotenv').config();

const db = require('./model/db');
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;



server.use(cors());
server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
server.use(express.urlencoded({extended: false}));





db.on('connected', () => {
    server.listen(port, () => console.log(`Example app listening on port ${port}!`));
});

