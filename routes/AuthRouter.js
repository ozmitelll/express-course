const bcrypt = require("bcrypt");
const userService = require("../services/user.service");
const { password } = require("../config/database.config");

const router = require("express").Router();

router.get('/login', (req,res,err)=>{
    res.render("auth/login");
});

router.post('/login', (req,res,err)=>{

})


router.get("/registration", (req,res,err)=>{
    res.render("auth/registration");
})

router.post('/registration', async (req,res,err)=>{
    let {username, email, password} = req.body;
    try{
        if(await userService.isExistsByUsername(username)){
            res.render(`<h1>This ${username} user already exists in db!</h1>`);
        }
        password = await bcrypt.hash(password,10);
        await userService.createUser({username, email, password});
        res.redirect("/login");
    }
    catch (err){
        console.log("Error: ", err.message);
    }
})



module.exports = router;