import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { MainContextProvider } from "./MainContext";
import FilmDetail from "./components/FilmDetail";
import TopRatedFilm from "./components/TopRatedFilm";
import About from "./components/About";
const App = () => {
  return (
    <Router>
      <MainContextProvider>
        <Header />
        <Switch>
          <Route component={MainPage} path="/" exact />
          <Route component={FilmDetail} path="/film/:id" />
          <Route component={TopRatedFilm} path="/topfilms" />
          <Route component={About} path="/about" />
        </Switch>
      </MainContextProvider>
    </Router>
  );
};

export default App;
