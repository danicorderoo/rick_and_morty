export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const CLOSE_CARD = "CLOSE CARD";
export const ADD_CARD = "ADD_CARD";
export const ADD_CARD_ALL = "ADD_CARD_ALL";
export const FILTER = "FILTER";
export const ORDER_MENOR = "ORDER_MENOR";
export const ORDER_MAYOR = "ORDER_MAYOR";

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
  for (let i = 1; i < 21; i++) {
    consult1 = [...consult1, i];
  }

  consult1 = [
    ...consult1,
    141,
    157,
    266,
    333,
    372,
    471,
    530,
    13,
    35,
    100,
    99,
    98,
    642,
    436,
    432,
    432,
    425,
    123,
  ];

  fetch(`https://rickandmortyapi.com/api/character/${consult1}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: ADD_CARD_ALL,
        payload: data,
      });
    });
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderMenor = () => {
  return {
    type: ORDER_MENOR,
  };
};

export const orderMayor = () => {
  return {
    type: ORDER_MAYOR,
  };
};
