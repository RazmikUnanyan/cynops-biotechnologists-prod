import React, {useCallback, useState} from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Modal from "../../common/Modal";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import FormNews from "./Form/FormNews";
import {NavLink} from "react-router-dom";
import PostAddIcon from '@material-ui/icons/PostAdd';

const HomeCarousel = ({news}) => {

    const [visibleModal, setVisibleModal] = useState();

    const handleClickOpenVideo = useCallback(() => setVisibleModal("video"), []);
    const handleClickOpenUpdate = useCallback(() => setVisibleModal("update"), []);
    const handleCloseModal = useCallback(() => setVisibleModal(undefined), []);
    return (
        <>
            <section id="news-content">
                <div className="container">
                    <div className="title">
                        <h1>Новости</h1>
                        <p>Наши последние новости</p>
                        <div onClick={handleClickOpenUpdate}><PostAddIcon/></div>
                    </div>
                    <div className="row" data-aos="fade-up">
                        {news.map(n => <div className="col-md-4" key={n.id}>
                            <div className="card text-center">
                                <div>
                                    {n.linkedin
                                        ? <>
                                            <video autoPlay muted loop className="card-img-top">
                                                <source src={n.linkedin} type="video/mp4" className="source"/>
                                            </video>
                                            <span onClick={handleClickOpenVideo}>
                                                <PlayCircleFilledIcon/>
                                            </span>
                                        </>
                                        : < img
                                            src={n.imgUrl}
                                            alt="img1" className="card-img-top"/>
                                    }
                                    <div className="card-body">
                                        <h5 className="card-title">{n.detailsHeading}</h5>
                                        <p className="card-text">
                                            {n.titleHeader}
                                        </p>
                                        <NavLink to={`/home/${n._id}`}>Подробнее</NavLink>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <DeleteOutlineIcon/>
                                        <EditIcon/>
                                    </div>
                                </div>
                            </div>
                            <Modal
                                visible={visibleModal === "video"}
                                onClose={handleCloseModal}
                                title="Репортаж"
                            >
                                <FormControl component="fieldset" fullWidth>
                                    <FormGroup aria-label="position" row>
                                        <iframe src="https://video.nikatv.ru/video/h4S1cmRTeBVmSQtFFQpW"
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
                        </div>)}
                    </div>
                    <hr/>
                </div>
            </section>
        </>

    )
};

export default HomeCarousel;
