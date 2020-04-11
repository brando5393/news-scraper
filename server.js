const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/news-scraper";

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());

require("./controllers/controllers.js")(app);

mongoose.connect(MONGODB_URI);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
module.exports = getNews;