import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../MainContext";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const PageList = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    page,
    setPage,
    discoverRequest,
    setDiscoverFilms,
    showMoviesLoad,
    setRated,
    setShowMoviesLoad,
    topRatedRequest,
  } = useContext(MainContext);
  useEffect(() => {
    fetch(discoverRequest)
      .then((res) => res.json())
      .then((data) => {
        setDiscoverFilms(data.results);
        setShowMoviesLoad(true);
        setIsDisabled(false);
      });
  }, [page]);
  useEffect(() => {
    fetch(topRatedRequest)
      .then((res) => res.json())
      .then((data) => {
        setRated(data.results);
        setShowMoviesLoad(true);
        setIsDisabled(false);
      });
  }, [page]);
  useEffect(() => {
    setPage(1);
  }, []);
  return (
    <div className="h-14 flex items-center justify-around px-14">
      <button
        className={`font-bold text-5xl ${
          isDisabled ? "opacity-50 pointer-events-none" : null
        } ${page == 1 ? "opacity-50 pointer-events-none" : null}`}
        onClick={() => {
          page < 2 ? null : setPage(page - 1);
          setShowMoviesLoad(false);
          setIsDisabled(true);
        }}
      >
        <MdKeyboardArrowLeft />
      </button>
      <div className="font-bold">
        {" "}
        Page / <span className="text-xl"> {page}</span>
      </div>
      <button
        className={`font-bold text-5xl ${
          isDisabled ? "opacity-50 pointer-events-none" : null
        } ${page == 20 ? "opacity-50 pointer-events-none" : null}`}
        onClick={() => {
          page <= 19 ? setPage(page + 1) : null;
          setShowMoviesLoad(false);
          setIsDisabled(true);
        }}
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default PageList;
