const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  // Generate new comment ID
  const commentId = randomBytes(4).toString('hex');
  // Pull content from comment
  const { content } = req.body;
  // check to see if posts has array of comments already if null then give empty array
  const comments = commentsByPostId[req.params.id] || [];
  // push new comment to this array
  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});
