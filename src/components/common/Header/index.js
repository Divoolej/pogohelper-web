import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import cx from 'classnames';

import { pokemonPath, encounterPath } from 'shared/routes';
import Button from 'components/common/Button';

import styles from './styles.module.scss';

const Header = ({ location: { pathname } }) => (
  <nav className={cx(styles.container, 'nes-container with-title')}>
    <h2 className="title">Navigation</h2>
    <div className={styles.navigation}>
      <Link className={styles.link} to={pokemonPath()}>
        <Button
          className={styles.button}
          isPrimary={pathname === pokemonPath()}
        >
          Evaluate Pokemon types
        </Button>
      </Link>
      <Link className={styles.link} to={encounterPath()}>
        <Button
          className={styles.button}
          isPrimary={pathname === encounterPath()}
        >
          Evaluate a Pokemon encounter
        </Button>
      </Link>
    </div>
  </nav>
);

Header.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(Header);
