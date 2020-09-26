// following lines are kindof default i guess
const express = require('express');
const app = express();

// 01
app.get('/', (req, res) => {

 const fruit={
    product: 'ada',
    price: 200,
    quantiry: 100
  }

  res.send(fruit)

})


//02
app.get('/shop/banana', (req, res)=>{

  const realBanana = {
    product: 'banana',
    price: 200
  }
  res.send(realBanana)
})

//04

const person = ['rahim', 'karim', 'das papa', 'ryan dhal']

app.get('/user/:id', (req, res) => {

  const userId = req.params.id;
  const name = person[userId] // akhane 'userId' index number er moto kaj korse

  res.send({name, userId}) // json banai felse {} diye
  
  console.log(req.params.id) // URL er id dhortese
})




// opening port 
app.listen(4200, () => console.log("Lintening from port 4200"));