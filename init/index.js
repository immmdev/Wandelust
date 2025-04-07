const mongoose = require('mongoose');
const Listing=require("../models/listing");
const initData=require("./data.js");


const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main()
 .then(()=>{
    console.log("connected to DB");
 })
 .catch((err)=>{
    console.log("")
 })
async function main() {
  await mongoose.connect(MONGO_URL);

}


const initDB=async()=> {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
};

initDB();