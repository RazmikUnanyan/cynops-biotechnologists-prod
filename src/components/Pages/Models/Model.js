import React from "react";

const Model = ({model}) => {
    return (
        <div className="models_content" data-aos="fade-up">
            <iframe title="A 3D model" width="600" height="450"
                    src={model}
                    frameBorder="0" allow="autoplay; fullscreen; vr"
                    mozallowfullscreen="true" webkitallowfullscreen="true">
            </iframe>
        </div>
    )
};

export default Model;
