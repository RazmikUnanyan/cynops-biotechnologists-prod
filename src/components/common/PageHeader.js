import React, { useCallback, useState } from "react";
import '../../scss/pageHeader.scss'
import ArrowDown from "./ArrowDown";
import { Link } from "react-scroll";
import Modal from "./Modal";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import video from '../../assets/img/video.mp4';


const PageHeader = ({ titleFirst, titleRed, titleLast, description }) => {

    const [visibleModal, setVisibleModal] = useState(false);
    const handleClickOpenVideo = useCallback(() => { setVisibleModal(true); }, []);
    const handleCloseModal = useCallback(() => { setVisibleModal(false); }, []);

    return (
        <div className="page_header">
            <div className="video">
                <video autoPlay muted loop className="video-back"
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className="page_header__container">
                <div>
                    <h2 data-aos="fade-down">{titleFirst} <br /><span> {titleRed} </span> {titleLast}</h2>
                    <p data-aos="flip-up">{description}</p>
                    <section className="intro">
                        <div className="intro-container wow fadeIn">
                            <span onClick={handleClickOpenVideo} className="venobox play-btn mb-4"
                                data-vbtype="video"
                                data-autoplay="true">
                            </span>
                            <Modal
                                visible={visibleModal}
                                onClose={handleCloseModal}
                                title='Программа "Интересно"'
                            >
                                <FormControl component="fieldset" fullWidth>
                                    <FormGroup aria-label="position" row>
                                        <iframe src="https://video.nikatv.ru/video/SruTwpDATQ8kQco2cGei"
                                            width="560"
                                            height="315"
                                            frameborder="0"
                                            allowfullscreen title='video_header'
                                        >
                                        </iframe>
                                    </FormGroup>
                                </FormControl>
                            </Modal>
                        </div>
                    </section>
                    <Link to="main_content" smooth={true} duration={1000}><ArrowDown /></Link>
                </div>
            </div>
        </div>
    )

};

export default PageHeader;
