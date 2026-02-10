import React from "react";
import MovieCard from '../components/MovieCard'
import {dataMovie} from '../services/api'
import { useState } from "react";
import SearchBar from "../components/SearchBar";

const Home = function(){
    const [clicked,setClick] = useState(false);
    const [busqueda,setBusqueda] = useState('');
    return(
        <div>
             <header className="header">
        <nav className="navbar">
          <a href="#"><img src="/CineScope.png" alt="logo"  className='logo'/></a>
          <a href="#" className="nav-link" title="Perfil">👤 Perfil</a>
          <form className="nav-form">
            <input 
              type="text" 
              className="nav-search" 
              placeholder="🔍 Buscar películas..."
              onChange={(e)=>{setBusqueda(e.target.value)
                setClick(false);
              }} 
            />
            <button type="button" className="nav-button" onClick={()=>{setClick(true)
            }}>Buscar</button>
          </form>
        </nav>
        </header>

          {!clicked ? <div> <span >Catalogo de Peliculas</span>
                            <MovieCard req={dataMovie()}/></div>
          : <div><SearchBar mvs={busqueda}/></div> 
         }
         
          <footer className="footer">
             <p>© {new Date().getFullYear()} Kevin Andres Bejarano Tello 👨‍💻 · Todos los derechos reservados</p> 
             <nav className="footer-links"> 
              <a href="https://github.com/kevin-codde" target="_blank" rel="noopener noreferrer">GitHub</a> 
              <a href="https://linkedin.com/in/example.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
              <a href="mailto:kevin.bejarano@correounivalle.edu.co">Contacto</a> 
              </nav> 
             </footer>
        </div>

        
    )
}

export default Home;