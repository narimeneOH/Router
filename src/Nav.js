import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const navSyle = {
        color: 'white'
    };
    return (
        <nav>
            <Link to="/"><h3>Logo</h3></Link>
            <ul className="links">
                <Link to="/about" style={navSyle}>
                    <li>About</li>
                </Link>
                <Link to="/shop" style={navSyle}>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}
export default Nav;