const router = require("express").Router();


router.get("/", (req,res,err)=>{
    res.render("home");
})


module.exports = router;