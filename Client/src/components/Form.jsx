import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import PrimaryButton from './buttons/PrimaryButton'

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?])[A-Za-z\d$@$!%*?&]{8,}$/;


export default function Form({login}) {
    const [inputs, setinputs] = useState({
        email: '',
        password: '',
    })
    const [errors, seterrors] = useState({
        email: '',
        password: '',
    })
    function validate(inputs){
        const errors = {}

        if(!inputs.email){
            errors.email = "Ingresa tu correo..."
        }
        else if(!inputs.password){
            errors.password = "Ingresa tu clave..."
        }
        else if(!regexEmail.test(inputs.email)){
            errors.email = "A eso llamas correo..."
        }
        else if(!regexPassword.test(inputs.password)){
            errors.password = "A eso llamas contraseña..."
        }
        return errors;
    }
    
    function handleChange(e){
        setinputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        seterrors(
            validate({
                ...inputs,
                [e.target.name]: e.target.value            
            })
        )
    }
    function handleSubmit (e){
        //EVITA QUE RECARGUE LA PAGINA
        e.prevent.default()
        const aux = Object.keys(errors)
        if(aux.length === 0){
            setinputs({email: "", password: ""})
            seterrors({email: "", password: ""})
            login(inputs)
            return alert('Welcome')
        }
        return alert('Errors')

    }
    return (
        <form className='sesion' onSubmit={handleSubmit}>

            <label className='mail'>Email: </label>
            <input name='email' value={inputs.email} placeholder='Tu email de mortal' onChange={handleChange}/>
            <p>{errors.email}</p>
            
            <label className='password'>Password: </label>
            <input name='password' value={inputs.password} onChange={handleChange} placeholder='Tu clave secreta'/>
            <p>{errors.password}</p>
            {//De esta manera convertimos u objto en array y damos logica al boton
                Object.keys(errors).length === 0 ? 
                <Link to='/home'>
                    <PrimaryButton tipo={'submit'} clase="primary-button" text=""/>
                </Link> : null
            }
            
        </form>
     )
}
