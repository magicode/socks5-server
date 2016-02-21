var listenPort = process.env.PORT || 1080;

var socks = require('socksv5');

var srv = socks.createServer(function(info, accept, deny) {
    accept();
});
srv.listen(listenPort, '0.0.0.0', function() {
    console.log('SOCKS server listening on port ' + listenPort);
});

srv.useAuth(socks.auth.None());