const express = require("express")
const model = require("./task-model")
const router = express.Router()

//GET ALL TASKS
router.get("/", async (req, res, next) => {
    try {
        const listTasks = await model.getTasks()
        res.status(200).json(listTasks)
    } catch(error) {
        next(error)
    }
})

//GET TASK BY ID
router.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const task = await model.getTasksById(id)
        res.status(200).json(task)
    } catch(error) {
        next(error)
    }
})

//ADD A TASK
router.post("/", async (req, res, next) => {
    try {
        const newTask = await model.AddTask(req.body)
        res.status(200).json(newTask)
    } catch(error) {
        next(error)
    }
})

module.exports = router