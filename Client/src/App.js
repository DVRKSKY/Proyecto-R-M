import './App.sass';
import NoMatch from './components/NoMatch';
import Login from './views/login'; 
import Home from './views/Home'
import axios from 'axios'; 
import { useEffect, useState } from 'react'; 
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addCharacter } from "./redux/actions";

function App() {
   //Usamos el usenavigate para viajar entre rutas no olvidar
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([])

   //Seguridad, ejemplo corto
   const [access, setaccess] = useState(false)

   //Usuario y contrase
   const EMAIL = 'henry@gmail.com'
   const PASSWORD = 'A12345678o!'
   const dispatch = useDispatch()
   //Creamos una función login

   const login = function (userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setaccess(data);
         access && navigate('/home');
      });
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

   
   const onClose = (id)=>{
      setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
   }
   return (
      <div className='App'>
         <Routes>
            {/* Pasamos la funcion login al componente login como props */}
            <Route exact path='/' element={<Login login={login}/>} />
            <Route path='/about' element={<Home/>} />
            <Route path='/home' element={<Home/>}/>
            <Route path='/detail/:id' element={<Home/>} />
            <Route path="/favorites" element={<Home/>} />
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