import React from "react"
import { useState } from 'react'
import style from '../modules/searchBar.module.sass'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"
import { addCharacter } from "../redux/actions"

export default function SearchBar() {

  const [id, setId] = useState("")
  const { characters } = useSelector(state => state)
  const dispatch = useDispatch()
  const URL_BASE = "http://localhost:3001/rickandmorty"
  /*const onSearch = (id) => {
     //cambioamos la url para conectarla con el back
     axios
     .get(`${URL_BASE}${id}`)
     .then(({ data }) => {
       console.log(":::::xd", data);
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
     }).catch((err)=>{
       console.log(err);
       console.log("Hubo un error")
     });
  }*/
  const onSearch = async (id) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/character/${id}`);
      if (data.name) {
        let exist = characters.find((ch) => ch.id === data.id);
        if (exist) {
          alert("ya existe");
        } else {
          dispatch(addCharacter(data));
          limpiar()
        }
      } else {
         alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");

    }
  }

  const onRamdon = () => {
    let number = Math.random() * (826 - 1) + 1;
    console.log(Math.floor(number))
    return onSearch(Math.floor(number))

  }

  const limpiar = () => setId("")


  const handleChange = (event) => { setId(event.target.value) }



  return (
    <div className={style.bloqueBusqueda}>
      <div className={style.descripcion}>
        <span className={style.marcador}>&gt;</span>
        <span className={style.descriptionBusqueda}>Buscar por ID:</span>
      </div>
      <div className={style.acciones}>
        <input
          className={style.cursor}
          type='search'
          name="Buscador"
          placeholder="Ingresa el id + Enter"
          value={id}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              setId(event.target.value)
              onSearch(event.target.value)
            }
          }}
          onChange={handleChange}
        />


        {/* <button onClick={() => onSearch(id)} >Agregar</button>
          <button onClick={()=> onRamdon()}>Ramdom personaje</button>*/}
      </div>
    </div>
  );
}
