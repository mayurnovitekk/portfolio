const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/fonts'));
app.use(express.static(__dirname + '/images'));


app.get('/', (req, res) => {
  res.render('home.hbs');
});

app.listen(port, () => {
  console.log(`Start port ${port}`);
});
