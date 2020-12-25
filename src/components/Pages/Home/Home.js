import React, {useState, useCallback} from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import Modal from "../../common/Modal";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {NavLink} from "react-router-dom";


const Home = ({news}) => {

    const [visibleModal, setVisibleModal] = useState(false);
    const handleClickOpenVideo = useCallback(() => {
        setVisibleModal(true);
    }, []);
    const handleCloseModal = useCallback(() => {
        setVisibleModal(false);
    }, []);
    return (
        <>{news.map(n => <section key={n.id} className="wow fadeIn content-details">
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
                                visible={visibleModal}
                                onClose={handleCloseModal}
                                title="Репортаж на Ника ТВ"
                            >
                                <FormControl component="fieldset" fullWidth>
                                    <FormGroup aria-label="position" row>
                                        <iframe src="https://video.nikatv.ru/video/h4S1cmRTeBVmSQtFFQpW"
                                                width="560"
                                                height="315"
                                                title='video_home'
                                                frameBorder="0" allow="autoplay; fullscreen; vr"
                                                allowFullScreen
                                        >

                                        </iframe>
                                    </FormGroup>
                                </FormControl>
                            </Modal>
                            <div className="col-md-6">
                                <div className="details">
                                    <h2>{n.detailsHeading}</h2>
                                    {n.isBiography && <div className="social-links">
                                        <a href="www.facebook.com" className="twitter"><TwitterIcon/></a>
                                        <a href="www.facebook.com" className="facebook"><FacebookIcon/></a>
                                        <a href="www.facebook.com" className="instagram"><InstagramIcon/></a>
                                        <a href="www.facebook.com" className="linkedin"><LinkedInIcon/></a>
                                    </div>}
                                    <p>{n.detailsP1}</p>
                                    <p>{n.detailsP2}</p>
                                    <p>{n.detailsP3}
                                        <h6 style={{
                                            fontSize: '12px',
                                            float: 'right',
                                            color: '#afafaf'
                                        }}>{n.titleAuthor}</h6>
                                    </p>
                                </div>
                                <span style={{float: 'left'}}>{!n.isBiography
                                    ? <NavLink exact to={'/home/' + n.id}>Подробнее об Разработчике</NavLink>
                                    : <NavLink exact to='/home'>Интервью</NavLink>
                                }
                        </span>
                            </div>
                            <span><DeleteOutlineIcon/></span>
                            <span><EditIcon/></span>
                        </div>
            </div>
        </section>)}
        </>
    )
};


export default Home;
