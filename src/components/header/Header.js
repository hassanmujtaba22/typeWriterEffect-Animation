import React from 'react'
import "./header.css"


function Header() {
    return (
        <header className="header">
            <h1 className="logo"><a href="/">HASSAN</a></h1>
            <ul className="navLink">
                <li>Features</li>
                <li>Developers</li>
                <li>About</li>
                <li>News</li>
                <li>Resources</li>
                <li>Buy Syscoin</li>
                <li>Join Discord</li>
            </ul>
        </header>
    )
}
    

export default Header
