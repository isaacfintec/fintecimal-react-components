/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import ButtonMaterial from '@material-ui/core/Button';
import classnames from 'classnames';

import useStyles from './style';

const ButtonSecondary = ({
  children,
  className,
  text,
  ...props
}) => {
  const classes = useStyles();
  return (
    <ButtonMaterial
      variant="outlined"
      className={classnames(classes.button, className)}
      {...props}
    >
      { children || text }
    </ButtonMaterial>
  );
};

ButtonSecondary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  text: PropTypes.string,
};

ButtonSecondary.defaultProps = {
  children: '',
  className: '',
  text: '',
};

export default ButtonSecondary;
