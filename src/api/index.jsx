import axios from "axios";

// export const getPokemon = () => {
//   return axios
//     .get('https://pokeapi.co/api/v2/pokemon?limit=151')
//     .then((res) => res.data.results)
//     .catch((err) => console.log(err));
// };

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
