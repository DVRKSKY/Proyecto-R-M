import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Card from "../Card";
import style from "../../modules/exterminados.module.sass"
import { orderCards,  filterCards, resetFilter } from "../../redux/actions";
import { removeFav } from '../../redux/actions'
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
    const onClose = (id)=>{
        dispatch(removeFav(id))
    }
    return(
        <div className={style.contenedorPadre}>
            <div className={style.contenedor}>
                <select className={style.buttonFilters} onChange={handleOrder} defaultValue={"DEFAULT"}>
                    <option value ="DEFAULT" disable>Ordenar</option>
                    <option value ="A">Ascendente</option>
                    <option value ="D">Descendente</option>
                </select>
                <select className={style.buttonFilters} onChange={handleFilter}  defaultValue={"DEFAULT"}>
                    <option value ="DEFAULT" disable>Filtrar</option>
                    <option value ="Male">Male</option>
                    <option value ="Female">Female</option>
                    <option value ="Genderless">Genderless</option>
                    <option value ="unknow">unknow</option>

                </select>
                <button className={style.buttonFilters} onClick={resetbutton}>Reset</button>
            </div>
            <div className={style.cardsFavorite}>
                {favorites.map((fav) => {
                    return <Card 
                        
                        key={fav.id.toString()}
                        id={fav.id}
                        name={fav.name}
                        status={fav.status}
                        species={fav.species}
                        gender={fav.gender}
                        origin={fav.origin.name}
                        image={fav.image}
                        onClose={onClose}
                    />
                })}
            </div>
        </div>
    )
}
export default Favorites;