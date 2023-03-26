import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Deatil() {
    const {id} = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     console.log(character)
    return (
        <div>
            <h1>{character?.name}</h1>
            <h5>{character?.status}</h5>
            <h5>{character?.species}</h5>
            <h5>{character?.gender}</h5>
            <h5>{character?.origin?.name}</h5>

            <img src={character?.image} alt={character?.name}/>
           


        </div>
    )
}
