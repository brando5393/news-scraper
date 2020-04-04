const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());

require("./controllers/controllers.js")(app);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;