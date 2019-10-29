const express = require('express');
const Values = require('../models/valuesModel');

const restricted = require('../utilities/restricted-middleware');


const router = express.Router();
router.use(express.json());

const error500 = {
  message: "Something went wrong when getting your request."
};

// GET ALL VALUES

router.get('/', (req, res) => {
  Values.getValues()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(500).json(error500);
    });
});

router.post('/', valueValidator, (req, res) => {
  const payload = req.body;
  
  Values.add(payload)
  .then(value => {
      res.status(200).json(payload);
  })
  .catch(err => {
      responseHandler(res, 500, "error adding value");
  });
});



module.exports = router;