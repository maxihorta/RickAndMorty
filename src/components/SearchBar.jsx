import { useState } from "react";
import { Link } from "react-router-dom";
import './SearchBar.css'
export default function SearchBar({onSearch}) {
   const [id, setId]= useState ("")
   function handleChange(event){
setId(event.target.value)
   }
   return (
      <div className="content-searchBar">
         <input onChange={handleChange} type='search' name="search" value={id}/>
         
       <Link to="/home"> <button onClick={()=>onSearch(id)}>Agregar</button> </Link>  
      </div>
   );
}
