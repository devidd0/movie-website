import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, NavLink } from "react-router-dom";
import { MainContext } from "../MainContext";
import SearchFilmItem from "./SearchFilmItem";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const {
    searchInputVal,
    setSearchInputVal,
    querySearchRequest,
    searchBarVisible,
    setSearchBarVsible,
  } = useContext(MainContext);
  const [searchResult, setSearchResult] = useState([]);
  const handleSearch = (e) => {
    setSearchInputVal(e.target.value);
    setSearchBarVsible(true);
  };

  useEffect(() => {
    fetch(querySearchRequest)
      .then((res) => res.json())
      .then((data) => setSearchResult(data.results));
    if (!searchInputVal) {
      setSearchBarVsible(false);
    }
  }, [searchInputVal]);
  return (
    <div className="bg-[#222] text-gray-300 w-full h-16 flex items-center lg:px-20 px-10 justify-between">
      <Helmet>
        <title>Discover Films</title>
      </Helmet>
      <Link
        className="lg:text-2xl text-xl font-semibold mr-4 hidden lg:block flex-shrink-0"
        to="/"
      >
        Film Site
      </Link>
      <div className="relative">
        <input
          type="text"
          onChange={handleSearch}
          className="border-2 rounded border-gray-300 focus:border-indigo-300 text-center lg:px-10 px-5 outline-none text-white bg-transparent lg:w-[35rem] h-10"
          placeholder="Search your favorite Films"
        />
        <div
          className={`absolute ${
            searchBarVisible ? "block" : "hidden"
          } lg:left-1/2 lg:-translate-x-1/2 z-50 p-5 bg-[#333] mt-4 -right-20 rounded border-2 w-[20rem] mr-4 lg:w-[35rem] h-[35rem] transition-all overflow-hidden hover:overflow-auto`}
        >
          {searchResult &&
            searchResult.map((searchFilm, key) => (
              <SearchFilmItem {...searchFilm} key={key} />
            ))}
        </div>
      </div>
      <div
        className="block lg:hidden ml-6 text-3xl"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <AiOutlineMenu />
      </div>
      <ul
        className={`absolute top-14 lg:static transition-all lg:flex-row flex-col lg:bg-transparent lg:leading-none leading-10 left-0 w-full h-full z-50 bg-[#333] flex items-center justify-center lg:ml-20  ${
          mobileMenu ? "scale-100" : "scale-0"
        }`}
      >
        <NavLink
          onClick={() => {
            setMobileMenu(false);
          }}
          to="/"
          exact
          activeStyle={{ color: "red" }}
          className="font-semibold transition-all hover:text-white hover:border-b-2 mx-4"
        >
          Discover Film
        </NavLink>
        <NavLink
          onClick={() => {
            setMobileMenu(false);
          }}
          to="/about"
          activeStyle={{ color: "red" }}
          className="font-semibold transition-all hover:text-white hover:border-b-2 mx-4"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => {
            setMobileMenu(false);
          }}
          to="/topfilms"
          activeStyle={{ color: "red" }}
          className="font-semibold transition-all hover:text-white hover:border-b-2 mx-4"
        >
          Top Rated Films
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
