import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormControl, OutlinedInput, InputLabel, makeStyles, InputAdornment, IconButton } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import '../styles/BaseInput.css';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: theme.spacing(1),
    },
    label: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 14,
      fontWeight: 600,
      opacity: 1,
      color: 'gray'
    },
    input: {
      paddingTop: 25,
      paddingBottom: 12
    },
    notchedOutline: {
      borderWidth: 2,
      borderColor: 'lightgray',
      opacity: 0.7,
    },
    focusNotchedOutline: {
      borderWidth: 3,
      borderColor: '#0099ff',
      opacity: 1,
    },
    asterisk: {
      color: 'red',
      fontSize: 11,
      verticalAlign: 'super'
    }
}));

const BaseInput = ({ label, value, handleChange, required, error, errorMessage, type, clear }) => {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState(value);

    const handleClear = () => {
      setInputValue('');
    };

    const compHandleChange = event => {
      const { target } = event;
      setInputValue(target.value);
    };

    useEffect(() => {
      handleChange(inputValue);
    }, [inputValue]);

    return (
      <FormControl
      className={classes.root}
      margin="normal"
      required={required}
      error={error}>
        <InputLabel
        className={classes.label}
        htmlFor="component-simple"
        variant="filled"
        classes={{
          asterisk: classes.asterisk,
        }}
        >{(error && errorMessage) || label}
        </InputLabel>
        <OutlinedInput 
        id="component-simple"
        value={inputValue}
        onChange={compHandleChange}
        endAdornment={ clear && 
        <InputAdornment position="end">
          <IconButton
            aria-label="clear input"
            onClick={handleClear}
          >
            <Clear/>
          </IconButton>
        </InputAdornment>}
        inputProps={{
          className: classes.input,
        }}
        classes={{
          notchedOutline: classes.notchedOutline,
          focused: classes.focusNotchedOutline,
        }}
        type={type}
        />
      </FormControl>
    );
};

BaseInput.defaultProps = {
    value: '',
    required: false,
    error: false,
    type: 'text',
    clear: true,
    errorMessage: ''
};

BaseInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    required: PropTypes.bool,
    error: PropTypes.bool,
    type: PropTypes.string,
    clear: PropTypes.bool,
    errorMessage: PropTypes.string,
};

export default BaseInput;