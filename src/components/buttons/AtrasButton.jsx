import React from 'react'
import style from '../../modules/pantallaButton.module.sass'
import { useState } from 'react'
import { useNavigate  } from "react-router-dom";

export default function AtrasButton() {
    const navigate = useNavigate ()
    const handleClick = (ruta) => {
        navigate(ruta)
    }
    return (
        <div className={style.contenedorButtons}>
            <button id="volver" className={`${style.buttonPantalla} ${style.buttonPantalla}`} onClick={() => handleClick("/home")}>Volver</button>
        </div>
    )
}
