import React from "react";
import { search } from "../services/api";
import MovieCard from "./MovieCard";
const SearchBar = function({mvs}){
    

    return(
        <div>
            
            <span>Resultados de busqueda</span>
            
            <MovieCard req={search(mvs)}/>
        </div>
    )
}

export default SearchBar;