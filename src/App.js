import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Page imports
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Races from "./pages/Races";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/Races'>
                    <Races />
                </Route>
                <Route exact path='/Sponsors'>
                    <Sponsors />
                </Route>
                <Route exact path='/Contact'>
                    <Contact />
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
