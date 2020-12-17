import React from "react";
import PageHeader from "../../common/PageHeader";
import Content from "../../common/Content";

const About = () => {
    return (
        <>
            <PageHeader titleFirst='About'
                        titleRed='The'
                        titleLast='Company'
                        description='News and articles in the media.'/>
            <Content/>
        </>

    )
};

export default About;
