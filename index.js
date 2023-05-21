const express = require("express");
const app = express();
const port = 3000;


app.get('/',(req, res) => {
  res.send("Hola mundo")
})


app.get('/nueva-ruta',(req, res) => {
  res.send("Hola, soy un nuevo endpoint")
})




app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId
  })
})

app.get('/users', (req,res) => {
  const {limit, offset} = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('no hay parametros')
  }
})

app.listen(port, () => {
  console.log('Estas usando el puerto: '+ port);
});

