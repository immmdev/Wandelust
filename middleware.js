const Listing = require("./models/listing");
const Review = require("./models/review");
const {listingSchema, reviewSchema}=require("./Schema.js");
const ExpressError=require("./util/ExpressError.js");

module.exports.isLoggedin = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl; // Store the intended URL
        req.flash("error", "You must log in first!");
        return res.redirect("/login");
    }
    next();
};

module.exports.savedRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl; 
        delete req.session.redirectUrl; // Clear it after use
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    let {id}=req.params;
    let listing =  await Listing.findById(id);
    if( !listing.owner || !listing.owner.equals(req.user._id)){ //using direct req.user._id
        req.flash("error","Not Prmitted to update");
        return  res.redirect(`/listing/${id}`);

    };
    next();
}


module.exports.validateListing = (req, res, next) => { 
    let { error } = listingSchema.validate(req.body); // Validate request body
    if (error) {
        let errMsg= error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400, errMsg); // Throw error if validation fails
    } else {
        next();  // Proceed to the next middleware or route handler
    }
};


module.exports.validateRating = (req, res, next) => { 
    let { error } = reviewSchema.validate(req.body); // Validate request body
    if (error) {
        let errMsg= error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400, errMsg); // Throw error if validation fails
    } else {
        next();  // Proceed to the next middleware or route handler
    }
};

module.exports.isReviewAuthor = async (req, res, next) => {
    let {id, reviewId}=req.params;
    
    console.log(req.user._id);
    let review =  await Review.findById(reviewId);
    console.log(review.author);
    if(!review.author.equals(req.user._id)){ //using direct req.user._id
        req.flash("error","Not Prmitted to Delete");
        return  res.redirect(`/listing/${id}`);

    };
    next();
}


