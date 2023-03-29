import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Card from "../Card";
import { orderCards,  filterCards, resetFilter } from "../../redux/actions";

//Probemos ahora usando hooks
const Favorites = ()=>{
    const [aux, setaux] = useState(false)
    const favorites = useSelector(state => state.myFavorites)
    //o destructuriong const {myFavorites} => useSelector(state => state)
    const dispatch = useDispatch()

    const handleOrder = (e)=>{
        e.preventDefault()
        dispatch(orderCards(e.target.value))
        setaux(true)
    }
    const handleFilter = (e) =>{
        e.preventDefault()
        dispatch(filterCards(e.target.value))
    }
    const resetbutton = () =>{
        dispatch(resetFilter())
    }

    return(
        <div>
            <div>
                <h2>Ordenar</h2>
                <select onChange={handleOrder} defaultValue={"DEFAULT"}>
                    <option value ="DEFAULT" disable>Select Orden</option>
                    <option value ="A">Ascendente</option>
                    <option value ="D">Descendiente</option>
                </select>
                <h2>Filtrar</h2>
                <select onChange={handleFilter}  defaultValue={"DEFAULT"}>
                    <option value ="DEFAULT" disable>Select gender</option>
                    <option value ="Male">Male</option>
                    <option value ="Female">Female</option>
                    <option value ="Genderless">Genderless</option>
                    <option value ="unknow">unknow</option>

                </select>
                <button onClick={resetbutton}>Reset</button>
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