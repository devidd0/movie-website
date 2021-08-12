import React, { useContext, useEffect } from "react";
import Film from "./Film";
import { MainContext } from "../MainContext";
import PageList from "./PageList";
import Loading from "./Loading";
const MainPage = () => {
  const {
    discoverRequest,
    discoverFilms,
    setDiscoverFilms,
    showMoviesLoad,
    setShowMoviesLoad,
  } = useContext(MainContext);
  useEffect(() => {
    fetch(discoverRequest)
      .then((res) => res.json())
      .then((data) => {
        setDiscoverFilms(data.results);
        setShowMoviesLoad(true)
      });
  }, []);
  return (
    <div>
      <div className="bg-[#444] h-auto w-full flex flex-wrap items-center justify-center pt-10 min-h-screen z-10">
        {showMoviesLoad ? (
          discoverFilms &&
          discoverFilms.map((film, key) => <Film {...film} key={key} />)
        ) : (
          <Loading />
        )}
      </div>
      <PageList />
    </div>
  );
};

export default MainPage;
