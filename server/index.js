const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const connectDb = require("./config/db");
const cors = require("cors");
dotenv.config();

app.use(cors());


app.use(express.json());

app.use("/tasks",taskRoutes);

connectDb();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})