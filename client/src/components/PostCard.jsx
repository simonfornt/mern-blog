import { Link } from "react-router-dom";



function PostCard({post}) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={post.image} alt="" className="w-full h-auto object-cover" />
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-2">By {post.author} on {post.date}</p>
            <p className="text-gray-700">{post.content.slice(0, 100)}...</p>
            <Link
            to={`/posts/${post.id}`} className="inline-block mt-3 text-blue-600 hover:underline">Read more</Link>
        </div>
    </div>
  )
}

export default PostCard;