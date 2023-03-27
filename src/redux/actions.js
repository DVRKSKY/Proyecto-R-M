
//Se define asi para evitar escribir mal en el momento de escribir el case
//"ADD_FAV""ADD_FVV"

export const ADD_FAV    =  "ADD_FAV";
export const REMOVE_FAV =  "REMOVE_FAV";



export const addFav = (personaje) => {
	return {type: ADD_FAV, payload: personaje }
}
export const removeFav = (id) => {
	return {type: REMOVE_FAV, payload: id }
}