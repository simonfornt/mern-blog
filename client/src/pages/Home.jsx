import React from 'react'
import posts from '../data/posts';
import PostCard from '../components/PostCard';

function Home() {
 return(
 <>
 <div>
  <h1>Welcome to home page</h1>
 </div>
  <div className='grid md:grid-cols-3 gap-4 sm:grid-cols-1'>
    {posts.map((post) =>(
      <PostCard key={post.id} post={post}/>
    ))}
  </div>
  </>
 );
}

export default Home;