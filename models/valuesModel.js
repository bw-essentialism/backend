const db = require('../utilities/dbConfig');

const getValues = async () => {
  return await db('values');
};

module.exports = { getValues };
