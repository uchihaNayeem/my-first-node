const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('I know how to open port & gitignore (node_modules)')
})

app.listen(4200, ()=>console.log("Lintening from port 4200"));