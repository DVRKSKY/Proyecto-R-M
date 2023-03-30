import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import {connect} from "react-redux"
import { addFav, removeFav } from "../redux/actions"
import style from '.././modules/card.module.sass'

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
      
      <Link className={style.cardStyle} to={`/detail/${props.id}`}>
         {/*
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
         </button>*/}
         <div className={style.contenedorCard}>
            <img className={style.imagenCard} src={props.image} alt={props.name}  />
            <div className={style.corchete}>
               <div className={`${style.corchete} ${style.tl}`}></div>
               <div className={`${style.corchete} ${style.tr}`}></div>
               <div className={`${style.corchete} ${style.br}`}></div>
               <div className={`${style.corchete} ${style.bl}`}></div>
            </div>
         </div>
      </Link>
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

