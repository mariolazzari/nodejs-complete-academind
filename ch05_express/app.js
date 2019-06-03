const path = require("path");
const express = require("express");

const app = express();

app.use("/admin", require("./routes/admin"));
app.use("/shop", require("./routes/shop"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// catch all route
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => console.log("Express started"));
