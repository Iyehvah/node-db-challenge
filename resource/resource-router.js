const express = require("express")
const model = require("./resource-model")
const router = express.Router()

//GET ALL RESOURCES
router.get("/", async (req, res, next) => {
    try {
        const listResources = await model.getResources()
        res.status(200).json(listResources)
    }   catch(error) {
        next(error)
    }
})

//GET RESOURCE BY ID
router.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const resource = await model.getResourcesById(id)
        res.status(200).json(resource)
    }   catch(error) {
        next(error)
    }
})

//ADD A RESOURCE
router.post("/", async (req, res, next) => {
    try {
        const newResource = await model.addResource(req.body)
        res.status(201).json(newResource)
    }   catch(error) {
        next(error)
    }
})


module.exports = router