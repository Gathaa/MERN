const express = require('express');
const app = express(); 
const dotenv = require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./Users");
const authRoutes = require("./Auth");
const connection = require("./DataBase");

connection();

app.use(express.json());
app.use(cors()); 
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
