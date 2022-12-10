import React, { useReducer } from "react";
import movieContext from "./movieContext";
import movieReducer from "./movieReducer";
import {
  GET_MOVIES,
  CLEAR_MOVIES,
  FILTER_MOVIES,
  CLEAR_FILTER,
  MOVIE_ERROR,
} from "../types";
import axios from "axios";

const MovieState = (props) => {
  const initialState = {
    movies: [],
    filtered: [],
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(movieReducer, initialState);

  const baseUrl = "http://img.omdbapi.com/";
  const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;

  // Get Movies
  const getMovies = async () => {
    try {
      const res = await axios.get(`${baseUrl}api/contacts`);
      dispatch({ type: GET_MOVIES, payload: res.data });
    } catch (err) {
      dispatch({ type: MOVIE_ERROR, payload: err.response.msg });
    }
  };

  // Clear Movies
  const clearMovies = () => {
    dispatch({ type: CLEAR_MOVIES });
  };

  // Filter Contacts
  const filterMovies = (text) => {
    dispatch({ type: FILTER_MOVIES, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <movieContext.Provider
      value={{
        movies: state.contacts,
        filtered: state.filtered,
        error: state.error,
        filterMovies,
        clearFilter,
        getMovies,
        clearMovies,
      }}
    >
      {props.children}
    </movieContext.Provider>
  );
};

export default MovieState;