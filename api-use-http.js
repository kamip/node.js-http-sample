/**
 * Node.js の httpモジュールを使用してwikiのページを取得するサンプル [不完全...(´・ω・｀)]
 *  - 302が返ってくると終了するのでその後の処理は自分で書く必要がある...?
 *    参考URL: http://nodejs.org/api/http.html#http_http_request_options_callback
 */
var http = require('http');

var jquery_js = 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js';

var options = {
    host: 'ja.wikipedia.org',
    port: 80,
    path: '/wiki/%E7%89%B9%E5%88%A5:%E3%81%8A%E3%81%BE%E3%81%8B%E3%81%9B%E8%A1%A8%E7%A4%BA',
    method: 'GET',
    headers: {
        'user-agent' : 'Mozilla/4.7 [ja]C-{C-UDP; EBM-SONY2}',
    }
};

var req = http.request(options, function(res){
    console.log('STATUS: ' + res.statusCode);
    console.log(res.headers);
    res.setEncoding('utf-8');
    res.on('data', function(chunk){
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function(e){
    console.log('problem with request: ' + e.message);
});

req.write('data\n');
req.write('data\n');
req.end();

/**
 *  http.js の中身を一部抜粋
 *
  if (!Array.isArray(options.headers)) {
    if (options.headers) {
      var keys = Object.keys(options.headers);
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        self.setHeader(key, options.headers[key]);
      }
    }
    if (options.host && !this.getHeader('host') && options.setHost) {
      var hostHeader = options.host;
      if (options.port && +options.port !== options.defaultPort) {
        hostHeader += ':' + options.port;
      }
      this.setHeader('Host', hostHeader);
    }
  }
 */
