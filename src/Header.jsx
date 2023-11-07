import React, { useState } from 'react'
import logow from './logo-w.png';
import logo from './logo.svg';
import './estilo-h.css';
import { Outlet, Link } from 'react-router-dom';

export default function Header() {
    const [fix, setFix] = useState(false)

    function setFixed() {
        if (window.scrollY > 0) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixed)

    return (
        <div>
            <header class={fix ? 'navbar fixed' : 'navbar'}>
                <Link to="/"><img src={fix ? logo : logow} alt="Logo de A-T-MD" class="logo" /></Link>
                <ul>
                    <li><Link to="/Tecnología">Tecnología</Link></li>
                    <li><Link to="/Nosotros">Nosotros</Link></li>
                </ul>
            </header>
            <Outlet/>
        </div>
    )
}
