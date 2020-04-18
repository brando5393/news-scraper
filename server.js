const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper-db";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

require("./controllers/controllers.js")(app);

mongoose.connect(MONGODB_URI, (err) =>{if(err) throw err})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;