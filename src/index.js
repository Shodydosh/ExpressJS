const express = require('express');
const morgan = require('morgan');
const path = require('path');
const  { engine } = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//! HTTP logger
app.use(morgan('combined'));

//! Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs'); // set view engine = handlebars
app.set('views', path.join(__dirname, 'resources/views'));

console.log(__dirname);

app.get('/', (req, res) => {
  return res.render('home');
})

app.get('/news', (req, res) => {
  return res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})