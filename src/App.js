import './scss/app.scss'
import "aos/dist/aos.css";
import Aos from "aos";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Contacts from "./components/Pages/Contacts/Contacts";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Team from "./components/Pages/Team/Team";
import Models from "./components/Pages/Models/Models";
import {useEffect} from "react";
import Footer from "./components/Footer/footer";





function App() {
    useEffect(() => {
        Aos.init({
            duration: 500
        });
    }, []);
    return (
        <div className="App">
           <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/about" component={() => <About />}  />
                <Route exact path="/team" component={()=> <Team />} />
                <Route exact path="/models" component={()=> <Models />} />
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
