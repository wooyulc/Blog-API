//User.js
const mongoose = require('mongoose');

//create schema
const userSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required:[true, 'First Name is required']
        },
        lastName: {
            type: String,
            required:[true, 'Last Name is required']
        },
        profilePhoto: {
            type: String
        },
        email: {
            type: String,
            required:[true, 'Email is required']
        },
        password: {
            type: String,
            required:[true, 'Password is required']
        },
        postCount: {
            type: Number,
            default: 0
        },
        isBlocked: {
            type: Boolean,
            default: false
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        firstName: {
            type: String,
            required:[true, 'First Name is required']
        },
        role: {
            type: String,
            enum: ["Admin", "Guest", "Editor"]
        },
        viewed: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        follewer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        follewing: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        active: {
            type: Boolean,
            default: true
        },
        posts: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    },
    {
        timestamps: true
    }
);


//Compile the user model
const User = mongoose.model('User', userSchema);

module.exports = User;