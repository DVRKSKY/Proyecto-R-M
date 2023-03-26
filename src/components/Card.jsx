import React from "react";
import { Link } from "react-router-dom";


export default function Card({name,status,species,gender,origin,image,onClose,id}) {
   return (
      
      <div className='cardInfo'>
         <button className="cardButton" onClick={() => onClose(id)}>
            <span className="material-symbols-outlined">
               pinch_zoom_in
            </span>
         </button>
         <div className="cardBody">
            <Link to={`/detail/${id}`}>
               <h3>{name}</h3>
            </Link>

            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <p>{origin}</p>
            <img className="cardImage" src={image} alt={name} />
         </div>
      </div>
   );
}
