const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, required: true },
  image: { type: String, required: true }
});

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;
