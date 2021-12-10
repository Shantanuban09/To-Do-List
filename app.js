const express = require("express");
const bodyParser = require("body-Parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var items = [];

app.get("/", function (req, res) {
  var today = new Date();

  var options = {
    month: "long",
    year: "numeric",
    day: "numeric",
    weekday: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("lists", {
    kindOfDay: day,
    newListItems: items,
  });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.listen(3000);
