if(process.env.NODE_ENV !="production"){
    require('dotenv').config()
}
const express= require("express");
const app=express();
const mongoose=require("mongoose");
const methodOverride = require("method-override");
var engine = require('ejs-mate');
const ExpressError=require("./util/ExpressError.js"); // requiring express error
const listingsRoute=require("./routes/listing.js");
const reviewsRoute=require("./routes/review.js");
const session=require("express-session");
const MongoStore = require('connect-mongo');
const flash=require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const userRoute = require("./routes/user.js");

const Listing=require("./models/listing.js");

 // use ejs-locals for all ejs templates:
app.engine('ejs', engine);

const port=8080;
const path=require("path");
app.use(methodOverride("_method"));

const dbUrl = process.env.ATLASDB_URL;


main()
 .then(()=>{
    console.log("connected to DB");
 })
 .catch((err)=>{
    console.log("")
 })
async function main() {
  await mongoose.connect(dbUrl);

}

app.set("view engine", "ejs"); // setting view engine 
app.set("views", path.join(__dirname,"views")); // setting up views
app.use(express.urlencoded({extended:true})); //parsing data
app.use(express.static(path.join(__dirname,"/public")));


const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter: 24*3600,
});

store.on("error",(err)=>{
    console.log("ERROR in MONGO SESSION STORE",err)
})

const sessionOption = {
    store,
    secret:  process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};


// app.get("/" , (req,res)=>{
//     res.send("hi im root");
// });


app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize()); 
app.use(passport.session()); // verifying session
passport.use(new LocalStrategy(User.authenticate())); //authenticating through loacal statgey
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser = req.user;
    next();
})

// using routes from router directory 
app.use("/listing",listingsRoute);
app.use("/listing/:id/reviews",reviewsRoute);
app.use("/",userRoute);



// page not found route
app.all("*",(req,res,next)=>{ // throwing customized error for uncreated route
    next(new ExpressError(404,"page not found"));
})

//middleware
app.use((err,req,res,next)=>{ // catching request and expracting status code and message
    let {statusCode=500,message="something went wrong"}=err; // default staus code and message in case message not and staus code no passed
    res.render("error.ejs",{message});
})

app.listen(8080,()=>{
    console.log(`app is listening ${port}`);
});
