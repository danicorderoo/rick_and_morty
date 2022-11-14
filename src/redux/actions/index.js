export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const CLOSE_CARD = "CLOSE CARD";
export const ADD_CARD = "ADD_CARD";
export const ADD_CARD_ALL = "ADD_CARD_ALL";

export const addFavorite = (character) => {
  return {
    type: ADD_FAVORITE,
    payload: character,
  };
};

export const deleteFavorite = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
};

export const closeCard = (id) => {
  return {
    type: CLOSE_CARD,
    payload: id,
  };
};

export const addCard = (id) => (dispatch) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((data) => data.json())
    .then((data) =>
      dispatch({
        type: ADD_CARD,
        payload: data,
      })
    );
};

export const addAll = () => (dispatch) => {
  let consult1 = [];
  for (let i = 1; i < 101; i++) {
    consult1 = [...consult1, i];
  }

  fetch(`https://rickandmortyapi.com/api/character/${consult1}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: ADD_CARD_ALL,
        payload: data,
      });
    });
};
