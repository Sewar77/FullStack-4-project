import express from "express";
import { createCategoryController } from "../controller/categories.Controller.js";
import { validate } from "../middleware/validate.Middleware.js";
import { categoriesSchema } from "../validation/categories.Validation.js";
const route = express.Router();
route.post("/category", validate(categoriesSchema), createCategoryController); // the api test on postman is done!
// route.get("/categories", geta)
export default route;
