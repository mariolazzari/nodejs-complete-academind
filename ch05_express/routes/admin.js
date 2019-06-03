const path = require("path");
const router = require("express").Router();

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  res.redirect("/");
});

module.exports = router;
