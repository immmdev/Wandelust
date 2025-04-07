const Listing=require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN; // for geocoding
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req,res)=>{
    const allListing= await Listing.find({});
    res.render("index.ejs",{allListing});
};

module.exports.newListingForm = (req,res)=>{
    res.render("new.ejs");
}

module.exports.showListing = async (req,res)=>{
    let {id}=req.params;
    const showData= await Listing.findById(id)
    .populate({
        path:"reviews",
        populate:{
            path:"author",
        },
        })
    .populate("owner");
    if(!showData){
        req.flash("error","Listing not exist");
        res.redirect("/listing");
    }
    res.render("show.ejs",{showData});
}

module.exports.createListing = async(req,res,next)=>{
    let response = await geocodingClient.forwardGeocode({
        query:req.body.listing.location,
        limit: 2
      })
        .send()
    // let {title,description,image,price,location,country}=req.body;
        let url = req.file.path;
        let filename = req.file.filename;
        
        let listing=req.body.listing;
        console.log(listing);
        const newListing= new Listing(listing);
        
        newListing.owner = req.user._id;
        newListing.image = {url, filename};
        newListing.geometry = response.body.features[0].geometry;
        
        await newListing.save();
        req.flash("success","New Listing Created");
        res.redirect("/listing");

}

module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing does not exist");
        return res.redirect("/listing"); // Added return to stop execution
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/h_300,w_250");
    res.render("edit.ejs", { listing, originalImageUrl});
}

module.exports.upadateListing = async (req,res)=>{
    let {id}=req.params;
    
    
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    let url = req.file.path;
    if(typeof req.file !== "undefined"){
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash("success","Listing Updated");
    res.redirect(`/listing/${id}`);
}

module.exports.deleteListing = async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted");
    res.redirect("/listing");
}

module.exports.filterDomes = async (req,res)=>{
    const listings = await Listing.find({category:'domes'});
    req.flash("success", "Filtered Domed only");
    res.render("filters/domes.ejs",{listings});
}

module.exports.filterRooms = async (req,res)=>{
    const listings = await Listing.find({category:'rooms'});
    req.flash("success", "Filtered Rooms only");
    res.render("filters/rooms.ejs",{listings});
}

module.exports.filterIconic = async (req,res)=>{
    const listings = await Listing.find({category:'iconic-cities'});
    req.flash("success", "Filtered Iconic Cities only");
    res.render("filters/iconic.ejs",{listings});
}
module.exports.filterMountains = async (req,res)=>{
    const listings = await Listing.find({category:'mountains'});
    req.flash("success", "Filtered Mountains only");
    res.render("filters/mountains.ejs",{listings});
}
module.exports.filterFarms = async (req,res)=>{
    const listings = await Listing.find({category:'farms'});
    req.flash("success", "Filtered Farms only");
    res.render("filters/farms.ejs",{listings});
}
module.exports.filterCastle = async (req,res)=>{
    const listings = await Listing.find({category:'castle'});
    req.flash("success", "Filtered Castles only");
    res.render("filters/castle.ejs",{listings});
}
module.exports.filterArctic = async (req,res)=>{
    const listings = await Listing.find({category:'arctic'});
    req.flash("success", "Filtered Rooms only");
    res.render("filters/arctic.ejs",{listings});
}
module.exports.filterBoatHouse = async (req,res)=>{
    const listings = await Listing.find({category:'boat-house'});
    req.flash("success", "Filtered Rooms only");
    res.render("filters/iconic.ejs",{listings});
}

module.exports.filterTrending = async (req,res)=>{
    const listings = await Listing.find({category:'trending'});
    req.flash("success", "Filtered Rooms only");
    res.render("filters/trending.ejs",{listings});
}

