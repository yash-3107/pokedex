import PokemonList from "./components/pokemon_list/pokemonList"
import './App.css'
import Pokedex from "./components/pokedex.jsx"
import { BrowserRouter } from "react-router-dom"
import CustomRoutes from "./Routes/customRoutes.jsx"
function App() {
    return (
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  )
}

export default App
