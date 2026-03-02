import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import Footer from './components/Footer';


function App() {
  
  return (
     
      <div>
        <BrowserRouter>
           <AppRouter/>
       </BrowserRouter>
       <Footer />
      </div>
    
  )
}

export default App;
