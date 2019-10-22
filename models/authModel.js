const bcrypt = require('bcryptjs');

const db = require('../utilities/dbConfig');

module.exports = {
    getUser,
    registerUser,
    updateUser,
    deleteUser
  };

const getUser = async username => {
  return await db('users')
    .where(username)
    .first();
};

const registerUser = async user => {
  const password = bcrypt.hashSync(user.password, 8);
  await db('users').insert({
    ...user,
    password
  });
  return await db('users')
    .where({ username: user.username })
    .first();
};

// UPDATE USER NECESSARY?

const deleteUser = async id => {
  return await db('users')
    .where({ id })
    .del();
};

