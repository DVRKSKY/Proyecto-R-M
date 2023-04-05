const fs = require("fs")
const http = require("http")
//importamos la data de utils
const data = require("./utils/data")

const PORT = 3001

http.createServer((req, res)=>{
    //Esto hace o permite que puedas comunicarte con React!!!!!
    res.setHeader('Access-Control-Allow-Origin', '*')
    const {url} = req


    if(url.includes("/rickandmorty/character")){
        //Se obtiene el id del final ---- url/characters/20
        const id = url.split("/").at(-1)
        //consolamos el id, y evaluamos que nos llegue. Hey cuidado es un string
        const character = data.find(character => character.id == id)
        //evaluamos que tiene character y hacemos condicional
        if(character){
            res.writeHead('200' ,{"Content-type" : "application/json"})
            return res.end(JSON.stringify(character))
        } else {
            res.writeHead('404', {"Content-type" : "application/json"})
            return res.end(JSON.stringify({error: "Character not found"}))
        }
    }

}).listen(PORT, "localhost")

//Define tus rutas
/*
    const {url} = req ----> Definimos el url 
    console.log(url)  ----> Verifica que llegue bien el url
    url.includes("/rickandmorty/character" //condicional mejorada
    Evalua
  
 */