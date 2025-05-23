import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
const PORT=process.env.PORT||5001;
const app=express();

connectDB();

//middleware
app.use(express.json()); // this middleware lets us access the elements by parsing them as JSON bodies. for eg, we can use req.body in our controllers because of this.
app.use(rateLimiter);

// simple custom middleware
// app.use((req, res, next)=>{
//     console.log(`req method = ${req.method}, and req url = ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log("Server started at PORT :", PORT);
});

