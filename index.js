const http = require('http');
const express = require('express');
const app = express();
var server = http.createServer(app);

app.get("/anime", (request, response) => {
  let anime = request.query.url
  if(!anime) return response.send("Something Wrong :/")
  response.set('Content-Type', 'text/html');
  response.send(Buffer.from(`<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
video {
  max-width: 100%;
  height: auto;
}
</style>
</head>
<body style="text-align:center;">

<video width="1000" controls>
 <source src="${anime}" type="video/mp4">
  RedAura Is Best
</video>
</body>
</html>
`));
})

const listener = server.listen(process.env.PORT, function keepAlive() {
  console.log(`AnimeWatch on port ` + listener.address().port);
});


 
#enjoy 😂
