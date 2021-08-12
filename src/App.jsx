import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { MainContextProvider } from "./MainContext";
import FilmDetail from "./components/FilmDetail";
import TopRatedFilm from "./components/TopRatedFilm";
const App = () => {
  return (
    <Router>
      <MainContextProvider>
        <Header />
        <Switch>
          <Route component={MainPage} path="/" exact />
          <Route component={FilmDetail} path="/film/:id" />
          <Route component={TopRatedFilm} path="/topfilms" />
        </Switch>
      </MainContextProvider>
    </Router>
  );
};

export default App;
