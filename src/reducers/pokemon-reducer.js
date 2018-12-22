import {
  FETCH_POKEMON_TYPES_SUCCESS,
  EVALUATE_POKEMON_SUCCESS,
} from 'actions/pokemon-actions';

const initialState = {
  types: [],
  pokemon: null,
  evaluation: null,
};

const pokemon = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POKEMON_TYPES_SUCCESS:
      return {
        ...state,
        types: payload.types,
      };
    case EVALUATE_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: payload.pokemon,
        evaluation: payload.evaluation,
      };
    default:
      return state;
  }
};

export default pokemon;
