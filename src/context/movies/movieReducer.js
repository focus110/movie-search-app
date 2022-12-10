import {
  GET_MOVIES,
  CLEAR_MOVIES,
  FILTER_MOVIES,
  CLEAR_FILTER,
  MOVIE_ERROR,
} from "../types";

const contact = (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };

    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
        filtered: [],
        error: null,
        loading: false,
      };

    case FILTER_MOVIES:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default contact;
