const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const Review=require("./review");
const { required } = require('joi');


const listingSchema= new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    category:{
        type:String,
    },
    image:{
        url:String,
        filename:String,

    },
    price:Number,
    location:String,
    country:String,
    reviews:[{
        type:Schema.Types.ObjectId, 
        ref:"Review"
    }],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User" //refrence collection
    },
    geometry: {
        type: {
            type: String, // Specifies the geometry type (e.g., 'Point')
            enum: ['Point'], // Ensures only 'Point' is allowed as per GeoJSON standards
            required: true // Ensures a geometry type is always provided
        },
        coordinates: {
            type: [Number], // Stores longitude and latitude as an array [lng, lat]
            required: true // Ensures coordinates are always provided
        }
    },
   

});

// This middleware function in Mongoose is a post-hook 
// (post("findOneAndDelete")),
//  meaning it runs after a document is deleted using findOneAndDelete().
listingSchema.post("findOneAndDelete", async (listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}})
    }
});

const Listing=mongoose.model("Listing",listingSchema);

module.exports=Listing;