import PokemonCard from "./PokemonCard";
import { shallowEqual, useSelector } from 'react-redux'
import './PokemonList.css';
import NoMatch from './NoMatch'

const PokemonList = ({ pokemons }) => {
  const search = useSelector((state) => state.search, shallowEqual)

  if (search.noMatchSearch) return <NoMatch/>

  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard 
            name={pokemon.name} 
            key={pokemon.name} 
            image={pokemon.sprites.front_default}
            abilities={pokemon.abilities}
            id={pokemon.id}
            favorite={pokemon.favorite} 
          />
        )
      })}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}

export default PokemonList;

