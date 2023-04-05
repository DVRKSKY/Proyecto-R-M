import React from 'react'
import style from '../../modules/pantallaButton.module.sass'
import { useState } from 'react'
import { useNavigate  } from "react-router-dom";

export default function PantallaButton() {

    const navigate = useNavigate ()
    const [active, setActive] = useState(false)
    const handleClick = (ruta) => {
        setActive(!active)
        navigate(ruta)
    }
    return (
        <div className={style.contenedorButtons}>
            <button id="todos" className={active === false ? style.buttonPantallaActivo :  style.buttonPantalla} onClick={() => handleClick("/test")}>Todos</button>
            <button id="exterminados" className={active === true ? style.buttonPantallaActivo :  style.buttonPantalla} onClick={() => handleClick("/favorites")}>Exterminados</button>
        </div>
    )
}
