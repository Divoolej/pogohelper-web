import { push } from 'connected-react-router';

import { apiFetchPokemonTypes, apiEvaluatePokemon } from 'shared/api';
import { pokemonEvaluationPath } from 'shared/routes';

export const FETCH_POKEMON_TYPES_SUCCESS = 'FETCH_POKEMON_TYPES_SUCCESS';
export const EVALUATE_POKEMON_SUCCESS = 'EVALUATE_POKEMON_TYPES_SUCCESS';

export const fetchTypes = () => dispatch => (
  apiFetchPokemonTypes().then(response => dispatch({
    type: FETCH_POKEMON_TYPES_SUCCESS,
    payload: {
      types: response.data,
    },
  }))
);

export const evaluatePokemon = pokemon => dispatch => (
  apiEvaluatePokemon(pokemon)
    .then(response => dispatch({
      type: EVALUATE_POKEMON_SUCCESS,
      payload: {
        pokemon: response.data.pokemon,
        evaluation: response.data.evaluation,
      },
    }))
    .then(() => dispatch(push(pokemonEvaluationPath())))
);
