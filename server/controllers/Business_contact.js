/*
Name: Jiho Choi
File Name: Business_contacts.js
Sutudent Number: 301183378
Date: October 31, 2022
*/ 
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const Business_contact = require("../models/Business_contact");



module.exports.displaybusinessList = (req, res, next) => {
  Business_contact.find((err, business_List) => {
    if (err) {
      return console.error(err);
    } else {

      res.render("Business_contact/list", {
        title: "Business contact",
        Business_List: business_List,
        displayName: req.user ? req.user.displayName : "",
      });
    };
  });
};

module.exports.addpage = (req, res, next) => {
  res.render("Business_contact/add", {
    title: "Add Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.addprocesspage = (req, res, next) => {
  let newBusiness_contact = Business_contact({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    
  });
  Business_contact.create(newBusiness_contact, (err, Business_contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      res.redirect("/contact-list");
    }
  });
};

module.exports.displayeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  Business_contact.findById(id, (err, Business_contactedit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("Business_contact/edit", {
        title: "Edit contact",
        Business_contact: Business_contactedit,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.processingeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  let updateBusiness_contact = Business_contact({
    _id: id,
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    
  });
  Business_contact.updateOne({ _id: id }, updateBusiness_contact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the book list
      res.redirect("/contact-list");
    }
  });
};

module.exports.deletepage = (req, res, next) => {
  let id = req.params.id;
  Business_contact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh book list
      res.redirect("/contact-list");
    }
  });
};