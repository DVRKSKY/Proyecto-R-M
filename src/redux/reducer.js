import { ADD_FAV, FILTER_CARDS, ORDER_CARDS, REMOVE_FAV } from "./actions"

const initialState = {
    myFavorites: [],
	allCharacters: [],
}

const rootReducer = (state = initialState, action) =>  {
	
	switch(action.type){
	
		case ADD_FAV:
			//Le enviamos por payload lo que queremos actualizar
			//De esta manera agregamos sin chancar al state global
			//No usamos el push y pop, porque no estamos manendo el estado. sino estariamos tocando el array
			return {...state, allCharacters: [...state.allCharacters, action.payload]}

        case REMOVE_FAV:
            return {...state, myFavorites: state.myFavorites.filter(fav => fav.id !== parseInt(action.payload))}
		
		case FILTER_CARDS:
			return {...state,  myFavorites: state.allCharacters.filter(fav => fav.gender === action.payload )}	

		case ORDER_CARDS: 
			//creamos una copia del arrayoriginal
			const allCharactersCopy = [...state.allCharacters];
			//condicionamos si es a o d
			const orderFactor = action.payload === "A" ? 1 : -1;
			//ejecutamos el ordenamiento de acuerdo al payload recibido
			allCharactersCopy.sort((a, b) => (a.id - b.id) * orderFactor);
			//retornmos el array ordenado
			return { ...state, myFavorites: allCharactersCopy };
		  
		//Caso base de default
		default:
			return {...state}
	}	

}
export default rootReducer;
