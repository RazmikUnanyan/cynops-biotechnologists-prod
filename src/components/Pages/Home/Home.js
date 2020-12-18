import React from "react";
import PageHeader from "../../common/PageHeader";
import About from "../About/About";

const Home = () => {
    return (
        <>
            <PageHeader titleFirst='Get'
                        titleLast='touch'
                        titleRed='in'
                        description='You can contact us online.'/>
            <About/>
        </>

    )
};

export default Home;
