const express = require('express');
require('dotenv').config();
require('./src/config/mongooseCongif');
require('./src/config/localStrategy');

const debug = require('debug')('favPlace');
const morgan = require('morgan');
const cors = require('cors');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());
server.use(cors());

require('./src/config/passportConfig')(server);
const userRoutes = require('./src/routes/userRoute');
const placeRoutes = require('./src/routes/placeRoute');
const authRoute = require('./src/routes/authRoute');

server.use('/users', userRoutes);
server.use('/places', placeRoutes);
server.use('/auth', authRoute);
server.listen(
  port,
  () => debug(`Server is runing on http://localhost:${port}`)
);
