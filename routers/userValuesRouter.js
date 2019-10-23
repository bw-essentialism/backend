const express = require('express');
const userValues = require('../models/userValuesModel');

const restricted = require('../utilities/restricted-middleware');

const router = express.Router();
router.use(express.json());

router.get('/:user_id', (req, res) => {
    const { user_id } = req.params;
    userValues
      .getUserValues(user_id)
      .then(values => {
        if (!values) {
          res.status(404).json({
            message: `User with the id of ${user_id} either doesn't exist or has no values attached to his account`
          });
        } else {
          // RETURNS ARRAY OF USER-VALUE OBJECTS
          res.status(200).json(values);
        }
      })
      .catch(() => {
        res.status(500).json(error);
      });
  });

  router.post('/', (req, res) => {
    const { user_id, value_id } = req.body;
  

    if (user_id && value_id) {
      userValues
        .addUserValue({ user_id, value_id })
        .then(values => {
          if (values.length < 1) {
            res
              .status(404)
              .json({ message: `No user with id of ${user_id}` });
          } else {
            res.status(200).json(values);
          }
        })
        .catch(() => {
          res.status(500);
        });
      }});

  module.exports = router;