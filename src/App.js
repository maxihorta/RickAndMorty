 import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios'
import { Route,Router, Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import About from './components/About';
import Deatil from './components/Deatil';
import Form from './components/Form';
import Favorites from './components/favorites';
import { useLocation,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCharacter } from './redux/actions/actions';

function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'maxi@gmail.com';
   const PASSWORD = 'Maximiliano9';
   
  


const [characters, setCharacters] = useState([])
const location = useLocation();

const dispatch = useDispatch()
 function login(inputs) {
      if (inputs.password === PASSWORD && inputs.email === EMAIL) {
         setAccess(true);
         navigate('/About');
      }
   }

   function logout(userData) {
     
         setAccess(false);
         navigate('/');
      
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

useEffect(()=> {
   const requests =[];
   for (let num = 32; num< 42; num++){
      requests.push(
         axios.get(`https://rickandmortyapi.com/api/character?page=${num}`)
      )
   }


Promise.all(requests)
.then((results) =>{
   let newCharacters =[];
   results.map(
      (chars) => (newCharacters = [...newCharacters, ...chars.data.results])
   )
   setCharacters([...newCharacters])
   dispatch(addCharacter(newCharacters))
})
.catch((error)=>{})
},[]);


function onSearch(id) {
   axios
   .get(`https://rickandmortyapi.com/api/character/${id}`)
   .then(({ data }) => {
      if (data.name) {
         let exist =characters.find((ch)=> ch.id===data.id)
         if(exist){
            alert("ya existe")
         }
         else{
            setCharacters((oldChars) => [data,...oldChars]);
            dispatch(addCharacter(data))
         }
         
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}



function onClose(id){
   setCharacters((oldChars)=>{
      return oldChars.filter((ch)=> ch.id !== id)
   })
}
   return (

      
      <div className='App'>
         {
            location.pathname=== "/" ? null : <Nav logout={logout} onSearch={onSearch}/>
         }
     
     <Routes>
   
      <Route path='/' element={<Form login={login} />}></Route>
      <Route path="/home" element={<Cards  onClose={onClose} />}> </Route>
      <Route path="/about" element={<About />}> </Route>
      <Route path="/favorites" element={<Favorites onClose={onClose} />}> </Route>
      
      <Route path="/detail/:id" element={<Deatil name={characters.name}/>}> </Route>
      
      
   
</Routes>
         
       
      </div>
   );

      }

export default App;
