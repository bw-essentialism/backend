const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: 'Nick',
      password: bcrypt.hashSync('123', 8),
      created_at: knex.fn.now(),
      email: 'nick@gmail.com',
      firstName: 'Nick',
      lastName: 'Truson'
    },
    {
      username: 'Josh',
      password: bcrypt.hashSync('qwe', 8),
      created_at: knex.fn.now(),
      email: 'josh@gmail.com',
      firstName: 'Joshua',
      lastName: 'Cooter'
    },
    {
      username: 'Jane',
      password: bcrypt.hashSync('asd', 8),
      created_at: knex.fn.now(),
      email: 'jane@gmail.com',
      firstName: 'Jane',
      lastName: 'Doe'
    }
  ]);
};
