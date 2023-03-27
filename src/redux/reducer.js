import { ADD_FAV, REMOVE_FAV } from "./actions"

const initialState = {
    myFavorites: []
}

const rootReducer = (state = initialState, action) =>  {
	
	switch(action.type){
	
		case ADD_FAV:
			//Le enviamos por payload lo que queremos actualizar
			//De esta manera agregamos sin chancar al state global
			//No usamos el push y pop, porque no estamos manendo el estado. sino estariamos tocando el array
			return {...state, myFavorites: [...state.myFavorites, action.payload]}
        case REMOVE_FAV:
            return {...state, myFavorites: state.myFavorites.filter(fav => fav.id !== parseInt(action.payload))}
		//Caso base de default
		default:
			return {...state}
	}	

}
export default rootReducer;
