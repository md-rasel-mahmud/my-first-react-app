import "./Navbar.css"
import {useState} from 'react'
import { Routes, Route, Link } from "react-router-dom";


function Navbar() {
    
    const [activeNav, setActiveNav] = useState('/');

    return(
        <nav>

            <Link to="/" onClick={() => setActiveNav("/")} className={activeNav === '/' ? 'active' : ''}>
                <i className="fas fa-home"></i>
            </Link>

            <Link  to="/about" onClick={() => setActiveNav("WhyMe")} className={activeNav === 'WhyMe' ? 'active' : ''}>
                <i className="fas fa-user"></i>
            </Link>

            <Link to="/Services" onClick={() => setActiveNav("Services")} className={activeNav === 'Services' ? 'active' : ''}>
                <i className="fas fa-pen-ruler"></i>
            </Link>

            <Link to="/Portfolio" onClick={() => setActiveNav("Portfolio")} className={activeNav === 'Portfolio' ? 'active' : ''}>
                <i className="fas fa-laptop"></i>
            </Link>

            <Link to="/Contact" onClick={() => setActiveNav("Contact")} className={activeNav === 'Contact' ? 'active' : ''}>
                <i className="fas fa-phone"></i>
            </Link>

        </nav>
    )
}

export default Navbar;