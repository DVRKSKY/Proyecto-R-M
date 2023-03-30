import { ADD_FAV, FILTER_CARDS, ORDER_CARDS, REMOVE_FAV, RESET_FILTER, ADD_CHARACTER, REMOVE_CHARACTER } from "./actions"

const initialState = {
    myFavorites: [],
	allCharacters: [],
	characters : [],
}

const rootReducer = (state = initialState, action) =>  {
	
	switch(action.type){
	
		case ADD_FAV:
			//Le enviamos por payload lo que queremos actualizar
			//De esta manera agregamos sin chancar al state global
			//No usamos el push y pop, porque no estamos manendo el estado. sino estariamos tocando el array
			return {
				...state,
				myFavorites: [...state.myFavorites, action.payload],
				allCharacters: [...state.allCharacters, action.payload] 
			}

        case REMOVE_FAV:
			const newFavorites = state.allCharacters.filter(fav => fav.id !== parseInt(action.payload))
            return {...state, myFavorites: newFavorites, allCharacters: newFavorites}
		
		case FILTER_CARDS:
			const newFilter = state.allCharacters.filter(
				(ch) => ch.gender === action.payload
			  );
			return {
				...state,
				myFavorites: newFilter,
			};
		case RESET_FILTER:
			return {
				...state,
				myFavorites: [...state.allCharacters],
			};
		case ORDER_CARDS: 
			//creamos una copia del arrayoriginal
			const allCharactersCopy = [...state.allCharacters];
			//condicionamos si es a o d
			const orderFactor = action.payload === "A" ? 1 : -1;
			//ejecutamos el ordenamiento de acuerdo al payload recibido
			allCharactersCopy.sort((a, b) => (a.id - b.id) * orderFactor);
			//retornmos el array ordenado
			return { ...state, myFavorites: allCharactersCopy };
		  
		case ADD_CHARACTER:
			if (Array.isArray(action.payload)) {
				return {
				...state,
				characters: [...state.characters, ...action.payload],
				};
			}
			return {
				...state,
				characters: [action.payload, ...state.characters],
			};
		case REMOVE_CHARACTER:
			const newCharacter = state.myFavoritesOrigin.filter(
				(ch) => ch.id !== action.payload
			);
			return {
				...state,
				myFavorites: newFavorites,
				myFavoritesOrigin: newFavorites,
			};
		//Caso base de default
		default:
			return {...state}
	}	

}
export default rootReducer;
