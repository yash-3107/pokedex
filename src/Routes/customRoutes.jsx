import { Route, Routes } from "react-router-dom"
import PokemonDetails from "../components/pokemonDetails/pokemonDetails"
import Pokedex from "../components/pokedex.jsx"
import PokemonList from "../components/pokemon_list/pokemonList.jsx"
function CustomRoutes(){
         return(
         <Routes>
            <Route path="/" element={<>
                  <Pokedex />
                  <PokemonList />
                                   </>}>
            </Route>
            <Route path="/pokemon/:id" element={<PokemonDetails />}></Route>
         </Routes>
         )
}
export default CustomRoutes