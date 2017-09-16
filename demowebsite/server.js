let {http} = require('./base');
let port = 18080;
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    let body = 'hello cungen';
    res.write(body);
    res.end();
}).listen(port);
