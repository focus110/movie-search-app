import React, { useContext, useState } from "react";
import MovieContext from "../context/movies/movieContext";

const Search = () => {
  const [search, setSearch] = useState("");
  const movieContext = useContext(MovieContext);
  const { getMovies, movies } = movieContext;

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getMovies(search);
  };

  return (
    <div className="wrapper pt-12 pb-8">
      <form onSubmit={onSubmit}>
        <div className="">
          <label
            htmlFor="search"
            className="text-black font-normal text-[24px]"
          >
            Search
          </label>
          <input
            className="border w-full hover:outline-none border-black py-1.5 px-8"
            name="search"
            onChange={onChange}
            value={search}
            placeholder=""
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
