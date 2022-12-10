import React from "react";

const MovieItem = ({ item, i }) => {
  return (
    <div
      key={i}
      className="bg-black rounded-[12px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] inline-block cursor relative"
    >
      <img
        className="rounded-[12px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover"
        src={item?.Poster}
        alt={item.Title}
      />
      {/* <div className="absolute top-0 left-0 rounded-[12px] w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title + "Title"}
        </p>
        <p></p>
      </div> */}

      <div className="absolute top-0 left-0 rounded-[12px] w-full h-full hover:bg-black/80  text-white">
        <p className="white-space-normal text-[18px] md:text-[24px] font-normal flex justify-center items-center h-full text-center">
          {item?.Title ?? "Movie Name"}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
