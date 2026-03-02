import React from "react";

const Footer = ()=>{
    return(
        <div>
               <footer className="footer">
                <p>
                © {new Date().getFullYear()} Kevin Andres Bejarano Tello 👨‍💻 · 
                Todos los derechos reservados
                </p>
                <nav className="footer-links">
                <a href="https://github.com/kevin-codde" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/example.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:kevin.bejarano@correounivalle.edu.co">Contacto</a>
                </nav>
            </footer>
        </div>
    )
}


export default Footer;