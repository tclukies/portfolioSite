import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Development from "./Components/Development";
import Resume from "./Components/Resume";
import Blog from "./Components/Blog";
import Photography from "./Components/Photography";
import Contact from "./Components/Contact";

import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div class="App">
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/development" component={Development} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/photography" component={Photography} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
        );
    }
}
export default App;
