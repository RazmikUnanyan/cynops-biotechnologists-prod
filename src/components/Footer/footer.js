import React from "react";
import logo from '../../assets/img/logo.png'
import '../../scss/footer.scss'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer =() => {
    return(
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-info">
                            <img src={logo} alt="TheEvenet"/>
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
                                <a href="www.facebook.com" className="twitter"><TwitterIcon/></a>
                                <a href="www.facebook.com" className="facebook"><FacebookIcon/></a>
                                <a href="www.facebook.com" className="instagram"><InstagramIcon/></a>
                                <a href="www.facebook.com" className="linkedin"><LinkedInIcon/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
