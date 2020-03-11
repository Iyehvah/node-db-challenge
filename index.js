const express = require("express")
const helmet = require("helmet")

const server = express()
const port = process.env.PORT || 4000

//ROUTERS
const welcomeRouter = require("./welcome/welcome-router")
const projectRouter = require("./project/project-router")
const resourceRouter = require("./resource/resource-router")
const taskRouter  = require("./task/task-router")


server.use(helmet())
server.use(express.json())

server.use("/", welcomeRouter)
server.use("/projects", projectRouter)
server.use("/resources", resourceRouter)
server.use("/tasks", taskRouter)


server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
