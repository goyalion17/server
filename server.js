const http = require('http');

let requestCounter = 0;

const server = http.createServer((request, response) => {
    requestCounter++;

    switch (request.url) {
        case '/students':
            response.write('STUDENTS')
            break;
        case '/courses':
            response.write('FRONT + BACK')
            break;
        default:
            response.write('404 not found')
            }

    response.write(' Hello world: ' + requestCounter)
    response.end()
})

server.listen(3003)
