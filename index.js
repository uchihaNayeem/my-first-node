const express = require('express');
const app = express();

app.get('/', (req, res) => {

  const fruit={
    product: 'ada',
    price: 200
  }



  res.send(fruit)
})

app.listen(4200, ()=>console.log("Lintening from port 4200"));