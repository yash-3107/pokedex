import Search from "../search/search.jsx"
import "./pokedex.css"
import { useState } from "react"
import PokemonList from "../components/pokemon_list/pokemonList.jsx"
import PokemonDetails from "./pokemonDetails/pokemonDetails.jsx"
function pokedex(){
    const [searchTerm,setSearchTerm] = useState('')
    return (
    <div className="main_design">
        <h1>Pokedex</h1>
        <Search update={setSearchTerm} />
        {(!searchTerm) ? <PokemonList/> :<PokemonDetails key={searchTerm} name ={searchTerm}/>}
    </div>) 

}
export default pokedex;