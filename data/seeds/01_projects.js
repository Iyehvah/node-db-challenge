exports.seed = async function(knex) {
await knex("projects").insert([
  { name: "NODE-DB-CHALLANGE", description: "completed", completed: false},
  { name: "Complete Portfolio", description: "completed", completed: false},
  ])
};