import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="wrapper py-16">
      <form onSubmit={onSubmit}>
        <div className="">
          <label htmlFor="search" className="text-black">
            Search
          </label>
          <input
            className="border w-full hover:outline-none border-black py-1.5"
            name="search"
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
