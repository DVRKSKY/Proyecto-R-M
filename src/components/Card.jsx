import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import {connect} from "react-redux"
import { addFav, removeFav } from "../redux/actions";


function Card(props) {
   
   const [isFav, setisFav] = useState(false)
   
   const handleFavorite = () => {
      if(isFav === true){
         setisFav(false)
         props.removeFav(props.id)
      } else {
         setisFav(true)
         props.addFav(props)
         
      }
   }
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setisFav(true);
         }
      });
   }, [props.myFavorites]);
   return (
      
      <div className='cardInfo'>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className="cardButton" onClick={() => props.onClose(props.id)}>
            <span className="material-symbols-outlined">
               pinch_zoom_in
            </span>
         </button>
         <div className="cardBody">
            <Link to={`/detail/${props.id}`}>
               <h3>{props.name}</h3>
            </Link>

            <p>{props.status}</p>
            <p>{props.species}</p>
            <p>{props.gender}</p>
            <p>{props.origin}</p>
            <img className="cardImage" src={props.image} alt={props.name} />
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) =>{
   //los paramaetros igual los pasas por aquí
   return{
      addFav : (personaje) => {
         dispatch(addFav(personaje))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

