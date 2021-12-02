require('dotenv').config();
// const path = require('path');

const express = require('express');


//Crear el servidor express
const app = express();


//Lectura y parseo del body
app.use(express.json());


//Diretorio public
app.use( express.static('public'));


//Lo ultimo problema rutas angular

app.listen( 8080, () => {
    console.log('Servidor corriendo en puerto ' + 8080);
});