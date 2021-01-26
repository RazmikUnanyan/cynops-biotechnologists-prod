import React from "react";
import ReactHtmlParser from 'react-html-parser';
import CircularProgress from "@material-ui/core/CircularProgress";



const Home = ({news, isLoading}) => {

    return (
        <section id="news-content" key={news.id}>
            {isLoading
                ?<CircularProgress color="secondary"/>
                :<div className="container">
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
            }
        </section>
    )
};


export default Home;
