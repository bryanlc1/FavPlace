const express = require('express');
require('dotenv').config();
require('./src/config/mongooseCongif');

const debug = require('debug')('favPlace');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const userRoutes = require('./src/routes/userRoute');
const placeRoutes = require('./src/routes/placeRoute');

server.use('/users', userRoutes);
server.use('/places', placeRoutes);
server.listen(
  port,
  () => debug(`Server is runing on http://localhost:${port}`)
);
