const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
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
