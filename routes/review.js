const express = require("express");
const router = express.Router({mergeParams:true}); 
const wrapAsync=require("../util/wrapAsync.js");
const Listing=require("../models/listing.js");
const Review = require("../models/review.js");
const { validateRating, isLoggedin, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/review.js");

// post route
router.post("/", isLoggedin ,validateRating  , wrapAsync(reviewController.postRoute));

// delete review routed
router.delete("/:reviewId", isLoggedin, isReviewAuthor, wrapAsync(reviewController.deleteRoute));

module.exports=router;
