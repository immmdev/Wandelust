const express = require("express");
const router = express.Router(); 
const User = require("../models/user");
const wrapAsync = require("../util/wrapAsync");
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware");
const userController = require("../controllers/user");


router.route("/signup")
    .get(userController.signUpForm)
    .post(wrapAsync(userController.signUpPost));


router.route("/login")
    .get( userController.logInForm)
    .post(
        savedRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: true,
        }),
        userController.loginPost
    );

router.get("/logout",userController.logOutForm)

module.exports = router;