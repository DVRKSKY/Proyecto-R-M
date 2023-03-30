import React from "react";
import { useState } from 'react';
import style from '../modules/searchBar.module.sass'
export default function SearchBar(props) {
   
   const [id, setId] = useState("")
   const handleChange = (e) => { setId(e) } 

   return (
      <div className={style.bloqueBusqueda}>
         <span className={style.marcador}>&gt;</span>
         <span className={style.descriptionBusqueda}>Busca a tu siguiente víctima:</span>
         <div className={style.cursor}></div>

         
         {console.log(id)}
         { /* Ten cuidado estabas ejecutando de inmediato la funcion, pero por suerte
         te diste cuente que para que se ejecute cuando clickeas, debes crear una 
   función anónima con ()
         <input type='search' name="Buscador"  value={id} onChange={event => handleChange(event.target.value)}/>
        
         <button onClick={() => props.onSearch(id)} >Agregar</button>
         <button onClick={()=> props.onRamdon()}>Ramdom personaje</button>*/}
      </div>
   );
}
