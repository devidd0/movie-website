import React, { createContext, useState } from "react";
export const MainContext = createContext();
export const MainContextProvider = ({ children }) => {
  const apiKey = "a447a294be2eab4dd49113efb54fb2d3";
  const [discoverFilms, setDiscoverFilms] = useState();
  const [page, setPage] = useState(1);
  const [searchInputVal, setSearchInputVal] = useState("harry");
  const [showMoviesLoad, setShowMoviesLoad] = useState(false);
  const [searchBarVisible, setSearchBarVsible] = useState(false);
  const [rated, setRated] = useState();
  const discoverRequest = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=tr-TR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`;
  const querySearchRequest = `https://api.themoviedb.org/3/search/movie?api_key=a447a294be2eab4dd49113efb54fb2d3&query=${searchInputVal}`;
  const topRatedRequest = `https://api.themoviedb.org/3/movie/top_rated?api_key=a447a294be2eab4dd49113efb54fb2d3&language=tr-TR&page=${page}`;
  const data = {
    discoverFilms,
    setDiscoverFilms,
    discoverRequest,
    page,
    setPage,
    showMoviesLoad,
    setShowMoviesLoad,
    querySearchRequest,
    searchInputVal,
    setSearchInputVal,
    searchBarVisible,
    setSearchBarVsible,
    topRatedRequest,
    rated,
    setRated,
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};
