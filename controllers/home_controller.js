module.exports.home = (req,res)=>{
    console.log(req.cookies);
    res.cookie('user_id',23);
    return res.render('home',{
        title:"Home"
    });
}