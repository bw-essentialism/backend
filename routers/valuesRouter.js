const express = require('express');
const defaultValues = require('../models/valuesModel');

const restricted = require('../utilities/restricted-middleware');


const router = express.Router();
router.use(express.json());

const error500 = {
  message: "Something went wrong when getting your request."
};

// GET ALL VALUES

router.get('/', (req, res) => {
  defaultValues.getValues()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(500).json(error500);
    });
});



module.exports = router;