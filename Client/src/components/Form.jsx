import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PrimaryButton from './buttons/PrimaryButton'

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?])[A-Za-z\d$@$!%*?&]{8,}$/;


export default function Form({login}) {
    const [inputs, setinputs] = useState({
        email: 'henry@gmail.com',
        password: 'A12345678o!',
    })
    const [errors, seterrors] = useState({
        email: '',
        password: '',
    })
    const [isValid, setIsValid] = useState(false); // Nuevo estado
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
    useEffect(() => {
        // Al montar el componente, verifica si hay errores
        const initialErrors = validate(inputs);
        seterrors(initialErrors);
    
        // Si no hay errores, establece isValid como true
        setIsValid(Object.keys(initialErrors).length === 0);
      }, []);
      function handleChange(e) {
        setinputs({
          ...inputs,
          [e.target.name]: e.target.value,
        });
        const newErrors = validate({
          ...inputs,
          [e.target.name]: e.target.value,
        });
        seterrors(newErrors);
        
        // Solo actualiza isValid si hay datos en los inputs
        if (inputs.email !== "" && inputs.password !== "") {
          setIsValid(Object.keys(newErrors).length === 0);
        } else {
          setIsValid(false);
        }
      }
      
    
    return (
        <form className='sesion' onSubmit={handleSubmit}>

            <label className='mail'>Email: </label>
            <input name='email' value={inputs.email} placeholder='Tu email de mortal' onChange={handleChange}/>
            <p>{errors.email}</p>
            
            <label className='password'>Password: </label>
            <input name='password' value={inputs.password} onChange={handleChange} placeholder='Tu clave secreta'/>
            <p>{errors.password}</p>
            {isValid ? (
                <Link to="/home">
                <PrimaryButton tipo={'submit'} clase="primary-button" text="" />
                </Link>
            ) : null}
            
        </form>
     )
}
