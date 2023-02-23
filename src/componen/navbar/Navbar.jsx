import React from "react";
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineBook} from 'react-icons/ai'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {BiSend} from 'react-icons/bi'
import {useState} from 'react'

const Navbar = () => {
    const [activeNav, setactivNav] = useState("#")
    return(
       <nav>
        <a href="#" onClick={() => setactivNav('#')} className={activeNav === "#" ? 'active' : ""}><AiOutlineHome /></a>
        <a href="#about" onClick={()=> setactivNav('#about')} className={activeNav=== '#about' ? 'active' : ''}><BiUserCircle/></a>
        <a href="#experience" onClick={() => setactivNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><AiOutlineBook/></a>
        <a href="#service" onClick={() => setactivNav('#service')} className={activeNav === '#service' ? 'active' : ''}><MdOutlineHomeRepairService/></a>
        <a href="#contact" onClick={() => setactivNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiSend/></a>
       </nav>
    )   
}

export default Navbar