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
  isSuccess,
  children,
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={cx(className, 'nes-btn', {
      'is-primary': isPrimary,
      'is-success': isSuccess,
    })}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: string,
  isPrimary: bool,
  isSuccess: bool,
  children: node,
  onClick: func,
};

Button.defaultProps = {
  className: '',
  isPrimary: false,
  isSuccess: false,
  children: null,
  onClick: null,
};

export default Button;
