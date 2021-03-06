"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _HeaderCard = _interopRequireDefault(require("../HeaderCard"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var VideoCard = function VideoCard(_ref) {
  var title = _ref.title,
      video = _ref.video;
  var clasess = (0, _style.default)();
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_HeaderCard.default, {
    title: title
  }, _react.default.createElement("div", {
    className: clasess.videoContainer
  }, _react.default.createElement("video", {
    controls: true,
    src: video,
    className: clasess.video
  }))));
};

VideoCard.propTypes = {
  title: _propTypes.default.string,
  video: _propTypes.default.string,
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
VideoCard.defaultProps = {
  title: '',
  video: '',
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
var _default = VideoCard;
exports.default = _default;