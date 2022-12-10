import React from "react";
import MovieItem from "./MovieItem";

const Movies = () => {
  const movies = [{}, {}, {}, {}, {}, {}];
  return (
    <div className="wrapper">
      <div>
        <h2 className="pb-4 font-normal text-[24px] text-black">
          First category
        </h2>
        <div className="w-full h-full space-x-4 overflow-x-scroll whitespace-nowrap scrollbar-hide">
          {movies.map((item, i) => {
            return <MovieItem key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Movies;
