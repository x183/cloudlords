const express = require("express");
var cors = require("cors");
var fs = require("fs");

const app = express();
app.use(cors());
const port = 3000;

app.get("/amount_images", (req, res) => {
  const amount_of_images = fs
    .readdirSync("public/images")
    .filter((name) => name.includes("Cloud")).length;
  res.send({ amount: amount_of_images });
});

app.get("/backend/:path*", (req, res) => {
  const params = req.params;
  var path = params["path"];
  if (params["0"]) {
    path += params["0"];
  }
  console.log(req.params);
  fetch("http://localhost:8000/" + path).then((response) => {
    response.json().then((data) => {
      res.send(data);
    });
  });
});

/* app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
 });*/

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
