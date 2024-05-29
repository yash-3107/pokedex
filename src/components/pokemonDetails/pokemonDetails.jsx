import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios"
import "./pokemonDetails.css"
function PokemonDetails(){
    const {id} = useParams();
    const [pokemon,setPokemon] = useState({});
    async function downloadData(){
         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        
         setPokemon({
            name:response.data.name,
            image:response.data.sprites.front_default,
            id:response.data.id,
            height:response.data.height,
            weight:response.data.weight
         })
        
    }
    useEffect(()=> {
        downloadData()
    },[])
    return(
        <div className="details">
              <h1>{pokemon.name}</h1>
              <h3>ID:{pokemon.id}</h3>
              <img src={pokemon.image} alt="" />
              <h4>Height:{pokemon.height}</h4>
              <h4>weight:{pokemon.weight}</h4>
        </div>
    )
     
}
export default PokemonDetails