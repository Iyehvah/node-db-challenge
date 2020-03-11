const db = require("../data/config")

function getResources() {
    return db("resources")
}

function getResourcesById(id) {
    return db("resources").where({id}).first()
}

async function addResource(newResource) {
    try {
        const id = await db("resources").insert(newResource)
        return getResources()
    } catch(error) {
      next(error)
    }
}

module.exports = {
    getResources,
    getResourcesById,
    addResource,
}