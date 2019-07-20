const fs = require('fs');
var path = require('path');
const url = require('url');
const querystring = require('querystring');
const getData = require('./getData.js');

const express = require('express');
const app = express();

const dataFile = fs.readFileSync('./data.json');
const items = JSON.parse(dataFile);

const hostname = 'localhost';
const port = 8080;

app.get('/data', (req, res) => {
    let params = querystring.parse(url.parse(req.url).query);
    
    let country = params['country'];
    let group = params['group'];
    
    if(country === ''&& group === ''){
        res.json(getData.getCountries(items))
    }
    else if(country !== '' && group === ''){
        res.json(getData.getGroups(items, country));
    }
    else if(country !== '' && group !== ''){
        res.json(getData.getAlbums(items, country, group));
    }
});
app.listen(port, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});