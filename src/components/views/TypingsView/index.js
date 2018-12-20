import React from 'react';
import cx from 'classnames';
import nesTheme from 'react-select-nes-css-theme';
import Select from 'react-select';

import styles from './styles.module.scss';

const EMPTY = { value: null, label: 'N/A' };

const TypingsView = () => (
  <main>
    <section className={cx(styles.section, 'nes-container with-title')}>
      <h3 className="title">Pokemon types</h3>
      <form>
        <span className={styles.label}>Main type</span>
        <Select
          styles={nesTheme}
          className={styles.select}
          placeholder="Select type.."
        />
        <span className={styles.label}>Secondary type</span>
        <Select
          styles={nesTheme}
          className={styles.select}
          value={EMPTY}
        />
      </form>
    </section>
    <section className={cx(styles.section, 'nes-container with-title')}>
      <h3 className="title">Attack types</h3>
      <form>
        <span className={styles.label}>Fast attack&apos;s type</span>
        <Select
          styles={nesTheme}
          className={styles.select}
          placeholder="Select type.."
        />
        <span className={styles.label}>Charged attack&apos;s type</span>
        <Select
          styles={nesTheme}
          className={styles.select}
          placeholder="Select type.."
        />
        <span className={styles.label}>Second charge attack&apos;s type</span>
        <Select
          styles={nesTheme}
          className={styles.select}
          value={EMPTY}
        />
      </form>
    </section>
  </main>
);

export default TypingsView;
