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
            <Back />

{
  data.map((m) => (
    <div className="movieDetailPage" key={m.id}>
      
      {/* HERO */}
      <div 
        className="heroSection"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${m.backdrop_path})`
        }}
      >
        <div className="heroOverlay">
          <h1 className="heroTitle">{m.title}</h1>
          <p className="heroRating">
            ⭐ {m.vote_average} / 10
          </p>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="movieContent">
        <p className="overview">{m.overview}</p>

        <div className="extraInfo">
          <p><span>📅 Estreno:</span> {m.release_date}</p>
          <p><span>🌐 Idioma:</span> {m.original_language}</p>
          <p><span>🎭 Géneros:</span> {m.genre_ids.join(", ")}</p>
          <p><span>🔥 Popularidad:</span> {m.popularity}</p>
          <p><span>🗳️ Votos:</span> {m.vote_count}</p>
        </div>
      </div>

    </div>
  ))
}
        </div>
    )
}

export default MovieDetail;
export {captureKey}