const express = require("express")
const model = require("./projects-model")
const router = express.Router()

//GET ALL PROJECTS
router.get("/", async (req, res, next) => {
    try {
        const listProjects = await model.getProjects()
        res.status(200).json(listProjects)
    }   catch(error) {
        next(error)
    }
})

//GET PROJECT BY ID
router.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const project = await model.getProjectById(id)
        res.status(200).json(project)
    }   catch(error) {
        next(error)
    }
})

//ADD A PROJECT
router.post("/", async (req, res, next) => {
    try {
        const newProject = await model.addProject(req.body)
        res.status(201).json(newProject)
    }   catch(error) {
        next(error)
    }
})


module.exports = router