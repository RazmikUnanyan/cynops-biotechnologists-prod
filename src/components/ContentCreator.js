import React, { useState, useCallback } from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import Modal from "../components/common/Modal";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

//creating content for "about" and "home"  pages

const ContentCreator = ({ news }) => {

    const [visibleModal, setVisibleModal] = useState(false);
    const handleClickOpenVideo = useCallback(() => { setVisibleModal(true); }, []);
    const handleCloseModal = useCallback(() => { setVisibleModal(false); }, []);
    return (
        <section className="wow fadeIn content-details" style={{ backgroundColor: news.backgroundColor }}>
            <div className="container">
                <div className="content-header" data-aos="fade-up">
                    <h2>{news.titleHeader}</h2>
                </div>
                <div className="row">
                    <div data-aos="fade-right" className="video_content">
                        {news.videoReview
                            ? <><video autoPlay muted loop >
                                <source src={news.videoReview} type="video/mp4" className="source" />
                            </video>
                                <span onClick={handleClickOpenVideo} >
                                    <PlayCircleFilledIcon />
                                </span>
                            </>
                            : < img
                                src={news.imgUrl}
                                alt="img1" className="img-fluid" />
                        }
                    </div>
                    <Modal
                        visible={visibleModal}
                        onClose={handleCloseModal}
                        title="Репортаж на Ника ТВ"
                    >
                        <FormControl component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <iframe src="https://video.nikatv.ru/video/h4S1cmRTeBVmSQtFFQpW"
                                    width="560"
                                    height="315"
                                    frameborder="0"
                                    allowfullscreen
                                    title='video_home'
                                >

                                </iframe>
                            </FormGroup>
                        </FormControl>
                    </Modal>
                    <div className="col-md-6">
                        <div className="details">
                            <h2>{news.detailsHeading}</h2>
                            <p>{news.detailsP1}</p>
                            <p>{news.detailsP2}</p>
                            <p>{news.detailsP3}
                                <h6 style={{ fontSize: '12px', float: 'right', color: '#afafaf' }}>{news.titleAutor}</h6>
                            </p>
                        </div>
                    </div>
                    <span><DeleteOutlineIcon /></span>
                    <span><EditIcon /></span>
                </div>
            </div>
        </section>
    )
};


export default ContentCreator;
