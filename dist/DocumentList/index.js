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

var _Done = _interopRequireDefault(require("@material-ui/icons/Done"));

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _HeaderCollapse = _interopRequireDefault(require("../HeaderCollapse"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DocumentList = function DocumentList(_ref) {
  var title = _ref.title,
      documents = _ref.documents,
      onClickDocument = _ref.onClickDocument,
      onDownload = _ref.onDownload;
  var clasess = (0, _style.default)();
  /**
   *
   * @param {Object} document
   */

  var handleOnClickDocument = function handleOnClickDocument(document, index) {
    return function () {
      onClickDocument(document, index);
    };
  };
  /**
   *
   * @param {String} status
   * @returns {String}
   */


  var getDotColorClass = function getDotColorClass(status) {
    switch (status) {
      case 'En espera':
      case 'En revisión':
        return clasess.dotOnHold;

      case 'Pendiente':
        return clasess.dotPending;

      case 'Aceptado':
        return clasess.dotSuccess;

      case 'Rechazado':
        return clasess.dotDanger;

      default:
        return clasess.dotOnHold;
    }
  };
  /**
   *
   * @param {String} status
   * @returns {String|DOMElement}
   */


  var getLabelStatus = function getLabelStatus(status) {
    switch (status) {
      case 'Aceptado':
        return _react.default.createElement(_Done.default, {
          className: clasess.successIcon
        });

      case 'Rechazado':
        return _react.default.createElement(_Clear.default, {
          className: clasess.dangerIcon
        });

      case 'En espera':
      case 'En revisión':
      case 'Pendiente':
      default:
        return _react.default.createElement("span", {
          className: clasess.statusName
        }, status, " ");
    }
  };
  /**
   *
   * @param {String} status
   * @returns {Boolean}
   */


  var isOnHole = function isOnHole(status) {
    return status === 'En espera' || status === 'En revisión';
  };
  /**
   *
   * @param {String} status
   * @returns {Boolean}
   */


  var isPending = function isPending(status) {
    return status === 'Pendiente';
  };

  return _react.default.createElement(_HeaderCollapse.default, {
    title: title,
    onDownload: onDownload
  }, _react.default.createElement(_List.default, {
    className: clasess.noPadding
  }, documents.map(function (document, index) {
    return _react.default.createElement(_ListItem.default, {
      key: document.name,
      button: isPending(document.status),
      onClick: isPending(document.status) ? handleOnClickDocument(document, index) : function () {},
      className: clasess.listItem
    }, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("span", {
      className: (0, _classnames2.default)(clasess.dot, getDotColorClass(document.status))
    }), _react.default.createElement("span", {
      className: (0, _classnames2.default)(clasess.name, _defineProperty({}, clasess.nameOnHole, isOnHole(document.status)))
    }, document.name)), _react.default.createElement("div", null, _react.default.createElement("span", null, getLabelStatus(document.status))));
  })));
};

DocumentList.propTypes = {
  title: _propTypes.default.string,
  documents: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    status: _propTypes.default.string.isRequired
  })).isRequired,
  onClickDocument: _propTypes.default.func,
  onDownload: _propTypes.default.func
};
DocumentList.defaultProps = {
  title: '',
  documents: [],
  onClickDocument: function onClickDocument() {},
  onDownload: function onDownload() {}
};
var _default = DocumentList;
exports.default = _default;