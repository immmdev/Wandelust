const express = require("express");
const router = express.Router(); 
const wrapAsync=require("../util/wrapAsync.js");
const Listing=require("../models/listing.js");
const {isLoggedin, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer  = require('multer')
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage });

// new route
router.get("/new", isLoggedin, listingController.newListingForm );
router.get("/domes", listingController.filterDomes);
router.get("/rooms", listingController.filterRooms);
router.get("/iconic", listingController.filterIconic);
router.get("/mountains", listingController.filterMountains);
router.get("/farms", listingController.filterFarms);
router.get("/castle", listingController.filterCastle);
router.get("/arctic", listingController.filterArctic);
router.get("/boathouse", listingController.filterBoatHouse);
router.get("/trending", listingController.filterTrending);

router.route("/")
    //index route
    .get(wrapAsync(listingController.index))
    //create route
    .post(isLoggedin,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.createListing));


router.route("/:id")
    //show route
    .get( wrapAsync(listingController.showListing))
    // update route
    .put(isLoggedin, isOwner,upload.single("listing[image]") ,validateListing , wrapAsync(listingController.upadateListing))
    //delete route
    .delete(isLoggedin, isOwner ,wrapAsync(listingController.deleteListing));

//edit route
router.get("/:id/edit", isLoggedin,isOwner, wrapAsync(listingController.editListing));

module.exports=router;
