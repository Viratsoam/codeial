module.exports.user = function(req,res){
    console.log("yes I'm the user!!");

    return res.render('users',{
        title:"User"
    });
}