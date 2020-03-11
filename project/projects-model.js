const db = require("../data/config")

function getProjects() {
    return db("projects")
}

function getProjectById(id){
    return db("projects").where({id}).first()
}

async function addProject(newProject) {
    try {
        const id = await db("projects").insert(newProject)
        return getProjects()
    } catch (error) {
      next(error)
    }
}

module.exports = {
    getProjects,
    getProjectById,
    addProject,
}