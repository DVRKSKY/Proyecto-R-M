import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Card from "../Card";
import { orderCards,  filterCards } from "../../redux/actions";

//Probemos ahora usando hooks
const Favorites = ()=>{
    const [aux, setaux] = useState(false)
    const favorites = useSelector(state => state.myFavorites)
    const dispatch = useDispatch()

    const handleOrder = (e)=>{
        dispatch(orderCards(e.target.value))
        setaux(true)
    }
    const handleFilter = (e) =>{
        dispatch(filterCards(e.target.value))
    }


    return(
        <div>
            <div>
                <h2>Ordenar</h2>
                <select onChange={handleOrder}>
                    <option value ="A">Ascendente</option>
                    <option value ="D">Descendiente</option>
                </select>
                <h2>Filtrar</h2>
                <select onChange={handleFilter}>
                    <option value ="Male">Male</option>
                    <option value ="Female">Female</option>
                    <option value ="Genderless">Genderless</option>
                    <option value ="unknow">unknow</option>

                </select>
            </div>
            {favorites.map((fav) => {
                return <Card 
                    key={fav.id}
                    id={fav.id} 
                    name={fav.name} 
                    species={fav.species} 
                    gender={fav.gender} 
                    image={fav.image} 
                />
            })}
        </div>
    )
}
export default Favorites;