import React from "react";
import './service.css'
import {BsCheck2} from 'react-icons/bs'

const Service = () => {
    return(
        <section id="service">
            <h5>What i offer</h5>
            <h2>Service</h2>

            <div className="container container__service">
                <article className="service">
                    <div className="service-head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service-list">
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem, ipsum dolor sit amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem, ipsum dolor sit amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem, ipsum dolor sit amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem, ipsum dolor sit amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem, ipsum dolor sit amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem, ipsum dolor sit amet consectetur </p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service-head">
                        <h3>Web Developer</h3>
                    </div>
                    
                    <ul className="service-list">
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur </p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service-head">
                        <h3>Backend Developer</h3>
                    </div>

                    <ul className="service-list">
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur, </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur, </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur, </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur, </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur, </p>
                        </li>
                        <li>
                            <BsCheck2 className="service-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur, </p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Service