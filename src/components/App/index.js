import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { object } from 'prop-types';

import Setup from 'components/common/Setup';
import Header from 'components/common/Header';
import PokemonView from 'components/views/PokemonView';
import PokemonEvaluationView from 'components/views/PokemonEvaluationView';
import EncounterView from 'components/views/EncounterView';
import {
  rootPath,
  pokemonPath,
  pokemonEvaluationPath,
  encounterPath,
} from 'shared/routes';

const App = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <Route path={rootPath()} component={Setup} />
        <Route path={rootPath()} component={Header} />
        <Route exact path={rootPath()} render={() => <Redirect to={pokemonPath()} />} />
        <Route exact path={pokemonPath()} component={PokemonView} />
        <Route exact path={pokemonEvaluationPath()} component={PokemonEvaluationView} />
        <Route exact path={encounterPath()} component={EncounterView} />
      </Fragment>
    </ConnectedRouter>
  </Provider>
);

App.propTypes = {
  store: object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
