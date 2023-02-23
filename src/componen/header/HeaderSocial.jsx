import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {SiDiscord} from 'react-icons/si'

const HeaderSocial = () => {
    return(
        <div className="header-social">
            <a href="https://github.com/AmarPalevi02" target="__blank"><BsLinkedin /></a>
            <a href="https://github.com/AmarPalevi02" target="__blank"><AiFillGithub /></a>
            <a href="https://github.com/AmarPalevi02" target="__blank"><SiDiscord /></a>
        </div>
    )
}

export default HeaderSocial