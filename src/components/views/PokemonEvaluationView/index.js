import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { shape, arrayOf, string, number } from 'prop-types';
import cx from 'classnames';

import { pokemonPath } from 'shared/routes';
import { evaluatedPokemonSelector, pokemonEvaluationSelector } from 'selectors/pokemon-selectors';

import styles from './styles.module.scss';

const PokemonEvaluationView = ({ pokemon, evaluation }) => (
  !pokemon || !evaluation ? (
    <Redirect to={pokemonPath()} />
  ) : (
    <main>
      <section className={cx(styles.section, 'nes-container with-title')}>
        <h3 className="title">Summary</h3>
        <span>
          Evaluation for a Pokemon of
          {pokemon.types.length > 1 ? ' types: ' : ' type: '}
        </span>
        <span className="uppercase">{pokemon.types.join(' / ')}</span>
        <br />
        <span>With a fast move of type: </span>
        <span className="uppercase">{pokemon.moveset.fast}</span>
        <br />
        <span>
          {pokemon.moveset.charged.length > 1
            ? 'And charged moves of types: '
            : 'And a charged move of type: '
          }
        </span>
        <span className="uppercase">{pokemon.moveset.charged.join(' & ')}</span>
      </section>
      <section className={cx(styles.section, 'nes-container with-title')}>
        <h3 className="title">Evaluation</h3>
        <div className="nes-table-responsive">
          <table className="nes-table is-bordered is-centered">
            <thead>
              <tr>
                <th>Score</th>
                <th>VS</th>
                <th>DMG dealt multiplier</th>
                <th>DMG received multiplier</th>
                <th>Fast Move</th>
                <th>Charged Move</th>
              </tr>
            </thead>
            <tbody>
              {evaluation.map(matchup => (
                <tr>
                  <td>{matchup.score}</td>
                  <td className="uppercase">{[matchup.against.primary, matchup.against.secondary].compact().join(' / ')}</td>
                  <td>{`${matchup.dmgDealt.fast} (fast) / ${matchup.dmgDealt.charged} (charged)`}</td>
                  <td>
                    {matchup.against.secondary ? (
                      <Fragment>
                        {matchup.dmgReceived.primary}
                        <span className="uppercase">{` (vs ${matchup.against.primary}) / `}</span>
                        {matchup.dmgReceived.secondary}
                        <span className="uppercase">{` (vs ${matchup.against.secondary}) `}</span>
                      </Fragment>
                    ) : (
                      <span className="uppercase">{matchup.dmgReceived.primary}</span>
                    )}
                  </td>
                  <td className="uppercase">{matchup.moveset.fast}</td>
                  <td className="uppercase">{matchup.moveset.charged}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
);

PokemonEvaluationView.propTypes = {
  pokemon: shape({ // TODO: Refactor to prop-types.js
    types: arrayOf(string).isRequired,
    moveset: shape({
      fast: string.isRequired,
      charged: arrayOf(string).isRequired,
    }),
  }).isRequired,
  evaluation: arrayOf(shape({ // TODO: Refactor to prop-types.js
    score: number.isRequired,
    against: shape({
      primary: string.isRequired,
      secondary: string,
    }),
    dmgDealt: shape({
      fast: number.isRequired,
      charged: number.isRequired,
    }),
    dmgReceived: shape({
      primary: number.isRequired,
      secondary: number,
    }),
    moveset: {
      fast: string.isRequired,
      charged: string.isRequired,
    },
  })).isRequired,
};

const mapStateToProps = state => ({
  pokemon: evaluatedPokemonSelector(state),
  evaluation: pokemonEvaluationSelector(state),
});

export default connect(mapStateToProps)(PokemonEvaluationView);
