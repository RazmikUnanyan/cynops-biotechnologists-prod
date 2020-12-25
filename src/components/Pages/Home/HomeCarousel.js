import React, {useCallback, useState} from "react";
import {Carousel} from "react-bootstrap";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Modal from "../../common/Modal";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import FormNews from "./Form/FormNews";

const HomeCarousel = ({news}) => {

    const [visibleModal, setVisibleModal] = useState();

    const handleClickOpenVideo = useCallback(() => setVisibleModal("video"), []);
    const handleClickOpenUpdate = useCallback(() => setVisibleModal("update"), []);
    const handleCloseModal = useCallback(() => setVisibleModal(undefined),[]);
    return (
        <Carousel>
            {news.map(n => <Carousel.Item key={n._id}>
                <section  className="wow fadeIn content-details">
                    <div className="container">
                        <div className="content-header" data-aos="fade-right">
                            <h2>{n.titleHeader}</h2>
                        </div>
                        <div className="row">
                            <div data-aos="fade-right" className="video_content">
                                {n.videoReview
                                    ? <>
                                        <video autoPlay muted loop>
                                            <source src={n.videoReview} type="video/mp4" className="source"/>
                                        </video>
                                        <span onClick={handleClickOpenVideo}>
                                    <PlayCircleFilledIcon/>
                                </span>
                                    </>
                                    : < img
                                        src={n.imgUrl}
                                        alt="img1" className="img-fluid"/>
                                }
                            </div>
                            <Modal
                                visible={visibleModal === "video"}
                                onClose={handleCloseModal}
                                title={n.detailsHeading}
                            >
                                <FormControl component="fieldset" fullWidth>
                                    <FormGroup aria-label="position" row>
                                        <iframe src={n.videoUrl}
                                                width="560"
                                                height="315"
                                                title={n.detailsHeading}
                                                frameBorder="0" allow="autoplay; fullscreen; vr"
                                                allowFullScreen
                                        >

                                        </iframe>
                                    </FormGroup>
                                </FormControl>
                            </Modal>
                            <Modal
                                visible={visibleModal === "update"}
                                onClose={handleCloseModal}
                                title="Редактировать"
                            >
                                <FormControl component="fieldset" fullWidth>
                                    <FormGroup aria-label="position" row>
                                        <FormNews/>
                                    </FormGroup>
                                </FormControl>
                            </Modal>
                            <div className="col-md-6">
                                <div className="details">
                                    <h2>{n.detailsHeading}</h2>
                                    <div className="social-links">
                                        <a href="www.facebook.com" className="twitter"><TwitterIcon/></a>
                                        <a href="www.facebook.com" className="facebook"><FacebookIcon/></a>
                                        <a href="www.facebook.com" className="instagram"><InstagramIcon/></a>
                                        <a href="www.facebook.com" className="linkedin"><LinkedInIcon/></a>
                                    </div>
                                    <p onDoubleClick={handleClickOpenUpdate} style={{cursor:"pointer"}}>{n.description}
                                        <h6 style={{
                                            fontSize: '12px',
                                            float: 'right',
                                            color: '#afafaf'
                                        }}>{n.titleAuthor}</h6>
                                    </p>
                                </div>
                            </div>
                            <span><DeleteOutlineIcon/></span>
                            <span><EditIcon/></span>
                        </div>
                    </div>
                </section>
            </Carousel.Item>)}
        </Carousel>
    )
};

export default HomeCarousel;
