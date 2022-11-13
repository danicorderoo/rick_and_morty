import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_FAVORITE: {
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    }
    case DELETE_FAVORITE: {
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
