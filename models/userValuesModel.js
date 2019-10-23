const db = require('../utilities/dbConfig');

const getUserValues = async user_id => {
  return await db('user-values')
    .leftJoin('default-values', 'default-values.id', 'default_value_id')
    .select(
      'user-values.id as id',
      'default_value_name',
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
