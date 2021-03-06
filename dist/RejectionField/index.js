"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _RejectActions = _interopRequireDefault(require("../nodes/RejectActions"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RejectionField = function RejectionField(_ref) {
  var field = _ref.field,
      onReject = _ref.onReject,
      rejectionOptions = _ref.rejectionOptions,
      rejectionData = _ref.rejectionData,
      rejected = _ref.rejected;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)('none'),
      _useState2 = _slicedToArray(_useState, 2),
      forceDisplay = _useState2[0],
      setForceDisplay = _useState2[1];

  var keep = function keep() {
    setForceDisplay('inline-block');
  };

  var leave = function leave() {
    setForceDisplay('none');
  };
  /**
   * @returns {String}
   */


  var getRejectionActionsDisplay = function getRejectionActionsDisplay() {
    return rejected ? 'inline-block' : forceDisplay;
  };

  return _react.default.createElement(_List.default, {
    className: (0, _classnames2.default)(classes.list, _defineProperty({}, classes.listBorder, rejected && forceDisplay === 'inline-block'))
  }, _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_ListItemText.default, {
    primary: field.key
  }), _react.default.createElement(_ListItemSecondaryAction.default, null, _react.default.createElement("div", {
    className: classes.listItemSecondaryContainer
  }, _react.default.createElement("div", {
    className: classes.listItemSecondaryText
  }, field.value), _react.default.createElement("div", {
    className: classes.rejectionActions,
    style: {
      display: getRejectionActionsDisplay()
    }
  }, _react.default.createElement(_RejectActions.default, {
    rejectionOptions: rejectionOptions,
    rejected: rejected,
    handlerReject: onReject,
    rejectionData: rejectionData,
    onOpen: keep,
    onClose: leave,
    size: "small"
  }))))));
};

RejectionField.propTypes = {
  field: _propTypes.default.shape({
    key: _propTypes.default.string,
    value: _propTypes.default.string
  }),
  onReject: _propTypes.default.func,
  rejectionOptions: _propTypes.default.array,
  rejectionData: _propTypes.default.shape({
    name: _propTypes.default.string,
    image: _propTypes.default.string,
    date: _propTypes.default.instanceOf(Date),
    reason: _propTypes.default.string,
    comments: _propTypes.default.string
  })
};
RejectionField.defaultProps = {
  field: {
    key: '',
    value: ''
  },
  onReject: function onReject() {},
  rejectionOptions: [],
  rejectionData: {
    name: '',
    image: '',
    date: new Date(),
    reason: '',
    comments: ''
  },
  rejected: false
};
var _default = RejectionField;
exports.default = _default;