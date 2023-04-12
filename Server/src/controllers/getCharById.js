const axios = require("axios")
const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = (req, res) => {
    const {id} = req.params
    axios.get(`${URL}${id}`)
    .then(v => v.data)
    .then(ch => {
        if (ch) {
            const character = {
                id: ch.id,
                name: ch.name,
                gender: ch.gender,
                species: ch.species,
                origin: ch.origin?.name,
                image: ch.image,
            }
            return res.status(200).json(character)
        } else {
            return res.status(404).send("Not found.")
        }
    })
    .catch(err => {
        return res.status(500).end(new Error(err))
    })
}
module.exports = {
    getCharById,
}






















/*const axios = require("axios")
const obj = []

const getCharById = (res, id) =>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(v => v.data)
        .then(ch => {
            const character = {
                id: id,
                name: ch.name,
                gender: ch.gender,
                species: ch.species,
                origin: ch.origin?.name,
                image: ch.image,
            }
            res.writeHead('200' ,{"Content-type" : "application/json"})
            return res.end(JSON.stringify(character))
        })
        .catch(err => {
            res.writeHead('500', {"Content-type" : "text/plane"})
            return res.end(err.message) 
        })
        
        
}
const getCharDetailById = (res, id) =>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(v => v.data)
        .then(ch => {
            const character = {
                id: id,
                name: ch.name,
                gender: ch.gender,
                species: ch.species,
                origin: ch.origin?.name,
                image: ch.image,
                location: ch.location.name
            }
            res.writeHead('200' ,{"Content-type" : "application/json"})
            return res.end(JSON.stringify(character))
        })
        .catch(err => {
            res.writeHead('500', {"Content-type" : "text/plane"})
            return res.end(err.message) 
        })
        
        
}
 module.exports = {
    getCharById,
    getCharDetailById
}*/