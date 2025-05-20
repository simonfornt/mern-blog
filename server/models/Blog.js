const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    tags: [String],
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    date: {
        type:Date,
        default: Date.now
    },
    image: String,
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;