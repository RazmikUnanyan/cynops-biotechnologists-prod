import React from "react";
import ReactHtmlParser from 'react-html-parser';



const Home = ({news}) => {

    return (
        <section id="news-content" key={news.id}>
            <div className="container">
                <div className="title" data-aos="fade-up">
                    <h1>{news.detailsHeading}</h1>
                    <p>{news.titleHeader}</p>
                </div>
                <p onDoubleClick={()=>{}} style={{cursor:"pointer"}}>{ReactHtmlParser(news.description)}
                    <h6 style={{
                        fontSize: '12px',
                        float: 'right',
                        color: '#afafaf'
                    }}>{news.titleAuthor}</h6>
                </p>
            </div>
        </section>
    )
};


export default Home;
