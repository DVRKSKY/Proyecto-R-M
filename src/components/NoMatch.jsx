import React from 'react'
import RickEspacio from '../assets/RickEspacio.png'
import MortyEspacio from '../assets/MortSpace.png'
import Portal from '../assets/Portal.png'
import { useNavigate } from 'react-router-dom'



export default function NoMatch() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/")
  }
  return (
    <div className='fondoDeEspacioRelative'>
      <img className='RickPhoto' src={RickEspacio} alt="Rick-en-el-espacio" />
      <img className='MortyFlotando' src={MortyEspacio} alt='Morty-flotando'/>
      <div className='regresar'>
        <div className='ubicacion'>
          <h1>You are lost</h1>
          <span>Entra al portal...</span>

        </div>
        <div className='portal'>
          <img src={Portal} alt="Portal" onClick={()=>backToHome()} />
        </div>

      </div>

    </div>
  )
}
