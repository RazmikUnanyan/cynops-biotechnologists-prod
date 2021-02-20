import React, {useCallback, useState} from "react";
import ReactHtmlParser from 'react-html-parser';
import Modal from "../../common/Modal";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormIntro from "./Form/FormIntro";
import CircularProgress from '@material-ui/core/CircularProgress';



const HomeIntro = ({heading, updateHomeHeader, setIsEdit, isLoading}) => {



    const [visibleModal, setVisibleModal] = useState();
    const handleClickOpenVideo = useCallback(() => setVisibleModal("video"), []);
    const handleClickOpenUpdate = useCallback(() => setVisibleModal("update"), []);
    const handleCloseModal = useCallback(() => setVisibleModal(undefined),[]);

    return (
        <div className="home_header" key={heading._id}>
            <div className="video">
                <video autoPlay muted loop className="video-back"
                >
                    <source src="https://static.videezy.com/system/resources/previews/000/055/787/original/4k-abstract-ancient-ink-vfx-human-arm-anatomy-reveal-animation.mp4"/>
                </video>
            </div>
            <div className="home_header__container">
                     <div>
                        {!isLoading
                        && <div style={{cursor:"pointer"}} onDoubleClick={handleClickOpenUpdate}>
                            <h2 data-aos="fade-down">{ReactHtmlParser(heading.title)}</h2>
                            <p data-aos="flip-up">{heading.description}</p>
                        </div>
                        }
                        <section className="intro">
                            <div className="intro-container wow fadeIn">
                                {!isLoading
                                    ? <span onClick={handleClickOpenVideo} className="venobox play-btn mb-4"
                                            data-vbtype="video"
                                            data-autoplay="true">
                            </span>
                                    : <CircularProgress color="secondary"/>
                                }
                                <Modal
                                    visible={visibleModal === "video"}
                                    onClose={handleCloseModal}
                                    title='Интересно'
                                >
                                    <FormControl component="fieldset" >
                                        <FormGroup aria-label="position" row  >
                                            <iframe src={heading.videoUrl}
                                                    width="560"
                                                    height="315"
                                                    frameBorder="0" allow="autoplay; fullscreen; vr"
                                                    allowFullScreen
                                                    title='video_header'
                                            >
                                            </iframe>
                                        </FormGroup>
                                    </FormControl>
                                </Modal>
                                <Modal
                                    visible={visibleModal === "update"}
                                    onClose={handleCloseModal}
                                    title='Редактировать'
                                >
                                    <FormControl component="fieldset" fullWidth>
                                        <FormGroup aria-label="position" row>
                                            <FormIntro onClose={handleCloseModal}
                                                setIsEdit={setIsEdit} updateHomeHeader={updateHomeHeader} state={heading}
                                                       videoUrl='https://video.nikatv.ru/video/SruTwpDATQ8kQco2cGei'/>
                                        </FormGroup>
                                    </FormControl>
                                </Modal>
                            </div>
                        </section>
                    </div>
            </div>
        </div>
    )

};

export default HomeIntro;
