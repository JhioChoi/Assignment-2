/*
Name: Jiho Choi
File Name: Business_contact.js
Sutudent Number: 301183378
Date: October 31, 2022
*/ 
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let passport = require("passport");

let Business_contactController = require("../controllers/Business_contact");

function requireAuth(req, res, next) {
  // check the user log-in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* GET Route for the Book List page - READ Operation */
router.get("/contact-list", requireAuth, Business_contactController.displaybusinessList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/contact-list/add", requireAuth, Business_contactController.addpage);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/contact-list/add", requireAuth, Business_contactController.addprocesspage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/contact-list/edit/:id", requireAuth, Business_contactController.displayeditpage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/contact-list/edit/:id", requireAuth, Business_contactController.processingeditpage);

/* GET to perform  Deletion - DELETE Operation */
router.get("/contact-list/delete/:id", requireAuth, Business_contactController.deletepage);

module.exports = router;
