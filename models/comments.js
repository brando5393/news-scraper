const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    user: String,
    CommentTitle: String,
    relatedArticle: String,
    commentBody: String,
    dateCreated: Date.now
})