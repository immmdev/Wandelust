const Listing=require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.postRoute = async (req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    let a=await newReview.save();
    let b=await listing.save();
    console.log(await Listing.findById(req.params.id));
    req.flash("success"," New Review Created");
    res.redirect(`/listing/${req.params.id}`)
}

module.exports.deleteRoute = async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted");
    res.redirect(`/listing/${id}`);
}