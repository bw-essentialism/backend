const express = require('express');
const userValues = require('../models/userValuesModel');
const Values, Users = require('../models/valuesModel');

//
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
          res.status(200).json(values);
        }
      })
      .catch(() => {
        res.status(500).json(error);
      });
  });

  router.post('/:id/values', (req, res) => {
    const userId = req.params.id;
    const valueId = req.body.value_id;

    Values.addUserValue(userId, valueId)
    .then(value => {
        res.status(200).json(value);
    })
    .catch(err => {
        res.status(500).json(err)
    });
});

router.delete('/:id/values/:valueId', (req, res) => {
  const { id, valueId } = req.params;
  console.log(id, valueId)

  Users.removeValues(id, valueId)
  .then(removedValue => {
      res.status(200).json(removedValue);
  })
  .catch(err => {
      responseHandler(res, 500, "error removing value from user");
  });
});

  module.exports = router;