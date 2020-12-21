import React from "react";
import logo from '../../assets/img/logo.png'
import '../../scss/footer.scss'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowUp from "../common/ArrowUp";
import {animateScroll as scroll} from "react-scroll";

const Footer =() => {
    return(
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-info">
                            <img src={logo} alt="TheEvenet"/>
                        </div>
                        <div className="col-lg-6 col-md-6 footer-contact" onClick={()=>scroll.scrollToTop()}>
                            <ArrowUp/>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                65 Years Of Victory Street<br/>
                                Kaluga, 248000<br/>
                                Russian Federation <br/>
                                <strong>Phone:</strong> +79533127314<br/>
                                <strong>Email:</strong> biopro40@yandex.ru<br/>
                            </p>
                            <div className="social-links">
                                <a href="www.cynops.ru" className="twitter"><TwitterIcon/></a>
                                <a href="www.cynops.ru" className="facebook"><FacebookIcon/></a>
                                <a href="www.cynops.ru" className="instagram"><InstagramIcon/></a>
                                <a href="www.cynops.ru" className="linkedin"><LinkedInIcon/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="credits">
                    &copy; Designed by <a href="https://www.facebook.com/unanyan.razmik/">Razmik Unanyan</a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
