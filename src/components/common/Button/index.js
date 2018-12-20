import React from 'react';
import cx from 'classnames';
import {
  string,
  bool,
  node,
  func,
} from 'prop-types';

const Button = ({
  className,
  isPrimary,
  children,
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={cx(className, 'nes-btn', { 'is-primary': isPrimary })}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: string,
  isPrimary: bool,
  children: node,
  onClick: func,
};

Button.defaultProps = {
  className: '',
  isPrimary: false,
  children: null,
  onClick: null,
};

export default Button;
