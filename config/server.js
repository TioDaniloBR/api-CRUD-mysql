var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');
const { into } = require('../app/repository/database');

var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.raw());
app.use(bodyParser.json());

consign()
.include('./app/routes')
.then('./app/repository')
.then('./app/controllers')
.then('./config/knexfile.js')
.into(app);

module.exports = app;