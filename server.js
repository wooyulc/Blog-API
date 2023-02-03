//app.js

const express = require("express");
// DotEnv is a lightweight npm package that automatically loads environment variables from a .env file into the process.env object.
require("dotenv").config();
require("./config/dbConnect");
//same as 
//const dotenv = require("dotenv")
//dotenv.config()
const app = express(); //assign express to an app variable, now able to reference your instance of express(server you're working with)

// middlewares
// -------
// routes
// users route
// POST/api/v1/users/register
app.post('/api/v1/users/register', async()=>{ //the HTTP POST requests to the specified path with the specified callback functions
    try{
        resizeBy.json({
            status: "Success",
            data: "user registered"
        });
    } catch (error) {
        resizeBy.json(error.message);
    }
}); 

// POST/api/v1/users/login
app.post('/api/v1/users/login', async()=>{ //the HTTP POST requests to the specified path with the specified callback functions
    try{
        resizeBy.json({
            status: "Success",
            data: "user login"
        });
    } catch (error) {
        resizeBy.json(error.message);
    }
});

// GET/api/v1/users/:id
app.get('/api/v1/users/profile/:id', async()=>{ //the HTTP POST requests to the specified path with the specified callback functions
    try{
        resizeBy.json({
            status: "Success",
            data: "Profile route"
        });
    } catch (error) {
        resizeBy.json(error.message);
    }
});

// GET/api/v1/users
app.get('/api/v1/users', async()=>{ //the HTTP POST requests to the specified path with the specified callback functions
    try{
        resizeBy.json({
            status: "Success",
            data: "Profile route"
        });
    } catch (error) {
        resizeBy.json(error.message);
    }
});
// posts route
// comments route
// categories route
// -------
// Error handlers middlewares
// set app to listen to server(port)
const PORT = process.env.PORT || 9000; //if no value on PORT, use 9000

app.listen(PORT, console.log(`server is up and running on ${PORT}`))