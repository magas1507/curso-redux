import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
//

const PokemonCard = ({ name, image, abilities }) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src={image}
          alt={name}
        />
      }
      extra={<StarOutlined />}
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