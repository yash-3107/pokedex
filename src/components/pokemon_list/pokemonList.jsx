import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../pokemon/pokemon"
import "./pokemonList.css"

function pokemonList(){

    //for fetching the pokemon list and to show loading till it loads
    const [pokemonList,setPokemonList] = useState([]);
    const [isLoading,setLoading] = useState(true);
    
    const [pokeURL,setPokeURL] = useState("https://pokeapi.co/api/v2/pokemon");
    const [prev,setPrev] = useState("");
    const [next,setNext] = useState("");

    async function downloadPokemon(){
        //to fetch the download list
        const response = await axios.get(pokeURL);
        console.log(response.data.results);
        console.log(response.data);

        //obtaining the results array--an array of objects
        const pkResults = response.data.results;

        //from the above array ,making a get request to each url
        const arrOfPromises = pkResults.map((pokemon) => axios.get(pokemon.url));

        //obtaining the array of promises
        const finalArray = await axios.all(arrOfPromises);

        //from this array obtaining the desired information.
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
        setPrev(response.data.prev);
        setNext(response.data.next);
    }
    useEffect(()=>{
        downloadPokemon();
    });

    return(
        <div >
            {(isLoading) ? "Loading....":
                <div className="parent">{pokemonList.map((p) =>
                       <div className="subParent">
                           <Pokemon name = {p.name} weight={p.weight} />
                           <img src={p.sprites} alt="" /> 
                       </div>
                    
                
                )}
                   
                </div>
                  
            }
            <div className="controls">
                        <button onClick={() => setPokeURL(prev)}>Prev</button>
                        <button onClick={() => setPokeURL(next)}>Next</button>
                   </div>
        </div>
    )
}
export default pokemonList;