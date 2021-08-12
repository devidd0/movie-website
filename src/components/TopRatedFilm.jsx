import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../MainContext";
import Film from "./Film";
import PageList from "./PageList";
import Loading from "./Loading";

const NewFilms = () => {
  const { topRatedRequest, rated, setRated, showMoviesLoad } =
    useContext(MainContext);
  useEffect(() => {
    fetch(topRatedRequest)
      .then((res) => res.json())
      .then((data) => setRated(data.results));
  }, []);
  console.log(rated && rated);
  return (
    <>
      <div className="w-full  h-auto min-h-screen flex flex-wrap bg-[#333] items-center justify-center">
        {showMoviesLoad ? (
          rated && rated.map((film, key) => <Film {...film} key={key} />)
        ) : (
          <Loading />
        )}
      </div>
      <PageList />
    </>
  );
};

export default NewFilms;
