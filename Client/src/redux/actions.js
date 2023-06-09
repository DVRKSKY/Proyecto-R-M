
//Se define asi para evitar escribir mal en el momento de escribir el case
//"ADD_FAV""ADD_FVV"
import axios from 'axios'

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";
export const RESET_FILTER = "RESET_FILTER";

export const ADD_CHARACTER = "ADD_CHARACTER"
export const REMOVE_CHARACTER = "REMOVE_CHARACTER"
export const DELETE_CHARACTER = "DELETE_CHARACTER"
export const ACTIVATE_NOTIFY = "ACTIVATE_NOTIFY"
export const DESACTIVATE_NOTIFY = "DESACTIVATE_NOTIFY"


/*export const addFav = ({key,id,name,status,	species,gender,	origin,	image,	onClose,}) => {
	const personaje = {key,id,name,status,species,gender,origin,image,onClose,}
	console.log(":::", personaje)
	const endpoint = 'http://localhost:3001/rickandmorty/fav';
	return (dispatch) => {
		axios.post(endpoint, personaje).then(({ data }) => {
			return dispatch({
				type: 'ADD_FAV',
				payload: data,
			});
		});
	};
}*/
export const addFav = ({ key, id, name, status, species, gender, origin, image, onClose, }) => {
	const personaje = { key, id, name, status, species, gender, origin, image, onClose, }
	const endpoint = 'http://localhost:3001/rickandmorty/fav';
	return async (dispatch) => {
		try {
			const { data } = await axios.post(endpoint, personaje);
			dispatch({
				type: 'ADD_FAV',
				payload: data,
			});
		} catch (error) {
			console.log(error);
			// Aquí puedes manejar el error de alguna manera específica si lo necesitas
		}
	};
}

/*export const removeFav = (id) => {
	const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
	return (dispatch) => {
	  axios
		.delete(endpoint)
		.then(({ data }) => {
		  return dispatch({
			type: 'REMOVE_FAV',
			payload: data,
		  });
		})
		.catch((error) => {
		  console.error('Error while removing favorite:', error);
		  // Manejar el error apropiadamente, por ejemplo:
		  // return dispatch({ type: 'REMOVE_FAV_ERROR', payload: error });
		});
	};
  };*/
export const removeFav = (id) => {
	const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
	return async (dispatch) => {
		try {
			const { data } = await axios.delete(endpoint);
			dispatch({
				type: 'REMOVE_FAV',
				payload: data,
			});
		} catch (error) {
			console.error('Error while removing favorite:', error);
			// Manejar el error apropiadamente, por ejemplo:
			// return dispatch({ type: 'REMOVE_FAV_ERROR', payload: error });
		}
	};
};


export const filterCards = (gender) => {
	return { type: FILTER_CARDS, payload: gender }
}
export const orderCards = (order) => {
	return { type: ORDER_CARDS, payload: order }
}
export const resetFilter = () => {
	return { type: RESET_FILTER }
}



export function addCharacter(character) {
	return { type: ADD_CHARACTER, payload: character, };
}
export function removeCharacter(id) {
	return { type: REMOVE_CHARACTER, payload: id, };
}
export function deleteCharacter(id) {
	return { type: DELETE_CHARACTER, payload: id }
}
export const activateNotify = (name, time = 2000) => {
	return (dispatch) => {
	  dispatch({ type: ACTIVATE_NOTIFY, payload: name });
	  setTimeout(() => {
		dispatch({ type: DESACTIVATE_NOTIFY });
	  }, time);
	};
  };
export function desactivateNotify(){
	return {type: DESACTIVATE_NOTIFY}
}