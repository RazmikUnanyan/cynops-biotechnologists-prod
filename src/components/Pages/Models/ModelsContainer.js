import React from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import Model from "./Model";



const ModelsContainer = () => {
    return (
            <section   className="wow fadeIn content-details" style={{display: 'flex', flexFlow: 'column'}}>
                <div className="container">
                    <div className="content-header models" data-aos="fade-down">
                        <h2>3D Models</h2>
                        <ul>
                            <li><NavLink to={'/models/1'}>Кисть</NavLink></li>
                            <li><NavLink to={'/models/2'}>Корпус</NavLink></li>
                            <li><NavLink to={'/models/3'}>Рука</NavLink></li>
                        </ul>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/models/1" component={() => <Model model='model 1'/>} />
                    <Route exact path="/models/2" component={ () => <Model model='model 2'/>} />
                    <Route exact path="/models/3" component={ () => <Model model='model 3'/>} />
                </Switch>
            </section>
    )
};

export default ModelsContainer;
