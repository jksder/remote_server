const express = require("express"); //not default
const bodyParser = require("body-parser");
const { exec } = require("child_process");
const shellHistory = require("shell-history");


const app = express();

//MIDDLEWARES

//for parsing sent forms
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); //for parsing multipart form data

//POST,GET REQUESTS
app.get("/get_version", (req, res) => {
  exec("lsb_release -a", (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    } else if (stderr) {
      console.log(`stdouterr:${stderr}`);
    } else {
      res.send(stdout);
    }
  });
});

app.get("/get_history", (req, res) => {

  res.send(shellHistory());
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
