import React from "react";

const MovieItem = ({ item, i }) => {
  return (
    <div
      key={i}
      className="bg-black rounded-[12px] w-[330px] h-[300px] inline-block cursor relative p-2"
    >
      <img className="w-full h-auto block" src={``} alt={item.title} />
      {/* <div className="absolute top-0 left-0 rounded-[12px] w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title + "Title"}
        </p>
        <p></p>
      </div> */}

      <div className="absolute top-0 left-0 rounded-[12px] w-full h-full hover:bg-black/80  text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title ?? "Movie Name"}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
