const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(request, res){

  app.post("/", function(req, res){
    const first = req.body.firstName;
    const last = req.body.lastName;
    const email = req.body.email;

    apiKey = "000c6cb208e6cf6b11cf9b1b9f0c3834-us14";

    // https.get(url, function(response){
    //   response.on("data", function(data){
    //     const weatherData = JSON.parse(data)
    //     const temp = weatherData.main.temp
    //     const description = weatherData.weather[0].description
    //     const icon = weatherData.weather[0].icon
    //     console.log(description)
    //     res.write("<h1>The temperature in " + query + " is " + temp + " degrees Fahrenheit. <br>");
    //     res.write("It's looking like " + description + "!</h1>");
    //     res.write("<img src='http://openweathermap.org/img/wn/" + icon + ".png'/>")
    //     //http://openweathermap.org/img/wn/10d@2x.png
    //   })
    });

});

app.get("/success.html", function(request, res){

});

app.get("/failure.html", function(request, res){

});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
