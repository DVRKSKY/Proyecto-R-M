const express = require('express');
const routes = require('./routes/index')
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });


server.use(express.json());
server.use("/rickandmorty", routes);
















/*const fs = require("fs")
const http = require("http")
const axios = require('axios')

//importamos la data de utils
const {getCharById, getCharDetailById} = require('./controllers/getCharById')
const PORT = 3001

http.createServer((req, res)=>{
    //Esto hace o permite que puedas comunicarte con React!!!!!
    res.setHeader('Access-Control-Allow-Origin', '*')
    const {url} = req


    if(url.includes("/rickandmorty/character")){
        //Se obtiene el id del final ---- url/characters/20
        const id = url.split("/").at(-1)
        return getCharById(res, id)
    }
    if(url.includes("/rickandmorty/detail")){
        //Se obtiene el id del final ---- url/characters/20
        const id = url.split("/").at(-1)
        return getCharDetailById(res, id)
    }

}).listen(PORT, "localhost")*/

//Define tus rutas
/*
    const {url} = req ----> Definimos el url 
    console.log(url)  ----> Verifica que llegue bien el url
    url.includes("/rickandmorty/character" //condicional mejorada
    Evalua
  
 */