import { useSelector } from 'react-redux';
import Card from './Card';

import "./cards.css"
export default function Cards({ onClose}) {
   const {characters} =useSelector((state)=>state)
   return <div className='cards_conteiner'>
      
         {
            characters && characters.map((element, index)=>{
               return(
                  <Card className="card" key={index}
                  id={element.id}
                  name={element.name}
                  status={element.status}
                  species={element.species}
                  gender={element.gender}
                  origin={element.origin.name}
                  image={element.image}
                  onClose={onClose}/>
               )
            })
         }
     
   </div>;
}
