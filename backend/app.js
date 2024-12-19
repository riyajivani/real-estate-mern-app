import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import postRoutes from "./routes/post.route.js"
import authRoutes from "./routes/auth.route.js"
import "dotenv/config"

const app = express()

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(express.json())
app.use(cookieParser())

app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)

app.listen(9000, () => {
     console.log("server is running")
})