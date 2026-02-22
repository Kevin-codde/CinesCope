import React from "react";
import Back from "../components/Back";

var keys;
var data;
const captureKey = function(k,ls){
   keys = k;
   data = ls.filter((m)=>m.id == keys);
   console.log(data)
   return keys;
}

const MovieDetail = function(){
    
    return(
        <div>
              <Back/>
              <h1>Descripcion </h1>  
              {
                
                data.map((m)=>(
                    <div key={m.id}>
                        <h1>{m.title}</h1>
                        <img src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}  />
                        <p>{m.overview}</p>
                   </div> 

                ))
              }
              
        </div>
    )
}

export default MovieDetail;
export {captureKey}