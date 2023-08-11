import { useEffect, useState } from 'react';
//import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon, getPokemonDetails } from './api';
import logo from './statics/logo.svg';
import './App.css';
//import { setPokemons as setPokemonsActions} from './actions';
import { setPokemons } from './actions';

// function App({pokemons, setPokemons}) {
function App() {
  
  //recibe el estado y retorna el valor que quiere retornar de ese state
  // Es decir la lista de pokemons
  const pokemons = useSelector(state => state.pokemons);

  //necesitamos el dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonsDetailed = await Promise.all(
        pokemonsRes.map(pokemon => getPokemonDetails(pokemon))
      );
        
      dispatch(setPokemons(pokemonsDetailed));
    };    
    fetchPokemons();
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
export default App;
// const mapStateToProps = (state => ({
//   pokemons:state.pokemons,
// }));

// const mapDispatchToProps=(dispatch) =>({
//   setPokemons:(value) => dispatch(setPokemonsActions(value))
// });
// export default connect(mapStateToProps, mapDispatchToProps)(App);