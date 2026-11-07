import express from "express"
import dotenv from "dotenv"
import categoryRoutes from "./src/routes/categories.Routes.js"
dotenv.config()

const app = express()
app.use(express.json());
const port = process.env.PORT;



app.use('/api', categoryRoutes)

app.listen(port, () => {
    console.log("server is working")
})


