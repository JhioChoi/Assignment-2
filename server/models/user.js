/*
Name: Jiho Choi
File Name: user.js
Sutudent Number: 301183378
Date: October 31, 2022
*/ 
// require modules for the User Model
let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let User = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "username is required",
    },

    /* password: {
      type: String,
      default: "",
      trim: true,
      required: "password is required",
    },*/

    email: {
      type: String,
      default: "",
      trim: true,
      required: "email address is required",
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Display Name is required",
    },
    created: {
      type: Date,
      default: Date.now,
    },
    update: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);

let options = { missingPasswordError: "Wrong / Missing Password" };

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model("User", User);
