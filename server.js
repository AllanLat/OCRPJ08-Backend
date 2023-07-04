const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
app.use(express.json())

mongoose.connect(`mongodb://allanlatruffe:${process.env.DB_PASSWORD}@clusterbackend.zhzaomb.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connecté à la base de données MongoDB');
})
.catch((error) => {
  console.error('Erreur de connexion à la base de données MongoDB', error);
});



app.get('/', (req, res) => {
  res.send('Hello World!');
})


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
