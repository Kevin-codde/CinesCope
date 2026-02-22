import React from "react";
import Home from "../pages/Home";
import User from "../pages/User";
import MovieDetail from "../pages/MovieDetail";
import { Routes, Route  } from "react-router-dom";

const AppRouter = ()=>{
   return(
        <div>
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/movie/:id" element={<MovieDetail/>}/>

             </Routes>
        </div>
   )
}

export default AppRouter;