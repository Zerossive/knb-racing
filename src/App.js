import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Page imports
import Home from "./pages/Home";
import Races from "./pages/Races";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

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
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
