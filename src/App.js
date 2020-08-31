import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchPage from "./Components/SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Keep the Header and Footer outside the switch so it will always shown
function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        {/**Since Header and Footer components are outside the Switch, it will always render */}

        {/**Switch component checks the url pathway to dictate which component to load onto the page*/}

        {/**Must have the home page on the bottom, otherwise it will not render correctly */}
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
