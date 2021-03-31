var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set the home page route
app.get('/', function (req, res) {
  //U need to specify header the bare minimum
  res.header('Content-Type', 'text/html; charset=utf-8');
  res.end('hi from Index page');
});

//basket response only hold for a session
var basket = [];

// POST method route
app.post('/add_item', function (req, res) {
  console.log('req.body', req.body);
  basket.push(req.body);
  res.json(req.body);
});

// PUT method route
app.put('/update_item', function (req, res) {
  const itemIndex = basket.findIndex(
    ({ productId }) => productId === req.body.productId,
  );
  basket[itemIndex] = req.body;
  res.json(req.body);
});

// GET basket
app.get('/get_basket', function (req, res) {
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({ basket });
});

// DELETE basket
app.delete('/delete_item', function (req, res) {
  const itemIndex = basket.findIndex(
    ({ productId }) => productId === req.body.productId,
  );
  basket = [...basket.slice(0, itemIndex), ...basket.slice(itemIndex + 1)];
  res.json('item deleted');
});

// port listening
app.listen(port, function () {
  console.log('Our app is running on http://localhost:' + port);
});
