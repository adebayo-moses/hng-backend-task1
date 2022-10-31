const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/', (req, res) => {
  res.json({
    slackUsername: 'Max',
    backend: 'true',
    age: 23,
    bio: "I'm a software developer with vast experience in building scalable web applications.",
  });
});
app.listen(port, () => console.log(`Task 1 listening on port ${port}!`));

server.setTimeout(10000, (socket) => {
  console.log('Opps timeout buddy.');
  socket.destroy();
});
