import React from "react"
import { useState } from 'react'
import style from '../modules/searchBar.module.sass'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"
import { addCharacter } from "../redux/actions"

export default function SearchBar() {
   
   const [id, setId] = useState("")
   const {characters} = useSelector(state => state)
   const dispatch = useDispatch()
   const onSearch = (id) => {
      axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        console.log(":::::", data);
        if (data.name) {
          let exist = characters.find((ch) => ch.id === data.id);
          if (exist) {
            alert("ya existe");
          } else {
            dispatch(addCharacter(data))
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        } // .then(()=>{})
      });
   }

   const onRamdon = () => {
      let number = Math.random() * (826 - 1) + 1;
      console.log(Math.floor(number))
      return onSearch(Math.floor(number))

   }
   
   
   
   
   
   const handleChange = (e) => { setId(e) } 


   return (
      <div className={style.bloqueBusqueda}>
         <span className={style.marcador}>&gt;</span>
         <span className={style.descriptionBusqueda}>Busca a tu siguiente víctima:</span>
         <div className={style.cursor}></div>

         
         {console.log(id)}
         { /* Ten cuidado estabas ejecutando de inmediato la funcion, pero por suerte
         te diste cuente que para que se ejecute cuando clickeas, debes crear una 
   función anónima con ()*/}
         <input type='search' name="Buscador"  value={id} onChange={event => handleChange(event.target.value)}/>
        
         <button onClick={() => onSearch(id)} >Agregar</button>
         <button onClick={()=> onRamdon()}>Ramdom personaje</button>
      </div>
   );
}
