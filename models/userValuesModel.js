const db = require('../utilities/dbConfig');

const getUserValues = async user_id => {
  return await db('user-values')
    .leftJoin('values', 'values.id', 'value_id')
    .select(
      'user-values.id as id',
      'value_name',
    )
    .where({ 'user-values.user_id': user_id });
};

const addUserValue = async value => {
  await db('user-values').insert(value);
  return getUserValues(value.user_id);
};

const deleteUserValue = async (user_id, id) => {
  await db('user-values')
    .where({ id })
    .del();
  return getUserValues(user_id);
};

module.exports = {
  getUserValues,
  addUserValue,
  deleteUserValue
};
