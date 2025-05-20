
import React, {useEffect, useState} from "react";
import axios from "../api/axios";


const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:500/api/blogs');
               
                setBlogs(response.data);
                setLoading(false);
            } catch(error) {
                console.error('Error fetching Blogs:', error);
                setLoading(false);
            }
        };
        
        fetchBlogs();
    }, []);

    if(loading) {
        return <div className="text-center py-8">Loading....</div>;
    }

    return(
        <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
                <div key={blog._id} className="border rounded p-4 shadow bg-white">
                    <img src={blog.image} alt="" />
                    <h2  className="text-xl font-bold">{blog.title}</h2>
                    <p>{blog.content}</p>
                    <p>By {blog.author} on {blog.date}</p>

                </div>
            ))}
        </div>
    );

};

export default BlogList;