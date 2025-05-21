import { useState } from 'react';
import axios from 'axios';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    date: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/blogs', formData,{withCredentials:true});
      alert('Blog posted successfully!');
      setFormData({
        title: '',
        content: '',
        author: '',
        date: '',
        image: ''
      });
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };

  return (
    <form  onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />

      <textarea
        name="content"
        placeholder="Content"
        value={formData.content}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        rows="4"
        required
      />

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />

      <input
        type="text"
        name="date"
        placeholder="Date (YYYY-MM-DD)"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Post Blog
      </button>
    </form>
  );
};

export default CreateBlog;
