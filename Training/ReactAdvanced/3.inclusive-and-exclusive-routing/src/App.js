import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const About = () => <div className="page">About</div>;
const User = () => <div className="page">User</div>;
const NoMatch = () => <div className="page">NoMatch</div>;

function App() {
    //Go to about page and uncomment one of the two cases and play
    return <InclusiveRouter />;
    // return <ExclusiveRouter />;
}

const InclusiveRouter = () => {
    return (
        <div>
            <Router>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/:user">
                    <User />
                </Route>
                <Route>
                    <NoMatch />
                </Route>
            </Router>
        </div>
    );
};

const ExclusiveRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/:user">
                        <User />
                    </Route>
                    <Route>
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
