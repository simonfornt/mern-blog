const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');


// create post, api, blogs

router.post('/', async (req, res) => {
    try{
        const blog = new Blog(req.body);
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (err){
        res.status(400).json({error: err.message});   
    }
});

// read : get, api, blogs

router.get('/', async(req, res) =>{
    try{
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});


// READ single : GEt, api, blogs, :id
router.get('/:id', async(req,res)=>{
    try{
        const blog = await Blog.findById(req.params.id);
        if(!blog) return res.status(400).json({error: 'Not Found'});
        res.json(blog);
    } catch (err){
        res.status(500).json({error: err.message});
    }
});


// Update: put , api, blogs, :id

router.put('/:id', async (req, res) => {
    try{
        const updateBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.json(updateBlog);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});


//   DELETE: DELETE , API, BLOGS,:ID    

router.delete('/:id', async(req, res) => {
    try{
        await Blog.findByIdAndDelete(req.params.id);
        res.json({message: 'Delete successfully'});
    } catch (err){
        res.status(500).json({error: err.message});
    }
});


module.exports = router;