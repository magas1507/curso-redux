import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import './App.css';

function App() {
  
  const state = useSelector((state) => state.data, shallowEqual)
  const {loading}= useSelector((state) => state.ui, shallowEqual);

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <PokemonList pokemons={state.isSearch ? state.searchPokemons : state.pokemons} />
      )}
    </div>
  );
}

export default App;