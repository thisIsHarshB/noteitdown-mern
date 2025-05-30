import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import { connectDB } from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();
const __dirname = path.resolve();

//middleware
app.use(express.json()); // this middleware lets us access the elements by parsing them as JSON bodies. for eg, we can use req.body in our controllers because of this.
if (process.env.NODE_ENV !== "production") {
    app.use(cors(
        {
            origin: 'http://localhost:5173',
            credentials: true,
        }
    ));
}
app.use(rateLimiter);

// simple custom middleware
// app.use((req, res, next)=>{
//     console.log(`req method = ${req.method}, and req url = ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started at PORT :", PORT);
    });
});

