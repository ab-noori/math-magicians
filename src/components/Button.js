import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, text }) => (
  <button type="button" className={`btn ${className}`}>
    {text}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
