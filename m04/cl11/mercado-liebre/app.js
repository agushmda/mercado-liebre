const express = require('express');
const path = require('path');

const app = express();

// Routes
app.get('/', (req, res) =>{
    res.send('Home');
})

// Levantar el puerto
app.listen(3000, () => console.log('Server corriendo en el puerto 3000'));