import { useSelector } from "react-redux";
import Card from "../Card";

//Probemos ahora usando hooks
const Favorites = ()=>{

    const favorites = useSelector(state => state.myFavorites)
    return(
        <div>
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