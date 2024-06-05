import express from "express"
import cors from "cors"

const app = express()
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
 };
 
 app.use(cors(corsOptions));  // Use cors middleware
 
// Middleware
app.use(express.json())


//import routes
import userRouter from "./routes/userRoutes.js"
import feedbackRouter from "./routes/feedbackRoutes.js"
import postRouter from "./routes/postRoutes.js"

//routes declaration 
app.use("/api/v1/users", userRouter)
app.use("/api/v1/form", feedbackRouter)
app.use("/api/v1/blog", postRouter)
//http://localhost:4000/api/v1/users/register
export { app }