import React, { useState } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import nesTheme from 'react-select-nes-css-theme';
import Select from 'react-select';

import { usePokemonTypeInput } from 'shared/hooks';
import { evaluatePokemon } from 'actions/pokemon-actions';
import { pokemonTypesSelector } from 'selectors/pokemon-selectors';
import Button from 'components/common/Button';

import styles from './styles.module.scss';

const EMPTY = { value: null, label: 'N/A' };

const optionsForSelect = (types, options = { isOptional: false }) => [
  ...(options.isOptional ? [EMPTY] : []),
  ...types.map(type => ({ value: type.id, label: type.name })),
];

const PokemonView = ({ types, onEvaluate }) => {
  const [showErrors, setShowError] = useState(false);
  const primaryType = usePokemonTypeInput();
  const secondaryType = usePokemonTypeInput(EMPTY);
  const fastAttackType = usePokemonTypeInput();
  const chargedAttackType = usePokemonTypeInput();
  const secondChargedAttackType = usePokemonTypeInput(EMPTY);

  const onSubmit = () => {
    if (primaryType.ok && fastAttackType.ok && chargedAttackType.ok) {
      onEvaluate({
        types: [primaryType.id, secondaryType.id].compact(),
        moveset: {
          fast: fastAttackType.id,
          charged: [chargedAttackType.id, secondChargedAttackType.id].compact(),
        },
      });
    } else {
      setShowError(true);
    }
  };

  return (
    <main>
      <section className={cx(styles.section, 'nes-container with-title')}>
        <h3 className="title">Pokemon types</h3>
        <form>
          <span className={styles.label}>Main type</span>
          <Select
            {...primaryType}
            styles={nesTheme}
            className={styles.select}
            placeholder="Select type.."
            options={optionsForSelect(types)}
          />
          {showErrors && !primaryType.ok && (
            <span className={styles.error}>Can&apos;t be blank</span>
          )}
          <span className={styles.label}>Secondary type</span>
          <Select
            {...secondaryType}
            options={optionsForSelect(types, { isOptional: true })}
            styles={nesTheme}
            className={styles.select}
          />
        </form>
      </section>
      <section className={cx(styles.section, 'nes-container with-title')}>
        <h3 className="title">Attack types</h3>
        <form>
          <span className={styles.label}>Fast attack&apos;s type</span>
          <Select
            {...fastAttackType}
            styles={nesTheme}
            className={styles.select}
            placeholder="Select type.."
            options={optionsForSelect(types)}
          />
          {showErrors && !fastAttackType.ok && (
            <span className={styles.error}>Can&apos;t be blank</span>
          )}
          <span className={styles.label}>Charged attack&apos;s type</span>
          <Select
            {...chargedAttackType}
            styles={nesTheme}
            className={styles.select}
            placeholder="Select type.."
            options={optionsForSelect(types)}
          />
          {showErrors && !chargedAttackType.ok && (
            <span className={styles.error}>Can&apos;t be blank</span>
          )}
          <span className={styles.label}>Second charge attack&apos;s type</span>
          <Select
            {...secondChargedAttackType}
            styles={nesTheme}
            className={styles.select}
            options={optionsForSelect(types, { isOptional: true })}
          />
        </form>
      </section>
      <section className={styles.lastSection}>
        <Button
          isSuccess
          onClick={onSubmit}
        >
          EVALUATE
        </Button>
      </section>
    </main>
  );
};

const mapStateToProps = state => ({
  types: pokemonTypesSelector(state),
});

const actions = {
  onEvaluate: evaluatePokemon,
};

export default connect(mapStateToProps, actions)(PokemonView);
