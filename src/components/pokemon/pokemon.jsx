import "./pokemon.css"
function pokemon({name,weight}){
 return(
    <div className="box">
       <h1>{name}</h1>
       <h4>{weight}</h4>
    </div>
 )
}
export default pokemon;