const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommentsSchema = new Schema({
    title: {
      type: String,
      required: true  
    },
    comment: {
        type: String,
        required: true
    }
});

const Comments = mongoose.model("comments", CommentsSchema);

module.exports = Comments;