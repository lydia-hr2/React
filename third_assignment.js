const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/grade", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, function () {
  console.log("서버가 시작되었습니다.");
});
