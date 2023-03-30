import React from 'react'
import style from '../../modules/pantallaButton.module.sass'
import { useState } from 'react';

export default function PantallaButton() {

    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(!active)
    }
    return (
        <div className={style.contenedorButtons}>
            <button id="todos" className={active === false ? style.buttonPantallaActivo :  style.buttonPantalla} onClick={handleClick}>Todos</button>
            <button id="exterminados" className={active === true ? style.buttonPantallaActivo :  style.buttonPantalla} onClick={handleClick}>Exterminados</button>
        </div>
    )
}
