import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../pokemon/pokemon"
function pokemonList(){

    const [pokemonList,setPokemonList] = useState([]);
    const [isLoading,setLoading] = useState(true);

    async function downloadPokemon(){
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        console.log(response.data.results);
        const pkResults = response.data.results;
        const arrOfPromises = pkResults.map((pokemon) => axios.get(pokemon.url));
        const finalArray = await axios.all(arrOfPromises);
        const results = finalArray.map((pokemon) => {
            const pokeData = pokemon.data;   
            return {
                name:pokeData.name,
                weight:pokeData.weight,
                sprites:(pokeData.sprites.other)? pokeData.sprites.other.dream_world.front_default : pokeData.sprites.front_shiny
        }
        })
        console.log(results);
        setPokemonList(results);
        setLoading(false);
    }
    useEffect(()=>{
        downloadPokemon();
    },[]);

    return(
        <div>
            {(isLoading) ? "Loading....":
                <div>{pokemonList.map((p) =>
                       <>
                           <Pokemon name = {p.name} weight={p.weight} />
                           <img src={p.sprites} alt="" /> 
                       </>
                    
                
                )}
                </div>
                  
            }
        </div>
    )
}
export default pokemonList;