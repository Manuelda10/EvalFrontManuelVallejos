import React from 'react'
import './index.css'
import Hamburger from '../Hamburger/Hamburger'

const Header = () => {

    return (<header>
        <nav className='menu'>
            <ul>
                <li><a href='#' >Comunidad</a></li>
                <li><a href='#' >Motivo</a></li>
                <li><a href='#' >Horizonte</a></li>
                <li><a href='#' >Firmas</a></li>
                <li><a href='#' >Acerca de</a></li>
                <li><a href='#' >Iniciar sesión</a></li>
            </ul>
        </nav>
        <div className='logo-container'>
            <a href='#' className='logo' >
                <img className='logo-img' alt='logo' ></img>
                <div className='logo-title'><span>java</span>script</div>
            </a>
        </div>
        <div className='hamburger-container'>
            <Hamburger></Hamburger>
        </div>
    </header>)
}

export default Header