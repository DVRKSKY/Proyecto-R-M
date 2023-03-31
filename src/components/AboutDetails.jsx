import style from '../modules/details.module.sass'
import me from '../assets/Me.png'
export default function AboutDetails() {
    const character = {
        name: "Amadeo Flores",
        id: "Infinite",
        status: "Alive",
        species: "Developer",
        gender: "Male",
        origin: {
            name: "Tierra c-137"
        },

    }
    return (
        <div className={style.contenedorDetails}>
            <div className={style.contenedorImagen}>
                <img src={me} alt={character?.name}/>
            </div>
            <div className={style.contenedorDatos}>
                <div className={style.filaData}>
                    <h1 className={style.descripcion}>Id:</h1>
                    <h1 className={style.data}> N - {character?.id}</h1>
                </div>
                <div className={style.filaData}>
                    <h1 className={style.descripcion}>Nombre:</h1>
                    <h1 className={style.data}>{character?.name}</h1>
                </div>
                <div className={style.filaData}>
                    <h1 className={style.descripcion}>Status:</h1>
                    <h1 className={style.data}>{character?.status}</h1>
                </div>
                <div className={style.filaData}>
                    <h1 className={style.descripcion}>Especie:</h1>
                    <h1 className={style.data}>{character?.species}</h1>
                </div>
                <div className={style.filaData}>
                    <h1 className={style.descripcion}>Genero:</h1>
                    <h1 className={style.data}>{character?.gender}</h1>
                </div>
                <div className={style.filaData}>
                    <h1 className={style.descripcion}>Origen:</h1>
                    <h1 className={style.data}>{character?.origin?.name}</h1>
                </div>
                
            </div>

           


        </div>
    )
}
