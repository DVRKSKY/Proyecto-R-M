import Card from './Card';
import style from '../modules/cards.module.sass'
import { useSelector } from 'react-redux';

export default function Cards({onClose}) {
   const {characters} = useSelector((state) => state )
   return(
      <div className={style.contenedorDeCards}>
         {console.log(characters)}
         {characters.map(item => {
            return(
               <Card
                  key={item.id.toString()}
                  id={item.id}
                  name={item.name}
                  status={item.status}
                  species={item.species}
                  gender={item.gender}
                  origin={item.origin.name}
                  image={item.image}
                  onClose={onClose}
               />
            )
         })}
      </div>  
   )
}
