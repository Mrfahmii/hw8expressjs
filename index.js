var express = require("express");
var app = express();

var films = require("./routing/films.js");
var categories = require("./routing/categories.js");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/films", films);
app.use("/categories", categories);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
