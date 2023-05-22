const express = require('express');
const routerApi = require('./routes');


const app = express();
const port = 3000;


app.get('/',(req, res) => {
  res.send("Hola mundo")
})

routerApi(app);



app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId
  })
})


app.listen(port, () => {
  console.log('Estas usando el puerto: '+ port);
});

