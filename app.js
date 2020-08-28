const express = require("express"); //not defaul

const app = express();

//MIDDLEWARES

//for parsing sent forms
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); //for parsing multipart form data

//POST,GET REQUESTS
app.get("hello", (req, res) => {
  console.log("hello");
  res.send("greetings!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
