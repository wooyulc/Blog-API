//app.js

const express = require("express");
require("dotenv").config();
require("./config/dbConnect");
//const dotenv = require("dotenv")
//dotenv.config()
const app = express();

// middlewares
// routes
// Error handlers middlewares
// listen to server
const PORT = process.env.PORT || 9000; //if no value on PORT, use 9000

app.listen(PORT, console.log(`server is up and running on ${PORT}`))