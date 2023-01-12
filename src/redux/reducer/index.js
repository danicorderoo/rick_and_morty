import Swal from "sweetalert2";
import styles from "./reducer.module.css";
import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  CLOSE_CARD,
  ADD_CARD,
  ADD_CARD_ALL,
  FILTER,
  ORDER_MENOR,
  ORDER_MAYOR,
} from "../actions";

const initialState = {
  myFavorites: [],
  myCharacters: [],
  allCharacters: [],
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
    case CLOSE_CARD: {
      return {
        ...state,
        myCharacters: state.myCharacters.filter(
          (character) => character.id !== action.payload
        ),
      };
    }

    case ADD_CARD:
      if (!action.payload.name) {
        Swal.fire({
          customClass: styles.alert,
          position: "top",
          icon: "warning",
          title: "¡MATEMÁTICAS!",
          timer: 6000,
          timerProgressBar: true,
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          html: `
          <h3>No existe ese ID en la <a href="https://rickandmortyapi.com/documentation/#character" target="_blank">API</a></h3>`,
          backdrop: `
            rgba(32, 35, 41, 0.7)
            url("http://www.animated-gifs.fr/category_cartoons/rick-morty/rick-and-morty-65285982.gif")
            right bottom
            no-repeat
          `,
        });
        return state;
      }

      for (let i = 0; i < state.myCharacters.length; i++) {
        const element = state.myCharacters[i];
        // eslint-disable-next-line eqeqeq
        if (element.id === action.payload.id) {
          Swal.fire({
            customClass: styles.alert,
            position: "top",
            icon: "warning",
            title: "¡Solo es Ciencia Amigo!",
            timer: 6000,
            timerProgressBar: true,
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            html: `
            <h3>Ya existe un personaje con ese ID</h3>`,
            backdrop: `
              rgba(32, 35, 41, 0.7)
              url("http://www.animated-gifs.fr/category_cartoons/rick-morty/rick-and-morty-97953505.gif")
              left bottom
              no-repeat
            `,
          });
          return state;
        }
      }

      Swal.fire({
        width: 0,
        showConfirmButton: false,
        timer: 1050,
        backdrop: `
          url("http://www.animated-gifs.fr/category_cartoons/rick-morty/rick-and-morty-90632132.gif")
          center center
          no-repeat
        `,
      });
      return {
        ...state,
        myCharacters: [...state.myCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case ADD_CARD_ALL:
      Swal.fire({
        width: 0,
        showConfirmButton: false,
        timer: 1050,
        backdrop: `
          url("http://www.animated-gifs.fr/category_cartoons/rick-morty/rick-and-morty-90632132.gif")
          center center
          no-repeat
        `,
      });
      return {
        ...state,
        myCharacters: [...action.payload],
        allCharacters: [...action.payload],
      };

    case FILTER:
      if (action.payload === "All") {
        return {
          ...state,
          myCharacters: state.allCharacters,
        };
      }

      return {
        ...state,
        myCharacters: state.allCharacters.filter(
          (character) => character.gender.toString() === action.payload
        ),
      };

    case ORDER_MENOR:
      return {
        ...state,
        myFavorites: state.myFavorites.sort((a, b) => a.id - b.id),
      };

    case ORDER_MAYOR:
      return {
        ...state,
        myFavorites: state.myFavorites.sort((a, b) => b.id - a.id),
      };

    default:
      return state;
  }
};

export default rootReducer;
