import React from 'react'
import style from '../modules/home.module.sass'
import RickHolograma from '../assets/RickHolograma.png'
import home from '../assets/iconos/home.svg'
import about from '../assets/iconos/about.svg'
import off from '../assets/iconos/off.svg'
import Cards from '../components/Cards'
import SearchBar from '../components/SearchBar'
import PantallaButton from '../components/buttons/PantallaButton'
import { useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import Deatil from '../components/Deatil'


export default function Home() {
    
    const [characters, setCharacter] = useState([])
    const location = useLocation()
    
    const onSearch = (id) => {
        let existe = characters.find(element => element.id === Number(id) )
        if(existe){
           window.alert('Ya esta registrado ese personaje');
           return console.log('Todo listo')
        } else {
           axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
              if (data.name) {
                 setCharacter((oldChars) => [...oldChars, data]);
              } else {
                 window.alert('¡No hay personajes con este ID!');
              }
           });
        }
    }
     const createRamdom = () => {
        let number = Math.random() * (826 - 1) + 1;
        console.log(Math.floor(number))
        return onSearch(Math.floor(number))
    
    }
     const onClose = (id)=>{
        const idNumber = Number.parseInt(id, 10)
        const arrFiltered = characters.filter((element => element.id !== idNumber))
        setCharacter([...arrFiltered,])
    }
  return (
    <div className={style.container}>
        <div className={style.izquierda}>
            <div className={style.mensajeHolograma}>
                {location.pathname === "/test" ? 
                    (
                    <span className={style.textoHolograma}>Buurp! Buscando a mi siguiente víctima en el universo... ¿Cuál es el ID de ese pobre desgraciado? </span>
                    ) : location.pathname.startsWith("/detail/")  ? (
                            // Código para el otro caso
                    <span className={style.textoHolograma}>Oye Morty, ¿quién es este sujeto y cómo lo encuentro? Necesitamos investigar un poco más para resolver esto.</span>
                    ) : 
                    (
                            <h1>bolis</h1>


                            // Código para cualquier otro caso
                )}
            </div>
            <img className={style.rickHolograma} src={RickHolograma}/>
        </div>
        <div className={style.derecha}>
            <div className={style.tablet}>
                <div className={style.pernos}></div>
                <div className={style.pernos}></div>
                <div className={style.pernos}></div>
                <div className={style.pernos}></div>
                <div className={style.botonesTablet}>
                    <div className={style.botonTablet}>
                        <img src={home} alt="icono-home"/>
                    </div>
                    <div className={style.botonTablet}>
                        <img src={about} alt="icono-about"/>
                    </div>
                    <div className={style.botonTablet}>
                        <img src={off} alt="icono-of"/>
                    </div>
                </div>
                <div className={style.pantalla}>
                    {location.pathname === "/test" ? (
                        <>
                        <SearchBar />
                        <PantallaButton />
                        <Cards onClose={onClose} />
                        </>
                    ) :  location.pathname.startsWith("/detail/")  ? (
                        // Código para el otro caso
                        <Deatil/>
                    ) : (
                        <h1>bolis</h1>


                        // Código para cualquier otro caso
                    )}
                </div>

            </div>
        </div>
    </div>
  )
}
