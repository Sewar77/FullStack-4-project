import express from "express"
import { createCategoryController } from "../controller/categories.Controller.js"

const route = express.Router()


route.post("/category", createCategoryController) // the api test on postman is done!
// route.get("/categories", geta)

export default route
