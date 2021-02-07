const express = require('express');
const PORT = 3000;

const routes = require('./app/routes')

const app = express();

app.use(express.json())

app.use(routes)

app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`);
});

module.exports = app;