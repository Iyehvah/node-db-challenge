
exports.seed = async function(knex) {
  await knex("tasks").insert([
    {description: "task 1 blah blah blah", notes: "notes 1 blah blah blah", completed: false, project_id: 1 },
    {description: "task 2 blah blah blah", notes: "notes 2 blah blah blah", completed: false, project_id: 2 }
  ])
};
