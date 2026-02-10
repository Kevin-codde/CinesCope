import React, { useState } from "react";
import Loader from "./Loader";
import { useEffect } from "react";


const MovieCard = function ({req}){

    const [data,setData] = useState([]);
    const [load,setLoad] = useState(true);

    useEffect(()=>{

        const extraerData = async function(){
            try{

                const datosExtraidos = await req
                setData(datosExtraidos);
                setLoad(false)
            }
            catch(e){
                console.log(e)
                
                
            }
        }

        extraerData()
    },[])

    return (
        <div>
            
                
                
                   { !load ?
                       (
                        
                        <ul>
                            {
                            data.map((movie)=>(
                                <li key={movie.id} className="movieCard">
                                <img 
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                                    alt={movie.title} 
                                    className="poster"
                                />
                                <div className="movieInfo">
                                    <h3 className="title">{movie.title}</h3>
                                    <p className="release">📅 Estreno: {movie.release_date}</p>
                                    <p className="rating">⭐ {movie.vote_average} / 10 ({movie.vote_count} votos)</p>
                                    <p className="overview">{movie.overview.substring(0, 100)}...</p>
                                </div>
                                </li>
                            ))
                            }
                        </ul>
                        )
                    : 
                        
                       <div>
                            <Loader/>
                       </div>
                            
                        
                   }
                
                
            
        </div>
    )
}

export default MovieCard;