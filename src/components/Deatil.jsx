import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './Deatil.css'
export default function Deatil() {
  const {id} = useParams()
  let [character,setCharacter] = useState({})

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

  return (
    <div className='content-deatil'>
      <h2>{character.name}</h2>
      <h2>{character.status}</h2>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
         <h2>{character.origin?.name}</h2>
         
         <img src={character.image} alt='' />
    </div>
  )
}
