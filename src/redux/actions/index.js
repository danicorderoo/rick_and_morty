export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

export const addFavorite = (character) => {
  return {
    type: ADD_FAVORITE,
    payload: character,
  };
};

export const delteFavorite = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
};
