const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    title: {
      type: String,
      required: true  
    },
    link: {
        type: String
    },
    summary: {
        type: String,
        required: true
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: "comments"
    }
});

const Article = mongoose.model("articles", ArticleSchema);

module.exports = Article;