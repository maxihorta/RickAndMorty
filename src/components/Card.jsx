import "./card.css"
import {Link} from 'react-router-dom'
import { connect ,useDispatch } from "react-redux";
import {addFav , removeFav} from "../redux/actions/actions"
import { useEffect, useState } from "react";
 function Card(props) {
const {id,name,status,species,gender,origin,image,onClose,addFav,removeFav,myFavorites}= props;
  const [isFav,setIsFav]=useState(false)

  function handleFavorite(){
   if(isFav){
      setIsFav(false)
      removeFav(id)
   }else{
      setIsFav(true)
      addFav(props)
   }
  }
  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);
   return (<>
   
   
   
   
      <div className="card">

      {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <button classname="button-card" onClick={()=>onClose(id)}>X</button>
         <img src={image} alt='' />
         <Link to={`/detail/${id}` } className="name-card">
            <h3 className="card-name">{name}</h3>
            <h4>Species: {species}</h4>
</Link>
       
         
      </div></>
   );
}

function mapStateToProp(state){
   return{
myFavorites: state.myFavorites

   }
}


   function mapDispatchToProp(dispatch){
      return{
addFav: (ch) => dispatch(addFav(ch)),
removeFav: (id) => dispatch(removeFav(id)),


      }
   }

   export default connect ( mapStateToProp, mapDispatchToProp)(Card)