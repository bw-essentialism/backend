exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: "Project 1",
          description: "this is a project description",
          user_id: 1
        },
        {
          name: "Project 2",
          description: "this is a project description",
          user_id: 2
        },
        {
          name: "Project 3",
          user_id: 1
        },
        {
          name: "Project 4",
          user_id: 2
        },

      ]);
    });
};