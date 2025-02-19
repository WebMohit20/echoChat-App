const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
require("./DB/db");
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.json());
app.use(cors());

//register the user authRoutes
app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})