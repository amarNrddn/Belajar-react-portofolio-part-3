import React from "react";
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
            <h5>Experience</h5>
            <h2>My Experience</h2>

            <div className="container container__experience">
                <div className="experience-frontend">
                    <h3>Frontend Developer</h3>
                    <div className="conten-experience">
                        <article className="detail-experience">
                            <BsFillPatchCheckFill className="icon-experience" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="detail-experience">
                            < BsFillPatchCheckFill className="icon-experience" />
                            <div>
                                <h4>CSS3</h4>
                                <small className="text-light">Layouting</small>
                            </div>
                        </article>

                        <article className="detail-experience">
                            < BsFillPatchCheckFill className="icon-experience" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>

                        <article className="detail-experience">
                            < BsFillPatchCheckFill className="icon-experience" />
                            <div>
                                <h4>Talwind</h4>
                                <small className="text-light">Experienc</small>
                            </div>
                        </article>

                        <article className="detail-experience">
                            < BsFillPatchCheckFill className="icon-experience" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Basick</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience-backend">
                    <div className="experince-backend">
                        <h3>Backend Developer</h3>
                        <div className="conten-experience">
                            <article className="detail-experience">
                                < BsFillPatchCheckFill className="icon-experience" />
                                <div>
                                    <h4>Node.Js</h4>
                                    <small className="text-light">Coming Soon</small>
                                </div>
                            </article>

                            <article className="detail-experience">
                                < BsFillPatchCheckFill className="icon-experience" />
                                <div>
                                    <h4>JavaScript</h4>
                                    <small className="text-light">Experience</small>
                                </div>
                            </article>

                            <article className="detail-experience">
                                < BsFillPatchCheckFill className="icon-experience" />
                                <div>
                                    <h4>PHP</h4>
                                    <small className="text-light">Coming Soon</small>
                                </div>
                            </article>

                            <article className="detail-experience">
                                < BsFillPatchCheckFill className="icon-experience" />
                                <div>
                                    <h4>MYSQL</h4>
                                    <small className="text-light">Coming Soon</small>
                                </div>
                            </article>

                            <article className="detail-experience">
                                < BsFillPatchCheckFill className="icon-experience" />
                                <div>
                                    <h4>Python</h4>
                                    <small className="text-light">Coming Soon</small>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience