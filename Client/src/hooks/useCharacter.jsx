import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'



const useCharacter = () => {
    const {id} = useParams()
    const [character , setCharacter] = useState({})
    const characters = useSelector((state) => state.characters )

    useEffect(() => {
        const aux = characters.find(personaje => personaje.id === parseInt(id))
        setCharacter(aux)
     }, [id]);
    
    return character
}
export default useCharacter
