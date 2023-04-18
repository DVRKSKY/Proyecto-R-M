import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import {connect, useDispatch} from "react-redux"
import { addFav, removeFav, activateNotify, desactivateNotify } from "../redux/actions"
import style from '.././modules/card.module.sass'

function Card(props) {
   const dispatch = useDispatch()
   const [isFav, setisFav] = useState(false)
   const navigate = useNavigate()
   const handleFavorite = () => {
      if(isFav === true){
         setisFav(false)
         props.removeFav(props.id)
         dispatch(activateNotify(`Asi que sigue vivo ${props.name}`))

      } else {
         setisFav(true)
         props.addFav(props)
         dispatch(activateNotify(`Haz exterminado a ${props.name}`))
      }
   }
   useEffect(() => {

      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setisFav(true);
         }
      });
   }, [props.myFavorites]);
   const verDetails = (ruta) =>{
      navigate(ruta)
   }
   return (
      
      <div className={style.cardStyle} >

         <div className={style.contenedorCard}>
            <img className={style.imagenCard} src={props.image} alt={props.name}  />

            <div className={style.actions}>
               {
                  isFav ? (
                     <button className={style.botonesHover} onClick={handleFavorite}>💀</button>
                  ) : (
                     <button className={style.botonesHover} onClick={handleFavorite}>🔪</button>
                  )
               }
               <button className={style.botonesHover} onClick={() => props.onClose(props.id)}>Delete</button>
               <button className={style.botonesHover} onClick={()=>verDetails(`/detail/${props.id}`)}>Info</button>

            </div>


            <div className={style.corchete}>
               <div className={`${style.corchete} ${style.tl}`}></div>
               <div className={`${style.corchete} ${style.tr}`}></div>
               <div className={`${style.corchete} ${style.br}`}></div>
               <div className={`${style.corchete} ${style.bl}`}></div>
            </div>
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

