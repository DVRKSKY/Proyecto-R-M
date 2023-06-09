import React from 'react'
import style from '../modules/home.module.sass'
import RickHolograma from '../assets/RickHolograma.png'
import home from '../assets/iconos/home.svg'
import about from '../assets/iconos/about.svg'
import off from '../assets/iconos/off.svg'
import pregunta from '../assets/iconos/Preguntas.png'

import Cards from '../components/Cards'
import SearchBar from '../components/SearchBar'
import PantallaButton from '../components/buttons/PantallaButton'
import { useState } from 'react'
import axios from 'axios';
import { useLocation , useNavigate} from 'react-router-dom'
import Deatil from '../components/Deatil'
import Favorites from '../components/Favorites/Favorite'
import AboutDetails from '../components/AboutDetails'
import AtrasButton from '../components/buttons/AtrasButton'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCharacter } from '../redux/actions'
export default function Home() {
    
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {alert} = useSelector(state => state) 
    //todo esto se va pal redux
    
   /* const [characters, setCharacter] = useState([])*/
    /*const onSearch = (id) => {
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
    }*/
    /*const createRamdom = () => {
        let number = Math.random() * (826 - 1) + 1;
        console.log(Math.floor(number))
        return onSearch(Math.floor(number))
    }*/
    //Hasta aquí

    const onClose = (id)=>{
        dispatch(deleteCharacter(id))
    }
    const cambiarRuta = (ruta) =>{
        navigate(ruta)
    }
  return (
    <div className={style.container}>
        <div className={style.izquierda}>
            <div className={style.mensajeHolograma}>
                {location.pathname === "/home" ? 
                    (
                    <span className={style.textoHolograma}>Buurp! Buscando a mi siguiente víctima en el universo... ¿Cuál es el ID de ese pobre desgraciado? </span>
                    ) : location.pathname.startsWith("/detail/")  ? (
                            // Código para el otro caso
                    <span className={style.textoHolograma}>Oye Morty, ¿quién es este sujeto y cómo lo encuentro? Necesitamos investigar un poco más para resolver esto.</span>
                    ) : location.pathname.startsWith("/favorites")  ? (
                        // Código para el otro caso
                    <span className={style.textoHolograma}>¡Vamos a revisar esos objetivos eliminados, Morty!</span>
                    ): location.pathname.startsWith("/about")  ? (
                        // Código para el otro caso
                    <span className={style.textoHolograma}>¿Qué? ¿Me utilizaste en una  web? ¡Buuurp! Eso es bastante impresionante, debo decirlo.</span>
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
                    <div className={style.botonTablet} onClick={()=> cambiarRuta("/home")}>
                        <img src={home} alt="icono-home"/>
                    </div>
                    <div className={style.botonTablet} onClick={()=> cambiarRuta("/about")}>
                        <img src={about} alt="icono-about"/>
                    </div>
                    <div className={style.botonTablet} onClick={()=> cambiarRuta("/")}>
                        <img src={off} alt="icono-of"/>
                    </div>
                    <div className={style.botonTablet} onClick={()=> cambiarRuta("/404")}>
                        <img src={pregunta} alt="Preguntas"/>
                    </div>
                </div>
                {
                    alert.status ?
                    <div className={style.notificacion}>
                    <p className={style.text}>{alert.name}</p>
                    </div> : null
                
                }
                <div className={style.pantalla}>
                    {location.pathname === "/home" ? (
                        <>
                        <SearchBar />
                        <PantallaButton />
                        <Cards onClose={onClose} />
                        </>
                    ) :  location.pathname.startsWith("/detail/")  ? (
                        // Código para el otro caso
                        <>
                        <AtrasButton/>
                        <Deatil/>
                        </>
                    ) :  location.pathname.startsWith("/favorites")  ? (
                        // Código para el otro caso
                        <>
                        <Favorites/>
                        </>

                    ):  location.pathname.startsWith("/about")  ? (
                        // Código para el otro caso
                        <>
                        <AboutDetails/>
                        </>

                    ): (
                        <h1>Nothing</h1>


                        // Código para cualquier otro caso
                    )}
                </div>

            </div>
        </div>
    </div>
  )
}
