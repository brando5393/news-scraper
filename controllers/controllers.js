const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = (app) => {
    app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/views/index.html")));

    // Scrape Route
    app.get("/scrape", (req,res) => {
        axios.get("https://www.reuters.com/news/us").then((res) =>{
            const $ = cheerio.load(res.data);
            $(".FeedItem_right-wrap").each((i,element) =>{
                const results = {};
                results.articleTitle = $(this).children("a").text();
                results.articleLink = $(this).children("a").attr("href");
                results.postTime = $(this).children(".FeedItemMeta_date-updated").text();
                results.articleSummary = $(this).children(".FeedItemLede_lede").text();
            })
        });
    })
};