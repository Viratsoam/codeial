const User = require('../model/user');

module.exports.user = function(req,res){
    // console.log("yes I'm the user!!");

    return res.render('users',{
        title:"User"
    });
}

// signup
module.exports.signUp = function(req,res){
    console.log("I'm signUp page!");
    return res.render('user_signUp',{
        title:"Sign-Up"
    });
}

// signIn
module.exports.signIn =(req,res)=>{
    console.log("I'm signIn page!!");
    return res.render('user_signIn',{
        title:"Sign-In"
    });
}

// create the user / get the singup data
module.exports.create = (req,res)=>{
    // TODO later

    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},(err,user)=>{
        if(err){
            console.log(`Error in finding user in signup:${err}`);
            return;
        }
        if(!user){
            User.create(req.body,(err,user)=>{
                if(err){
                    console.log(`Error in creating while user:${err}`);
                    return;
                }
                return res.redirect('/users/sign-in');
            });
        }else{
            return res.redirect('back');
        }
    });

}

// create the user session / signin

module.exports.createSession  = (req,res)=>{
// TODO Later
    User.findOne({email:req.body.email},(err,user)=>{
        if(err){
            console.log(`User doesn't exist:${err}`);
            return;
        }
        if(user.password == req.body.password){
            return res.redirect('users/profile');
        }else{
            return res.redirect('back');
        }
    });

}
