import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/experience">À propos</Link></li>
                    <li><Link to="/formation">Formation</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;