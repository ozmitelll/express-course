const router = require("express").Router();


const AuthRouter = require("./AuthRouter");
router.use(AuthRouter);

const HomeRouter = require("./HomeRouter");
router.use(HomeRouter);

module.exports = router;