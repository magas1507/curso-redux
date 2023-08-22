import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import StarButton from './StarButton';
import { useDispatch,  } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';

const PokemonCard = ({ name, image, abilities, id, favorite }) => {
  const dispatch = useDispatch();
  const handleOnFavorite = () =>{
    dispatch(setFavorite({pokemonId: id}));
  }
  return (
    <Card
      title={name}
      cover={
        <img
          src={image}
          alt={name}
        />
      }
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
    >
      <Meta description={
        <ul>
          {abilities.map((ability) => 
            <li key={ability.ability.name} >
              {ability.ability.name}
            </li>
            )
          }
        </ul>}  
        
      />
    </Card>
  );
};

export default PokemonCard;