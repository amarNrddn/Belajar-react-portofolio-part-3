import React from "react";
import './header.css'
import Cv from './cv'
import Profil from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
    return(
       <header>
        <div className="container container-header">
            <h5>Hai i'm</h5>
            <h1>Amar</h1>
            <h5 className="text-light">Frontend Developer</h5>
            <Cv />
            <HeaderSocial />

            <div className="profil">
                <img src={Profil} alt="profil" />
            </div>

            <a href="#contact" className="scrol_down">Scrol Downd</a>
        </div>
       </header>
    )
}

export default Header