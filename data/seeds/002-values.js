exports.seed = function(knex) {
  return knex('values').insert([
    {
      value_name: 'Athletic ability'
    },
    {
      value_name: 'Art and literature'
    },
    {
      value_name:
        'Creativity, discovering, or inventing things to make a difference in the world'
    },
    {
      value_name: 'Independence'
    },
    {
      value_name: 'Kindness and generosity'
    },
    {
      value_name: 'Living in the moment'
    },
    {
      value_name:
        'Membership in a social group (such as your community, racial group, or school club)'
    },
    {
      value_name: 'Music'
    },
    {
      value_name: 'My community'
    },
    {
      value_name: 'My moral principles'
    },
    {
      value_name: 'Nature and the environment'
    },
    {
      value_name: 'Relationships with friends and family'
    },
    {
      value_name: 'Sense of humor'
    },
    {
      value_name: 'Success in my career'
    }
  ]);
};
