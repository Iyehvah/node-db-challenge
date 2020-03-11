
exports.seed = async function(knex) {
  await knex("resources").insert([
    { name: "computer", description: "a computer needs a description?"},
    { name: "keyboard", description: "used to type words"},
    { name: "monitor", description: "helps when coding"},
    { name: "mouse", description: "used to navigate monitor and computer screen"},
    { name: "mousepad", description: "used to help mouse navigate smoothly"},
  ])
};
