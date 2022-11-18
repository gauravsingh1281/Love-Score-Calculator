const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const _ = require("lodash");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", (req, res) => {
  var username = _.capitalize(req.body.userName);
  var crushname = _.capitalize(req.body.crushName);
  var firstmeet = req.body.firstMeet;
  var thingslike = req.body.thingsLike;
  var usergender = req.body.gender;

  var randomNo = Math.floor(Math.random() * 100) + 1;
  var randomValue = `${randomNo * 1} % `;

  res.render("index", {
    USERNAME: username,
    CRUSHNAME: crushname,
    RANDOMVALUE: randomValue,
    USERGENDER: usergender,
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () =>
  console.log(`Server has started listening on port ${port}!`)
);
