const express = require('express');
const app = express();

app.get('/', (req, res) => {

 const fruit={
    product: 'ada',
    price: 200,
    quantiry: 100
  }

  res.send(fruit)

})


app.get('/shop/banana', (req, res)=>{

  const realBanana = {
    product: 'banana',
    price: 200
  }
  res.send(realBanana)
})


app.listen(4200, ()=>console.log("Lintening from port 4200"));