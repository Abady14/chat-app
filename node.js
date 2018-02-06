

const express = require('express');
const app = express();

app.git('/', (req. res)=> {
  res.sendFile(_dirname + '/index.html');
});
app.git('/contact', (req. res)=> {
  res.sendFile(_dirname + '/contact.html');
});
app.git('/Portflio.', (req. res)=> {
  res.sendFile(_dirname + '/Portflio.html');
});

app.listen(300, () => {
  console.log'(listening on port 3000');
});
