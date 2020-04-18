const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models")
module.exports = (app) => {
    app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/views/index.html")));

    // Scrape Route
    app.get("/scrape", (req,res) => {
        axios.get("https://www.reuters.com/news/us").then((res) =>{
            const $ = cheerio.load(res.data);
            $(".ImageStoryTemplate_image-story-container").each((i,element) =>{
                const results = {};
                results.articleTitle = $(this).find(".FeedItemHeadline_headline").text();
                results.articleLink = $(this).find(".FeedItemHeadline_headline").attr("href");
                results.articleSummary = $(this).find(".FeedItemLede_lede").text();
                console.log(results);
                db.Article.create(results);
            });
        }).catch(err =>{ if(err) throw err});
        // for(i = 0; i < results.length; i ++){
        //     $("#news").append("<a>").text(results.articleTitle[i]).attr("href", results.articleLink[i]);
        //     $("#news").append("<p>").text(results.articleSummary[i]);
        //     $("#news").append("<p>").text(`Article Published ${results.postTime[i]}`);

        // }
        res.send("scrape complete");

        app.get("/articles", (req, res) =>{
            db.articles.find({}).then((dbarticle) => res.jason(dbarticle)).catch((err) => res.jason(err));
        });
    });
};