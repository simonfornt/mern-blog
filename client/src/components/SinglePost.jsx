import React, {useEffect, useState} from 'react';
import axios from '../api/axios';
import { useParams } from 'react-router-dom';

function SinglePost() {

    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try{
                const res = await axios.get(`/blogs/${id}`);
                setPost(res.data);
            } catch(err) {
                console.error('Error loading post', err);
            }
        };
        fetchPost();
    }, [id]);

    if(!post) return <div className=''>Loadding ..</div>


  return (
    <div>
        <img src={post.image} alt="" />
        <h1>{post.title}</h1>
        <p>By {post.author} on {new Date(post.date).toDateString()}</p>
        <p>{post.content}</p>
    </div>
  )
}

export default SinglePost