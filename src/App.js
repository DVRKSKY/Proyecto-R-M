import './App.sass';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import About from './views/About';
import Deatil from './components/Deatil';
import NoMatch from './components/NoMatch';
import Login from './views/login'; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorite';

function App() {
   const location = useLocation()
   //Usamos el usenavigate para viajar entre rutas no olvidar
   const navigate = useNavigate()
   const [characters, setCharacter] = useState([])

   //Seguridad, ejemplo corto
   const [access, setaccess] = useState(false)
   const EMAIL = 'amadeoconflores@gmail.com'
   const PASSWORD = 'A12345678o!'

   //Creamos una función login

   const login = (userData) => {
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setaccess(true)
         navigate('/home')
      }
   }

   //Hacemos un logOut

   const logOut = () =>{
      setaccess(false)
      navigate('/home')
   }


   //Usamo useEffect para escuchar a nuesta variable de acceso.
   //Siempre recibe como parametro una funcion y al elemento que va a escuchar
   //La funcion hace que mientras este en false no pueda entrar a otra ruta


   useEffect(()=>{
      !access && navigate('/') 
   }, access)
   
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
      <div className='App'>
         {
            //Bloqueamos con use location para que no se muestre en el login
            location.pathname === "/" ? null : <NavBar onSearch = {onSearch} onRamdon={createRamdom} logOut={logOut}/>
         }
         <Routes>
            {/* Pasamos la funcion login al componente login como props */}

            <Route exact path='/' element={<Login login={login}/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/home' element={<Cards characters={characters} onClose= {onClose} />}/>
            <Route path='/detail/:id' element={<Deatil/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/*" element={<NoMatch/>} />
            
         </Routes>
        
      </div>
   );
}

export default App;

//!.primero que es gratis dsp que no podes migrar
//!.no es gratis
//!. cambio de terminos
//!. desaprbar el checkpoint
//!. 