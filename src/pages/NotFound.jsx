import React from "react";
import { search } from "../services/api";
const NotFound = ()=>{
    return (
  <div className="notFoundContainer">
    <div className="notFoundCard">
      <h2>🎬 Película no encontrada</h2>
      <p>Lo sentimos... no pudimos encontrar lo que buscas.</p>
    
    </div>
  </div>
);
}


export default NotFound;