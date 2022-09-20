const { string } = require('joi');
const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    posted_at: {
        type: String,
        required: true
    },
    posted_by: {
        type: String,
        required: true
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;