//using express server
const express = require('express')
const app = express()
const port = 3000;

const data = require('../dev-data/data.json');

app.get('/', (req, res) => {
  res.send('Hello this is homepage');
});

app.post('/overview', (req, res) => {
  res.send('This is an overview page');
});

app.get('/about', (req, res) => {
  res.send('This is about page');
});

app.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send((data));
})

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.set('Content-Type', 'text/html');
  res.send('<h1>Page not Found</h1>', 404);
});

app.listen(port, () => {
  console.log(`listening to http://localhost:3000`)
})
console.log("hello")