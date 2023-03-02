const http = require('http');
var express = require('express');
var path = require('path');
let requestCounter = 0;

var server = http.createServer((request, response) => {
    requestCounter++;

    switch (request.url) {
        case '/students':
            response.write('STUDENTS')
            break;
        case '/':
        case '/courses':
            response.write('FRONT + BACK')
            break;
        default:
            response.write('404 not found')
            }

    response.end()
})

// add a favicon
server = express()
const favicon = require('serve-favicon');
server.use(favicon(path.join(__dirname, 'img', 'fav.jpg')));
server.get('/', (req, res) => {
    res.send()
})

server.listen(3003)
