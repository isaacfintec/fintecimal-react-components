"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputStrings = require("./InputStrings");

var _InputWrapper = _interopRequireDefault(require("./InputWrapper"));

var _utils = require("./commons/utils");

var _clabehelper = require("./commons/clabehelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CLABE_LENGTH = 18;

var CLABEInput = function CLABEInput(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange,
      label = _ref.label,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      type = _ref.type,
      required = _ref.required;

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      mValue = _useState2[0],
      setValue = _useState2[1];

  var mHandleChange = function mHandleChange(newValue) {
    setValue(newValue);
    handleChange(value);

    if (!(0, _utils.isEmpty)(newValue) && isValid(newValue)) {
      var currentLabel = mConfig.label;
      setConfig(_objectSpread2({}, mConfig, {
        label: "".concat(currentLabel, " ").concat((0, _clabehelper.getBank)(newValue))
      }));
    }
  };

  var _useState3 = (0, _react.useState)({
    type: type,
    label: label,
    value: value,
    format: _utils.textFormats.NUMBER,
    required: required,
    handleChange: mHandleChange
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      mConfig = _useState4[0],
      setConfig = _useState4[1];

  (0, _react.useEffect)(function () {
    setValue(value);
  }, [value]);
  var errors = {
    error: error,
    errorMessage: errorMessage,
    errorMessages: _InputStrings.clabe.errorMessages
  };

  var isValid = function isValid(data) {
    if ((0, _utils.isEmpty)(data) && !required) return true;
    var size = data.length;

    if (size === CLABE_LENGTH) {
      return (0, _clabehelper.validateClabe)(data);
    } else {
      return false;
    }
  };

  return _react.default.createElement(_InputWrapper.default, {
    config: mConfig,
    errors: errors,
    isValid: isValid
  });
};

CLABEInput.defaultProps = {
  label: _InputStrings.clabe.label,
  type: _InputStrings.clabe.type,
  error: false,
  errorMessage: '',
  required: false
};
CLABEInput.propTypes = {
  label: _propTypes.default.string,
  type: _propTypes.default.string,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  required: _propTypes.default.bool
};
var _default = CLABEInput;
exports.default = _default;