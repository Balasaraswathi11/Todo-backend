import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import connectDb from "./Connectdb/connectDb.js";

import router from "./Routers/todo.router.js"


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
 


app.get('/', (req, res) => {
    res.status(200).json({ status: 'OK' });
});
connectDb()

app.use("/app",router)


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
