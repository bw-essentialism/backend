const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const authRouter = require('../routers/authRouter');
const valuesRouter = require('../routers/valuesRouter');
const userValuesRouter = require('../routers/userValuesRouter');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/values', valuesRouter);
server.use('/api/uservalues', userValuesRouter);

server.get('/', (req, res) => {
    res.send('Server is running...');
  });
  
  module.exports = server;