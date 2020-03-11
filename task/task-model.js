const db = require("../data/config")

function getTasks() {
    return db("tasks")
}

function getTasksById(id) {
    return db("tasks").where({id}).first()
}

async function AddTask(newTask) {
    try {
        const id = await db("tasks").insert(newTask)
        return getTasks()
    } catch(error) {
        next(error)
    }
}

module.exports = {
    getTasks,
    getTasksById,
    AddTask,
}