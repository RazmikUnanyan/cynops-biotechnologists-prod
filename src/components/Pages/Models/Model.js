import React from "react";

const Model = ({model}) => {
    return (
        <div className="models_content" data-aos="fade-up">
            <iframe title="A 3D model" width="600" height="450"
                    src="https://sketchfab.com/models/af965aa45c4543cebf607ae47ff91e8d/embed?autospin=0.2&amp;autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
                    frameBorder="0" allow="autoplay; fullscreen; vr"
                    mozallowfullscreen="true" webkitallowfullscreen="true">
            </iframe>
        </div>
    )
};

export default Model;
