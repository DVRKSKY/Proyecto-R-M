import React from "react";
import { useState } from 'react';

export default function SearchBar(props) {
   
   const [id, setId] = useState("")
   const handleChange = (e) => { setId(e) } 

   return (
      <div>
         {console.log(id)}
         <input type='search' name="Buscador"  value={id} onChange={event => handleChange(event.target.value)}/>
         {/*Ten cuidado estabas ejecutando de inmediato la funcion, pero por suerte
         te diste cuente que para que se ejecute cuando clickeas, debes crear una 
         función anónima con ()*/}
         <button onClick={() => props.onSearch(id)} >Agregar</button>
         <button onClick={()=> props.onRamdon()}>Ramdom personaje</button>
      </div>
   );
}
