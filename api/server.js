const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const authRouter = require('../routers/authRouter');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);



server.get('/', (req, res) => {
    res.send('Server is running...');
  });
  
  module.exports = server;