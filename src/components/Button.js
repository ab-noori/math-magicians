import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, text, onClick }) => (
  <button type="button" className={`btn ${className}`} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
