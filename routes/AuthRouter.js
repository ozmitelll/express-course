const router = require("express").Router();

router.get('/login', (req,res,err)=>{
    res.render("auth/login");
});

router.post('/login', (req,res,err)=>{

})


router.get("/registration", (req,res,err)=>{
    res.render("auth/registration");
})

router.post('/registration', (req,res,err)=>{
    const data = req.body;
    console.log(data);
})



module.exports = router;