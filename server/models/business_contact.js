/*
Name: Jiho Choi
File Name: Business_contact.js
Sutudent Number: 301183378
Date: October 31, 2022
*/ 
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let contactModel = mongoose.Schema(
  {
    name: String,
    email: String,
    number: String
   
  },

  {
    collection: "contacts",
  }
);

module.exports = mongoose.model("contact", contactModel);