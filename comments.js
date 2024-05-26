// create web server
// run this file with node comments.js
// visit http://localhost:3000/ in your browser
// enter a comment and click submit

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// set up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set up comments array
var comments = [];

// set up root route
app.get('/', function(req, res) {
  res.send(`
    <form method="post">
      <input type="text" name="comment">
      <button>Submit</button>
    </form>
    <ul>
      ${comments.map(comment => `<li>${comment}</li>`).join('')}
    </ul>
  `);
});

// set up post route
app.post('/', function(req, res) {
  comments.push(req.body.comment);
  res.redirect('/');
});

// start server
// do something else interesting here
app.listen(3000, function() {
  console.log('Server listening on http://localhost:3000/');
});