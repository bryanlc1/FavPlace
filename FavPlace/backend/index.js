const express = require('express');
require('dotenv').config();
require('./src/config/mongooseCongif');

const debug = require('debug')('favPlace');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());
server.listen(
  port,
  () => debug(`Server is runing on http://localhost:${port}`)
);
