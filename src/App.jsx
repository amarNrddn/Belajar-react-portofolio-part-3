import React from "react";
import Header from './componen/header/Header'
import Navbar from './componen/navbar/Navbar'
import About from './componen/about/About'
import Experience from './componen/experience/Experience'
import Service from './componen/service/Service'
import Portofolio from './componen/portofolio/Portofolio'
import Testimonial from './componen/testimonial/Testimonial'
import Contact from './componen/contact/Contact'
import Footer from './componen/footer/Footer'

const App = () => {
    return(
        <>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Service />
        <Portofolio />
        <Testimonial />
        <Contact />
        <Footer />
        </>
    )
}

export default App;