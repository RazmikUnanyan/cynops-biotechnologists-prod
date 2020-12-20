import './scss/app.scss'
import "aos/dist/aos.css";
import Aos from "aos";
import {Switch, Route, Redirect} from "react-router-dom";
import Header from "./components/Header/Header";
import HomeContainer from "./components/Pages/Home/HomeContainer";
import About from "./components/Pages/About/About";
import Team from "./components/Pages/Team/Team";
import Models from "./components/Pages/Models/Models";
import React, { useEffect } from "react";
import Footer from "./components/Footer/footer";





function App() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);


    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/about" component={() => <About />} />
                <Route exact path="/team" component={() => <Team />} />
                <Route exact path="/models" component={() => <Models />} />
                <Route exact path="/home/:id?" component={HomeContainer} />
                <Route exact path="/" component={()=><Redirect to={'/home'}/>} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
