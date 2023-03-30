import './App.sass';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import About from './views/About';
import Deatil from './components/Deatil';
import NoMatch from './components/NoMatch';
import Login from './views/login'; 
import Home from './views/Home'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';
import { addCharacter } from "./redux/actions";
import Favorites from './components/Favorites/Favorite';

function App() {
   const location = useLocation()
   //Usamos el usenavigate para viajar entre rutas no olvidar
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([])

   //Seguridad, ejemplo corto
   const [access, setaccess] = useState(false)
   const EMAIL = 'amadeoconflores@gmail.com'
   const PASSWORD = 'A12345678o!'
   const dispatch = useDispatch()
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


   /*
   useEffect(()=>{
      !access && navigate('/')
   }, access)
   */
   
   useEffect(() => {
      const requests = [];
  
      for (let num = 22; num < 24; num++) {
        requests.push(
          axios.get(`https://rickandmortyapi.com/api/character?page=${num}`)
        );
      }
  
      Promise.all(requests)
        .then((results) => {
          // console.log(":::", results);
          let newCharacters = [];
          results.map(
            (chars) => (newCharacters = [...newCharacters, ...chars.data.results])
          );
          console.log(":::", newCharacters);
          setCharacters([...newCharacters]);
          dispatch(addCharacter(newCharacters))
  
        })
        .catch((error) => {});
   }, []);

   const onSearch = (id) => {
      axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        console.log(":::::", data);
        if (data.name) {
          let exist = characters.find((ch) => ch.id === data.id);
          if (exist) {
            alert("ya existe");
          } else {
            setCharacters((oldChars) => [data, ...oldChars]);
            dispatch(addCharacter(data))
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        } // .then(()=>{})
      });
   }

   const createRamdom = () => {
      let number = Math.random() * (826 - 1) + 1;
      console.log(Math.floor(number))
      return onSearch(Math.floor(number))

   }
   const onClose = (id)=>{
      setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
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
            <Route path='/home' element={<Cards onClose= {onClose} />}/>
            
            <Route path='/test' element={<Home/>}/>
            <Route path='/detail/:id' element={<Home/>} />

            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/404" element={<NoMatch/>} />
            
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