import React from "react";
import MovieCard from "./MovieCard";
const SearchBar = function({mvs}){
    

    return(
        <div>
            
            <span>Resultados de busqueda</span>
            
            <MovieCard req={mvs}/>
        </div>
    )
}

export default SearchBar;