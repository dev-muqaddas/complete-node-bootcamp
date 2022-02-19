// creting server using http package
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const slugify = require('slugify');
const replaceTemplate = require('./modules.js/replaceTemplate');

// reading the templates
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf8'
);

//reading json data
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf8');
const dataObj = JSON.parse(data);
const slug = dataObj.map((el) => slugify(el.productName, { lower: true }));

//SERVER
const server = http.createServer((req, res) => {
  const { query, pathname: pathName } = url.parse(req.url, true);

  //Adding routes to server
  //overview page
  if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, { 'content-type': 'text/html' });
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);

    //product page
  } else if (pathName === '/product') {
    res.writeHead(200, { 'content-type': 'text/html' });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);

    //API page
  } else if (pathName === '/api') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(data);

    //not found
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(8000, (err, res) => {
  console.log('listening to http://localhost:8000');
});
