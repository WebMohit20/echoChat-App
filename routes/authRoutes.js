const express = require("express");
const router = express.Router();

const { controllers } = require("../controllers/authController");

// this is will work as a middlewear it will validate the user data before registration or login
const validator = require("express-joi-validation").createValidator({});
const Joi = require("joi");


const {login,register} = controllers;

// validating user data before sending data to DB
const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    email : Joi.string().email().required(),
    password: Joi.string().min(6).max(12).required() // .pattern() with regex for strong password
})

const loginSchema = Joi.object({
    email : Joi.string().email().required(),
    password: Joi.string().min(6).max(12).required()
})

// for registration user
router
    .post("/register",validator.body(registerSchema),register)

//for login registered user
router
    .post("/login",validator.body(loginSchema),login)

// router.use("/",login);

module.exports = router;