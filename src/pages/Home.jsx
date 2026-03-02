import React from "react";
import MovieCard from '../components/MovieCard'
import {dataMovie} from '../services/api'
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const Home = function(){
    const [clicked,setClick] = useState(false);
    const [busqueda,setBusqueda] = useState('');
  
    return (
  <div className="appLayout">

    <header className="header">
      <nav className="navbar">
        <Link to="/">
          <img src="/CineScope.png" alt="logo" className="logo" />
        </Link>

        <Link to="/user" className="nav-link">👤 User</Link>

        <form className="nav-form">
          <input 
            type="text" 
            className="nav-search" 
            placeholder="🔍 Buscar películas..."
            onChange={(e)=>{
              setBusqueda(e.target.value);
              setClick(false);
            }} 
          />
          <button 
            type="button" 
            className="nav-button"
            onClick={()=> setClick(true)}
          >
            Buscar
          </button>
        </form>
      </nav>
    </header>

    <main className="mainContent">
      {
        !clicked 
          ? (
            <>
              <h2 className="sectionTitle">Catálogo de Películas</h2>
              <MovieCard req={dataMovie()} />
            </>
          )
          : <SearchBar mvs={busqueda}/>
      }
    </main>

    
    

  </div>
);
}

export default Home;