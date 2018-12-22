import { useEffect } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import { fetchTypes } from 'actions/pokemon-actions';

const Setup = ({ fetchPokemonTypes }) => {
  useEffect(() => {
    fetchPokemonTypes();
  });

  return null;
};

Setup.propTypes = {
  fetchPokemonTypes: func.isRequired,
};

const actions = {
  fetchPokemonTypes: fetchTypes,
};

export default connect(null, actions)(Setup);
