import React from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import Model from "./Model";

const models = {
    prosthesis: "https://sketchfab.com/models/5809268bf3a14867ada4221dc8915d96/embed?autospin=0.2&amp;autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1",
    wrist: "https://sketchfab.com/models/af965aa45c4543cebf607ae47ff91e8d/embed?autospin=0.2&amp;autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1",
    finger: "https://sketchfab.com/models/af965aa45c4543cebf607ae47ff91e8d/embed?autospin=0.2&amp;autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
};

const ModelsContainer = () => {
    return (
            <section   className="wow fadeIn content-details" style={{display: 'flex', flexFlow: 'column'}}>
                <div className="container">
                    <div className="content-header models" data-aos="fade-down">
                        <h2>3D Models</h2>
                        <ul>
                            <li><NavLink to={'/models/1'}>Протез</NavLink></li>
                            <li><NavLink to={'/models/2'}>Кисть</NavLink></li>
                            <li><NavLink to={'/models/3'}>Палец</NavLink></li>
                        </ul>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/models/1" component={() => <Model model={models.prosthesis}/>} />
                    <Route exact path="/models/2" component={ () => <Model model={models.wrist}/>} />
                    <Route exact path="/models/3" component={ () => <Model model={models.finger}/>} />
                </Switch>
            </section>
    )
};

export default ModelsContainer;
