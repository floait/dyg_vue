let http = require('http');
let server = http.createServer();
let qs = require('querystring');

server.on('request', function(req, res) {
  console.log('start');
  let postData = '';

  // 数据块接收中
  req.addListener('data', function(chunk) {
    postData += chunk;
    console.log("line11",postData)
  });

  // 数据接收完毕
  req.addListener('end', function() {
    postData = qs.parse(postData);

    // 跨域后台设置
    res.writeHead(200, {
      'Access-Control-Allow-Credentials': 'true',     // 后端允许发送Cookie
      'Access-Control-Allow-Origin': 'http://localhost:8080',    // 允许访问的域（协议+域名+端口）
      /*
       * 此处设置的cookie还是domain2的而非domain1，因为后端也不能跨域写cookie(nginx反向代理可以实现)，
       * 但只要domain2中写入一次cookie认证，后面的跨域接口都能从domain2中获取cookie，从而实现所有的接口都能跨域访问
       */
      'Set-Cookie': 'l=a123456;Path=/;Domain=http://localhost:8080;HttpOnly'  // HttpOnly的作用是让js无法读取cookie
    });

    res.write(JSON.stringify(postData));
    console.log(postData)
    res.end();
  });
});

server.listen('8099');
console.log('Server is running at port 8099...');
