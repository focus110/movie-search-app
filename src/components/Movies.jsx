import React, { useContext } from "react";
import MovieContext from "../context/movies/movieContext";
import MovieItem from "./MovieItem";

const Movies = () => {
  const movieContext = useContext(MovieContext);
  const { movies } = movieContext;
  return (
    <div className="wrapper space-y-8 pb-8">
      <div>
        <h2 className="pb-4 font-normal text-[24px] text-black">
          First category
        </h2>
        <div className="w-full h-full space-x-4 overflow-x-scroll whitespace-nowrap scrollbar-hide">
          {movies?.map((item, i) => {
            return <MovieItem key={i} item={item} />;
          })}
        </div>
      </div>{" "}
      <div>
        <h2 className="pb-4 font-normal text-[24px] text-black">
          Second category
        </h2>
        <div className="w-full h-full space-x-4 overflow-x-scroll whitespace-nowrap scrollbar-hide">
          {movies?.map((item, i) => {
            return <MovieItem key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Movies;
