import axios from "axios";

//try-catch

export const getPokemon = async() =>{
   try {
     
     const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    // console.log(data.results)
     return data.results;

   } catch (error) {
    console.error('there was an error: ', error)
   }
}

export const getPokemonDetails = (pokemon) => {
  return axios.get(pokemon.url)
  .then(res => res.data)
  .catch((err) => console.log(err));
}
