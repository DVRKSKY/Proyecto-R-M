import React from 'react'
  


export default function PrimaryButton(prop) {
    
    return (
    
        <button type={prop.tipo} className={prop.clase} onClick={prop.funcion ? ()=> prop.funcion() : null} >
            {prop.text? prop.text : null}
        </button>
    )
}
