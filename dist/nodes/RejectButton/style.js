"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _default = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      paddingTop: 10
    },
    icon: {
      transform: 'scale(-1, 1)'
    },
    badge: {
      color: theme.palette.status.success.main,
      marginBottom: 20,
      cursor: 'pointer'
    },
    button: {
      marginTop: 10,
      backgroundColor: '#979797'
    },
    buttonLarge: {
      height: 48,
      width: 48
    },
    buttonSmall: {
      width: '24px',
      height: '24px',
      minHeight: '24px',
      '& > span > svg': {
        fontSize: '1em'
      }
    },
    disabled: {
      '&:hover': {
        backgroundColor: '#676767'
      },
      backgroundColor: '#676767',
      cursor: 'auto'
    },
    noteOpen: {
      color: '#676767'
    },
    hover: {
      '&:hover': {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.status.danger.main,
        color: theme.palette.status.danger.main,
        boxShadow: '0 24px 38px 3px rgba(0,0,0,0.14)'
      }
    }
  };
});

exports.default = _default;