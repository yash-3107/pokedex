import "./search.css"
function search({update}){
 return(
    <input className="search_bar" type = "text"
         placeholder="pokemon-name"
         onChange={(e) => update(e.target.value)}/>
 )
}
export default search;