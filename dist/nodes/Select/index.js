"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _utils = require("../../commons/utils");

var _LongPlaceHolder = _interopRequireDefault(require("../../LongPlaceHolder"));

var _LongError = _interopRequireDefault(require("../../LongError"));

var _InputStrings = require("../../InputStrings");

var _style = _interopRequireDefault(require("./style"));

require("../../styles/BaseInput.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var isCategory = function isCategory(option) {
  return option.children && option.children.length > 0;
};

var getClassByStatus = function getClassByStatus(inputStatus, classes) {
  switch (inputStatus) {
    case _utils.status.FOCUS:
      return classes.focus;

    case _utils.status.ERROR:
      return classes.error;

    default:
      return classes.normal;
  }
};

var SelectInput = function SelectInput(_ref) {
  var label = _ref.label,
      value = _ref.value,
      handleChange = _ref.handleChange,
      required = _ref.required,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      options = _ref.options,
      placeholder = _ref.placeholder;
  var classes = (0, _style.default)();
  var inputLabel = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      labelWidth = _useState2[0],
      setLabelWidth = _useState2[1];

  var errorMessages = _InputStrings.list.errorMessages,
      defaultPlaceHolder = _InputStrings.list.label;

  var _useState3 = (0, _react.useState)(value),
      _useState4 = _slicedToArray(_useState3, 2),
      mValue = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0, _react.useState)(error),
      _useState6 = _slicedToArray(_useState5, 2),
      mError = _useState6[0],
      setError = _useState6[1];

  var _useState7 = (0, _react.useState)(errorMessage),
      _useState8 = _slicedToArray(_useState7, 2),
      mErrorMessage = _useState8[0],
      setErrorMessage = _useState8[1];

  var _useState9 = (0, _react.useState)(_utils.status.NORMAL),
      _useState10 = _slicedToArray(_useState9, 2),
      mStatus = _useState10[0],
      setStatus = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      mOpen = _useState12[0],
      setOpen = _useState12[1];

  var renderItem = function renderItem(info) {
    var name = info.name,
        index = info.index,
        _info$category = info.category,
        category = _info$category === void 0 ? true : _info$category,
        _info$parentName = info.parentName,
        parentName = _info$parentName === void 0 ? '' : _info$parentName;
    return _react.default.createElement(_core.MenuItem, {
      disabled: category,
      key: "".concat(parentName, "_").concat(name, "_").concat(index),
      className: category ? classes.category : classes.item,
      value: parentName ? "".concat(parentName, " - ").concat(name) : name,
      classes: {
        disabled: classes.disabled
      }
    }, name);
  };

  var selectLabel = function selectLabel() {
    if (mError) {
      if ((0, _utils.isTextLong)(mErrorMessage)) {
        if ((0, _utils.isTextLong)(label)) return defaultPlaceHolder;
        return label;
      }

      return mErrorMessage;
    } else {
      if ((0, _utils.isTextLong)(label)) return defaultPlaceHolder;
      return label;
    }
  };

  var open = function open() {
    setOpen(true);
  };

  var close = function close() {
    setOpen(false);
  };

  var renderChildren = function renderChildren(children, items) {
    var parentName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    children.map(function (child, index) {
      var name = child.name,
          children = child.children;
      var info = {
        name: name,
        index: index,
        parentName: parentName
      };

      if (isCategory(child)) {
        items.push(renderItem(info));
        return renderChildren(children, items, name);
      }

      var newInfo = _objectSpread2({}, info, {
        category: false
      });

      items.push(renderItem(newInfo));
    });
  };

  var renderPlaceholder = function renderPlaceholder(_ref2) {
    var name = _ref2.name;
    return _react.default.createElement(_core.MenuItem, {
      disabled: true,
      key: "placeholder_".concat(name, "_-1"),
      className: classes.item,
      value: ""
    }, name);
  };

  var renderOptions = function renderOptions(listOptions) {
    var items = [];
    if (placeholder) items.push(renderPlaceholder({
      name: placeholder
    }));
    renderChildren(listOptions, items);
    return items;
  };

  var mHandleChange = function mHandleChange(event) {
    var value = event.target.value;
    handleChange(value);
    setError(false);
    setValue(value);
    setStatus(_utils.status.NORMAL);
  };

  var mOnFocus = function mOnFocus() {
    setStatus(_utils.status.FOCUS);
  };

  var mOnBlur = function mOnBlur() {
    var empty = errorMessages.empty;

    if ((0, _utils.isEmpty)(mValue) && required) {
      setError(true);
      setErrorMessage(empty);
    } else {
      setError(false);
    }

    setStatus(_utils.status.NORMAL);
  };

  (0, _react.useEffect)(function () {
    setValue(value);
    setLabelWidth(inputLabel.current.offsetWidth);
  }, [value]);
  return _react.default.createElement("div", {
    className: classes.root
  }, (0, _utils.isTextLong)(label) && _react.default.createElement("div", null, _react.default.createElement(_LongPlaceHolder.default, {
    text: label
  })), _react.default.createElement(_core.FormControl, {
    className: classes.form,
    required: required,
    error: mError,
    variant: "outlined"
  }, _react.default.createElement(_core.InputLabel, {
    ref: inputLabel,
    htmlFor: "component-simple",
    classes: {
      root: classes.inputContainer,
      asterisk: classes.asterisk
    }
  }, selectLabel()), _react.default.createElement(_core.Select, {
    labelWidth: labelWidth,
    renderValue: function renderValue() {
      return mValue || placeholder;
    },
    value: mValue,
    onChange: mHandleChange,
    onBlur: mOnBlur,
    onFocus: mOnFocus,
    onOpen: open,
    onClose: close,
    IconComponent: mOpen ? _icons.KeyboardArrowUp : _icons.KeyboardArrowDown,
    classes: {
      icon: classes.icon
    },
    MenuProps: {
      getContentAnchorEl: null,
      classes: {
        paper: mError ? getClassByStatus(_utils.status.ERROR, classes) : getClassByStatus(mStatus, classes)
      }
    },
    input: _react.default.createElement(_core.OutlinedInput, {
      inputProps: {
        className: classes.input
      },
      classes: {
        notchedOutline: classes.notchedOutline,
        focused: classes.focusNotchedOutline,
        root: classes.inputContainer
      }
    })
  }, renderOptions(options))), mError && (0, _utils.isTextLong)(mErrorMessage) && _react.default.createElement(_LongError.default, {
    text: mErrorMessage
  }));
};

SelectInput.defaultProps = {
  value: '',
  required: false,
  error: false,
  type: 'text',
  clear: true,
  errorMessage: '',
  placeholder: ''
};
SelectInput.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  required: _propTypes.default.bool,
  error: _propTypes.default.bool,
  clear: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  handleChange: _propTypes.default.func.isRequired,
  placeholder: _propTypes.default.string
};
var _default = SelectInput;
exports.default = _default;