import './scss/App.scss'
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Contacts from "./components/Pages/Contacts/Contacts";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Team from "./components/Pages/Team/Team";
import Models from "./components/Pages/Models/Models";




function App() {
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
        </div>
    );
}

export default App;
