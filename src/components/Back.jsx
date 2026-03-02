import React from "react";
import { Link } from "react-router-dom";


const Back = () => {
  return (
    <div className="backContainer">
      <Link to="/" className="backButton">
        ← Volver
      </Link>
    </div>
  );
};


export default Back;