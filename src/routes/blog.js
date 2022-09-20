const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here

router.post('/blog', async (req, res) => {
    try {
        let data = await req.body;
        let newBlog = new Blog(data);
        newBlog.save();
        console.log(newBlog);
        res.status(200).json({
            status: "success",
            result: newBlog
        })
    }
    catch (e) {
        res.status(400).json({ message: "e.message" })
    }
})
router.get('/blog', async (req, res) => {
    try {
        let data = await Blog.find();
        res.status(200).json({
            status: "success",
            result: data
        })
    }
    catch (e) {
        res.status(400).json({ message: "e.message" })
    }
})
router.delete('/blog/:id', async (req, res) => {
    try {
        let data = await Blog.findById(req.params.id);
        await Blog.findByIdAndRemove(req.params.id)
        res.status(200).json({
            status: "success",
            result: data
        })
    }
    catch (e) {
        res.status(400).json({ message: "e.message" })
    }
})


module.exports = router;