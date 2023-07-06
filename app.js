require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views/pages"));

app.use("/public", express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const appRoutes = require("./routes/index");
app.use(appRoutes);

const appConfig = require("./config/application.config");

app.listen(appConfig.port, ()=>{
    console.log(`Server started on ${appConfig.port} port !`);
})