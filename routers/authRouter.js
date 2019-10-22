const express = require('express');
const auth = require('../models/authModel');

const bcrypt = require('bcryptjs');
const authToken = require('../utilities/generate-token');
const restricted = require('../utilities/restricted-middleware');

const router = express.Router();
router.use(express.json());

// USER REGISTER

router.post('/register', (req, res) => {
    const user = req.body;
    if (!user.username || !user.password) {
      res.status(404).json({
        message:
          "Please give both a 'username' and a 'password' to register a new user!"
      });
    } else {
      // !!! Check for username first
      auth
        .registerUser(user)
        .then(data => {
          res.status(201).json(data);
        })
        .catch(() => {
          res.status(500).json(error500);
        });
    }
  });

// USER LOGIN

  router.post('/login', (req, res) => {
    const username = { username: req.body.username };
    const { password } = req.body;
    if (!username || !password) {
      res
        .status(404)
        .json({ message: "Please pass me a 'username' and a 'password'!" });
    } else {
      auth
        .getUser(username)
        .then(user => {
          // SUCCESS
          if (user && bcrypt.compareSync(password, user.password)) {
            const token = authToken(user);
            // RETURNS A MESSAGE, A TOKEN, AND THE USER OBJECT
            res.status(200).json({
              message: `Welcome ${user.username}!`,
              token,
              user
            });
          }
          // FAIL: PASSWORD
          if (user && !bcrypt.compareSync(password, user.password)) {
            res.status(404).json({ message: 'Invalid password!' });
          }
          // FAIL: USERNAME
          else {
            res.status(404).json({
              message: `There's no user with a username of ${req.body.username}`
            });
          }
        })
        .catch(() => {
          res.status(500).json({ message: "Something wrong!"})
        })
      }
  })

// GET USERS

router.get('/', (req, res) => {
    auth
      .getUser(req.body)
      .then(data => {
        if (!data) {
          res.status(404).json(error404);
        } else {
          res.status(200).json(data);
        }
      })
      .catch(() => {
        res.status(500).json(error500);
      });
  });

// DELETE USER

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    auth
      .deleteUser(id)
      .then(data => {
        if (!data) {
          res.status(404).json(error404);
        } else {
          res
            .status(200)
            .json({ message: `User with ID of ${id} successfully deleted` });
        }
      })
      .catch(() => {
        res.status(500).json(error500);
      });
  });

  module.exports = router;