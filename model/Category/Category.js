//Category.js

const mongoose = require('mongoose');

//create schema
const categorySchema = new mongoose.Schema({
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        title:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

//Compile the comment model
const Category = mongoose.model("Category", categorySchema);

module.exports =  Category;