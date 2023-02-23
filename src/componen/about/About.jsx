import React from "react";
import './about.css'
import Profil from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {HiOutlineFolderOpen} from 'react-icons/hi'

function About(){
    return(
       <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>

        <div className="container about-container">
            <div className="about-me">
                <div className="about-profil">
                    <img src={Profil} alt="profil" />
                </div>
            </div>

            <div className="about-conten">
               <div className="about-card">
                <article className="about-cards">
                    <FaAward className="card-icon" />
                    <h5>Experience</h5>
                    <small>1+ year working</small>
                </article>

                <article className="about-cards">
                    <HiOutlineUserGroup className="card-icon" />
                    <h5>Client</h5>
                    <small>3 Worldwide</small>
                </article>

                <article className="about-cards">
                    <HiOutlineFolderOpen className="card-icon" />
                    <h5>Project</h5>
                    <small>5 comploted</small>
                </article>
               </div>

               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nesciunt earum libero veritatis, asperiores odio deserunt nulla itaque hic accusantium ut blanditiis laborum illum unde obcaecati, tempore molestias excepturi officia facere</p>
               <a href="#contact" className="btn btn-primary">Let's talk</a>
            </div>
        </div>
       </section>
    )
}

export default About