import Card from './Card';

export default function Cards({characters,onClose}) {
   return(
      <div className='contenedorDeCards'>
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
