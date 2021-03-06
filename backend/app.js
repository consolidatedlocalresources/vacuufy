const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://jpstrategy:EmM6TNKApGaBlRSt@cluster0-rwgoo.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(() => {
  console.log("Connected to database!")
})
.catch(() => {
  console.log("Connection failed!")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});
// EmM6TNKApGaBlRSt

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'c507cqf5e70',
      title: 'First Server-Side Post',
      content: 'This is where we add some amazing content'
    },
    { id: 'qc3g579cq5g8m0',
      title: 'Second Server-Side Post',
      content: 'This is where we add even MORE amazing content'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
