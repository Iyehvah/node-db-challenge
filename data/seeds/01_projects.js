
exports.seed = async function(knex) {
await knex("projects").insert([
  { name: "NODE-DB-CHALLANGE", description: "complete dis bich", completed: false},
  { name: "Complete Portfolio", description: "complete dis bich also", completed: false},
])
};
