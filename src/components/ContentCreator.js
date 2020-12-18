import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

//creating content for "about" and "home"  pages

const ContentCreator =({news}) => {
    return (
        <section className="wow fadeIn content-details" style={{backgroundColor: news.backgroundColor}}>
            <div className="container">
                <div className="content-header" data-aos="fade-up">
                    <h2>{news.titleHeader}</h2>
                    <p>{news.titleHeader2}</p>
                </div>
                <div className="row">
                    <div data-aos="fade-right">
                        <img
                            src={news.imgUrl}
                            alt="img1" className="img-fluid"/>
                    </div>

                    <div className="col-md-6">
                        <div className="details">
                            <h2>{news.detailsHeading}</h2>
                            <p>{news.detailsP1}</p>
                            <p>{news.detailsP2}</p>
                            <p>{news.detailsP3}
                                <a href={news.videoUrl}> Видео</a>
                            </p>
                        </div>

                    </div>
                    <span><DeleteOutlineIcon/></span>
                    <span><EditIcon/></span>
                </div>
            </div>

        </section>

    )
};

export default ContentCreator;
