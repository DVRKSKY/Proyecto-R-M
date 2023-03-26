import React from 'react'
import RyM from '../assets/RickYMorty.png'
import logo from '../assets/logo.png'
import PrimaryButton from '../components/buttons/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'

export default function Login({login}) {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/home")
  }
  return (
    <div className='fondoDeEspacio'>
      <div className='contenedorRow'>
        <div className='rickYmorty'>
          <img src={RyM} alt="Rick y Morty en un portal" />
        </div>
        <div className='contenidoCol'>
          <div className='logo'>
            <img src={logo} alt="Logo de rick y morty" />
          </div>
          <div className='texto'>
            <h1>Sistema de Reconocimiento</h1>
          </div>
          <div>
            <Form login={login} />
          </div>
          {/*<div>
            <PrimaryButton clase="primary-button" text="investigar" funcion={backToHome}/>
          </div>*/}
        </div>
      </div>
    </div>
  )
}
