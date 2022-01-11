

const express = require("./node_modules/express");
const bodyParser = require("./node_modules/body-parser");
const date = require( __dirname + "/date.js");

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"] ;
const workItem = [];

app.set("view engine", "ejs");//tells the app to use ejs view engine - must be placed below the app const or it will not exist yet!!1

app.use(bodyParser.urlencoded({extended: true}));

app.use("/public",express.static("public"));

app.get("/", function(req, res){
    
    const day = date.getDate() ;

    res.render("list", { listItem: day ,newListItems: items});
});

app.post("/", function(req, res){
 
    const item = req.body.newItem;
   
    if(req.body.list === "work"){
        workItem.push(item);
        res.redirect("/work");
    
    }else {
        items.push(item);
        res.redirect("/");
    }
 
});

app.get("/work", function(req, res){
    res.render("list", {listItem: "work list", newListItems: workItem });
});

// app.post("/work", function(req, res){
//     let item = req.body.newItem;

//     workItem.push(item);

//     res.redirect("/work");

// });

app.get('/about', function(req, res) {
    res.render('about');
});


app.listen(3000, function(){
    console.log("Server started on port 3000.");
});