const User = require("../models/user");

module.exports.signUpForm = (req,res)=>{
    res.render("users/signup.ejs");
}

module.exports.signUpPost = async (req,res)=>{
    try {
        let {username,email,password} = req.body;
        const newUser = new User({
            email,
            username
        });
        let registeredUser = await User.register(newUser,password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","SignUp Succesfull"); 
            res.redirect("/listing");
        });
        
    } catch(e) {
        req.flash("error",e.message);
        res.redirect("/listing");
    }
}

module.exports.logInForm = (req,res)=>{
    res.render("users/login.ejs");
}

module.exports.loginPost = (req, res) => {
    req.flash("success", "Welcome Back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listing"; // Use saved URL or default
    res.redirect(redirectUrl);
}

module.exports.logOutForm = (req,res)=>{
    req.logout((err)=>{
        if(err){
          return  next(err);
        }
        req.flash("success","You are logged out");
        res.redirect("/listing");
    })
}