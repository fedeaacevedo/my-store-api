const express = require("express");
const app = express();
const port = 3000;


app.get('/',(req, res) => {
  res.send("Hola mundo")
})


app.get('/nueva-ruta',(req, res) => {
  res.send("Hola, soy un nuevo endpoint")
})


app.get('/productos',(req, res) => {
  res.send("Hola, soy la pagina de productos")
})

app.listen(port, () => {
  console.log('Estas usando el puerto: '+ port);
});

