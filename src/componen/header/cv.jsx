import React from "react";
import Cv from '../../assets/cv.pdf'

const Cvme = () => {
    return(
        <div className="cv">
            <a href={Cv} download className="btn">Download</a>
            <a href="#contact" className="btn btn-primary">Lanjut</a>
        </div>
    )
}

export default Cvme