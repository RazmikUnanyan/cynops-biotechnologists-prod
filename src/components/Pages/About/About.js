import React from "react";
import preloader from "../../../assets/img/preloader.gif";


const About = () => {
    return(
        <section className="wow fadeIn content-details" style={{height: '100vh'}}>
            <img src={preloader} alt="preloader" style={{maxWidth: 250, height: 'auto'}}/>
        </section>
    )
};

export default About;
