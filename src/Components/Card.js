import React from "react";


const Card=({name, flag})=>{
    return(
       <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"5px", border:"1px solid grey",borderRadius:"10px", height:"200px", width:"200px", textAlign:"center"}} className="card">
        <img src={flag} alt={name} style={{width:"80px", height:"80px"}} />
        <h2>{name}</h2>
       </div>

    )
}
export default Card;