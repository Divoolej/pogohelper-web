import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import cx from 'classnames';

import { typesPath, encountersPath } from 'shared/routes';
import Button from 'components/common/Button';

import styles from './styles.module.scss';

const Header = ({ location: { pathname } }) => (
  <nav className={cx(styles.container, 'nes-container with-title')}>
    <h2 className="title">Navigation</h2>
    <div className={styles.navigation}>
      <Link className={styles.link} to={typesPath()}>
        <Button
          className={styles.button}
          isPrimary={pathname === typesPath()}
        >
          Evaluate Pokemon types
        </Button>
      </Link>
      <Link className={styles.link} to={encountersPath()}>
        <Button
          className={styles.button}
          isPrimary={pathname === encountersPath()}
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
