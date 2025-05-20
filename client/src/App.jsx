
import {Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BlogPost from './pages/BlogPost';
import Navbar from './components/Navbar';
import SinglePost from "./components/SinglePost";
import CreateBlog from "./components/CreateBlog";

function App() {
 

  return (
    <>
      <Navbar/>
      <div className="mx-w-5xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/post/:id" element={<BlogPost/>}/>
          <Route path="/create" element={<CreateBlog/>}/>
          <Route path="/post/:id" element={<SinglePost/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>

      </div>
    </>
  )
}

export default App
