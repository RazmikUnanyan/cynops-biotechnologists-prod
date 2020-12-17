import React, {useEffect} from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import '../../scss/pageHeader.scss'

const PageHeader = ({titleFirst, titleRed, titleLast, description}) => {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);

    return (
        <div className="page_header">
            <div className="page_header__container">
                <div>
                    <h1>{titleFirst} <br/><span> {titleRed} </span> {titleLast}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>)
};

export default PageHeader;
