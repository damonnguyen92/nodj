webpackHotUpdate(0,{

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(82); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(82);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactGoogleMaps = __webpack_require__(374);\n\nvar _InfoBox = __webpack_require__(419);\n\nvar _InfoBox2 = _interopRequireDefault(_InfoBox);\n\nvar _reactModal = __webpack_require__(423);\n\nvar _reactModal2 = _interopRequireDefault(_reactModal);\n\nvar _redux = __webpack_require__(187);\n\nvar _reactRedux = __webpack_require__(201);\n\nvar _base_component = __webpack_require__(441);\n\nvar _base_component2 = _interopRequireDefault(_base_component);\n\nvar _google_maps_modal_component = __webpack_require__(442);\n\nvar _google_maps_modal_component2 = _interopRequireDefault(_google_maps_modal_component);\n\nvar _google_map_styles = __webpack_require__(444);\n\nvar _google_map_styles2 = _interopRequireDefault(_google_map_styles);\n\nvar _index = __webpack_require__(284);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// import FrownyFaceImg from '../../public/img/favicon.png';\n\n\n// Code for potential inclusion at later date:\nvar geolocation = function () {\n  // canUseDOM && navigator.geolocation || {\n  //   getCurrentPosition: (success, failure) => {\n  //     failure(`Your browser doesn't support geolocation.`);\n  //   },\n  // }\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(function (position) {\n      var pos = {\n        lat: position.coords.latitude,\n        lng: position.coords.longitude\n      };\n      // console.log(`Location found: ${pos.lat} ${pos.lng}`);\n      // console.log(`Google Maps LatLng: ${new google.maps.LatLng(pos.lat, pos.lng)}`);\n      return new google.maps.LatLng(pos.lat, pos.lng);\n    });\n    // console.log(`Your browser doesn't support geolocation.`);\n    return new google.maps.LatLng(37.745951, -122.439421);\n  }\n}();\n\nvar GMap = function (_BaseComponent) {\n  _inherits(GMap, _BaseComponent);\n\n  function GMap(props) {\n    _classCallCheck(this, GMap);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GMap).call(this, props));\n\n    _this.state = {\n      defaultCenter: new google.maps.LatLng(37.745951, -122.439421),\n      geoPos: null,\n      zoomLevel: 10\n    };\n\n    _this.modalNo = _this.modalNo.bind(_this);\n    _this.addTimeDelayedMarker = _this.addTimeDelayedMarker.bind(_this);\n    _this.markerCallbackHandler = _this.markerCallbackHandler.bind(_this);\n    return _this;\n  }\n\n  _createClass(GMap, [{\n    key: 'centerMap',\n    value: function centerMap() {\n      // console.log(`First map marker coordinates: ${this.props.markers[0].coords}`);\n      return this.props.markers.length ? this.props.markers[0].coords : this.state.defaultCenter;\n    }\n  }, {\n    key: 'centerZoomOverUSA',\n    value: function centerZoomOverUSA() {\n      this.setState({ zoomLevel: 5 });\n    }\n\n    // Toggle to 'true' to show InfoWindow and re-render component\n\n  }, {\n    key: 'handleMarkerClick',\n    value: function handleMarkerClick(targetMarker) {\n      this.closeAllMarkers();\n      this.setState({\n        markers: this.props.markers.map(function (marker) {\n          return marker === targetMarker ? Object.assign(marker, { showInfo: true }) : marker;\n        })\n      });\n    }\n  }, {\n    key: 'handleMarkerClose',\n    value: function handleMarkerClose(targetMarker) {\n      this.setState({\n        markers: this.props.markers.map(function (marker) {\n          return marker === targetMarker ? { marker: marker, showInfo: false } : marker;\n        })\n      });\n    }\n  }, {\n    key: 'closeAllMarkers',\n    value: function closeAllMarkers() {\n      this.setState({\n        markers: this.props.markers.map(function (marker) {\n          return Object.assign(marker, { showInfo: false });\n        })\n      });\n    }\n  }, {\n    key: 'renderInfoWindow',\n    value: function renderInfoWindow(marker, ref, company) {\n      var _this2 = this;\n\n      var onCloseclick = this.handleMarkerClose.bind(this, marker);\n      var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\n      console.log('Marker Keys: ' + Object.getOwnPropertyNames(marker));\n      console.log('Job Name: ' + marker.jobTitle);\n\n      return _react2.default.createElement(\n        _reactGoogleMaps.InfoWindow,\n        {\n          key: ref + '_info_window',\n          onCloseclick: onCloseclick },\n        _react2.default.createElement(\n          'div',\n          null,\n          company.map(function (companyMarker, index) {\n            return _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                'h4',\n                { className: 'infoWindow_Header' },\n                ALPHABET[_this2.props.markers.indexOf(companyMarker)] + '.  '\n              ),\n              _react2.default.createElement(\n                'h4',\n                { className: 'infoWindow_Header' },\n                _this2.parseAndFormatJobTitle(companyMarker.jobTitle)\n              )\n            );\n          }),\n          _react2.default.createElement(\n            'h5',\n            { className: 'infoWindow_Header' },\n            marker.company\n          ),\n          _react2.default.createElement('hr', null),\n          _react2.default.createElement(\n            'p',\n            null,\n            marker.formattedLocation\n          )\n        )\n      );\n    }\n\n    // Class methods for control of the Google Maps Modal visibility:\n\n  }, {\n    key: 'modalYes',\n    value: function modalYes() {\n      return this.props.toggleModal();\n    }\n  }, {\n    key: 'modalNo',\n    value: function modalNo() {\n      return this.props.toggleModalOff();\n    }\n  }, {\n    key: 'addTimeDelayedMarker',\n    value: function addTimeDelayedMarker(marker, index, company) {\n      var _this3 = this;\n\n      var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',\n          MAX_ZINDEX = 1000,\n          onClick = function onClick() {\n        return _this3.handleMarkerClick(marker);\n      },\n          MAP_PIN = 'M0-165c-27.618 0-50 21.966-50 49.054C-50-88.849 0 0 0 0s50-88.849 50-115.946C50-143.034 27.605-165 0-165z';\n\n      return _react2.default.createElement(\n        _reactGoogleMaps.Marker,\n        {\n          key: index,\n          ref: 'marker_' + index,\n          'data-jobTitle': marker.jobTitle,\n          'data-formattedLocation': marker.formattedLocation,\n          position: new google.maps.LatLng(marker.coords)\n          // animation={google.maps.Animation.DROP}\n          , title: marker.company,\n          icon: {\n            path: MAP_PIN,\n            scale: 1 / 4\n          }\n          // icon={`data:image/svg+xml,<svg%20xmlns%3D\"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\"%20width%3D\"38\"%20height%3D\"38\"%20viewBox%3D\"0%200%2038%2038\"><path%20fill%3D\"%23808080\"%20stroke%3D\"%23ccc\"%20stroke-width%3D\".5\"%20d%3D\"M34.305%2016.234c0%208.83-15.148%2019.158-15.148%2019.158S3.507%2025.065%203.507%2016.1c0-8.505%206.894-14.304%2015.4-14.304%208.504%200%2015.398%205.933%2015.398%2014.438z\"%2F><text%20transform%3D\"translate%2819%2018.5%29\"%20fill%3D\"%23fff\"%20style%3D\"font-family%3A%20Arial%2C%20sans-serif%3Bfont-weight%3Abold%3Btext-align%3Acenter%3B\"%20font-size%3D\"12\"%20text-anchor%3D\"middle\"`}\n          , opacity: 0.90,\n          zIndex: MAX_ZINDEX,\n          label: { \"text\": ALPHABET[index++ % index] },\n          showInfo: false,\n          onClick: onClick },\n        marker.showInfo ? this.renderInfoWindow(marker, index, company) : null\n      );\n    }\n  }, {\n    key: 'markerCallbackHandler',\n    value: function markerCallbackHandler() {\n      var _this4 = this;\n\n      var getMarkersForCompany = function getMarkersForCompany(company) {\n        return _this4.props.markers.filter(function (marker) {\n          return marker.company === company;\n        });\n      };\n      console.log(\"Horizon, Inc.:\", getMarkersForCompany(\"Horizon Technology Partners, Inc\"));\n\n      var uniqueCompanyNames = [].concat(_toConsumableArray(new Set(this.props.markers.map(function (marker) {\n        return marker.company;\n      }))));\n      console.log('Unique Company Names: ' + uniqueCompanyNames);\n\n      var markersByUniqueCompanyName = {};\n      uniqueCompanyNames.forEach(function (companyName) {\n        // if (!markersByUniqueCompanyName.has(marker.company)) {\n        //   markersByUniqueCompanyName.set(marker.company, [marker]);\n        // } else if (markersByUniqueCompanyName.has(marker.company)) {\n        //   markersByUniqueCompanyName[marker.company].push(marker);\n        // }\n        markersByUniqueCompanyName[companyName] = getMarkersForCompany(companyName);\n      });\n      // markersByUniqueCompanyName.set(\"GOOGLE\", \"A\");\n      console.log(\"Unique Markers By Company:\", Object.keys(markersByUniqueCompanyName), Object.values(markersByUniqueCompanyName));\n\n      return Object.values(markersByUniqueCompanyName).map(function (company, index) {\n        return _this4.addTimeDelayedMarker(company[0], index, company);\n      });\n\n      // return this.props.markers.map((marker, index) => {\n      //   return this.addTimeDelayedMarker(marker, index);\n      // });\n\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this5 = this;\n\n      return _react2.default.createElement(_reactGoogleMaps.GoogleMapLoader, {\n        containerElement: _react2.default.createElement('div', {\n          id: 'mapsContainer',\n          onDoubleClick: function onDoubleClick() {\n            return _this5.modalYes();\n          } }),\n        googleMapElement: _react2.default.createElement(\n          _reactGoogleMaps.GoogleMap,\n          {\n            center: this.centerMap(),\n            defaultCenter: this.state.defaultCenter,\n            defaultZoom: this.state.zoomLevel,\n            maxZoom: 19,\n            defaultOptions: { styles: _google_map_styles2.default },\n            scrollwheel: false,\n            ref: 'map' },\n          this.markerCallbackHandler(),\n          _react2.default.createElement(_google_maps_modal_component2.default, { center: this.centerMap(), modalEnable: this.modalYes, modalDisable: this.modalNo })\n        )\n      });\n    }\n  }]);\n\n  return GMap;\n}(_base_component2.default);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    markers: state.jobs.map(function (job) {\n      var _ref;\n\n      return _ref = {\n        coords: new google.maps.LatLng(job.latitude, job.longitude)\n      }, _defineProperty(_ref, 'coords', { \"lat\": job.latitude, \"lng\": job.longitude }), _defineProperty(_ref, 'jobTitle', job.jobtitle), _defineProperty(_ref, 'company', job.company), _defineProperty(_ref, 'formattedLocation', job.formattedLocation), _defineProperty(_ref, 'showInfo', false), _ref;\n    }),\n    toggleModal: state.toggleModal\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({\n    toggleModal: _index.toggleModal,\n    toggleModalOff: _index.toggleModalOff\n  }, dispatch);\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GMap);\n\n// {\n//   // Show InfoWindow only if `showInfo` key of the marker is `true`. That is, when the \n//   // Marker pin has been clicked and 'handleMarkerClick' has been successfully fired.\n//   marker.showInfo ? this.renderInfoWindow(index, marker) : null \n// }\n\n\n// function pinDropper() {\n//                 let markers = [];\n\n\n// const pinDropDelay = 1000,\n//                     delayPinDrop = (fn) => setTImeOut(fn, pinDropDelay); \n// delayPinDrop(() => newMarker, pinDropDelay);\n\n// const dropPins = () => setTimeout(function() { return newMarker; }, 1000);\n// dropPins();\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(307); if (makeExportsHot(module, __webpack_require__(82))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"google_map_component.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzczLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZ29vZ2xlX21hcF9jb21wb25lbnQuanM/Mjg5YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSRUFDVCBIT1QgTE9BREVSICovIGlmIChtb2R1bGUuaG90KSB7IChmdW5jdGlvbiAoKSB7IHZhciBSZWFjdEhvdEFQSSA9IHJlcXVpcmUoXCIvVXNlcnMvb2xpdmVyaXNlbnJpY2gvbm9kai9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWFwaS9tb2R1bGVzL2luZGV4LmpzXCIpLCBSb290SW5zdGFuY2VQcm92aWRlciA9IHJlcXVpcmUoXCIvVXNlcnMvb2xpdmVyaXNlbnJpY2gvbm9kai9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWxvYWRlci9Sb290SW5zdGFuY2VQcm92aWRlci5qc1wiKSwgUmVhY3RNb3VudCA9IHJlcXVpcmUoXCJyZWFjdC9saWIvUmVhY3RNb3VudFwiKSwgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7IG1vZHVsZS5tYWtlSG90ID0gbW9kdWxlLmhvdC5kYXRhID8gbW9kdWxlLmhvdC5kYXRhLm1ha2VIb3QgOiBSZWFjdEhvdEFQSShmdW5jdGlvbiAoKSB7IHJldHVybiBSb290SW5zdGFuY2VQcm92aWRlci5nZXRSb290SW5zdGFuY2VzKFJlYWN0TW91bnQpOyB9LCBSZWFjdCk7IH0pKCk7IH0gdHJ5IHsgKGZ1bmN0aW9uICgpIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RHb29nbGVNYXBzID0gcmVxdWlyZSgncmVhY3QtZ29vZ2xlLW1hcHMnKTtcblxudmFyIF9JbmZvQm94ID0gcmVxdWlyZSgncmVhY3QtZ29vZ2xlLW1hcHMvbGliL2FkZG9ucy9JbmZvQm94Jyk7XG5cbnZhciBfSW5mb0JveDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbmZvQm94KTtcblxudmFyIF9yZWFjdE1vZGFsID0gcmVxdWlyZSgncmVhY3QtbW9kYWwnKTtcblxudmFyIF9yZWFjdE1vZGFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0TW9kYWwpO1xuXG52YXIgX3JlZHV4ID0gcmVxdWlyZSgncmVkdXgnKTtcblxudmFyIF9yZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxudmFyIF9iYXNlX2NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYmFzZV9jb21wb25lbnQnKTtcblxudmFyIF9iYXNlX2NvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iYXNlX2NvbXBvbmVudCk7XG5cbnZhciBfZ29vZ2xlX21hcHNfbW9kYWxfY29tcG9uZW50ID0gcmVxdWlyZSgnLi9nb29nbGVfbWFwc19tb2RhbF9jb21wb25lbnQnKTtcblxudmFyIF9nb29nbGVfbWFwc19tb2RhbF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZ2xlX21hcHNfbW9kYWxfY29tcG9uZW50KTtcblxudmFyIF9nb29nbGVfbWFwX3N0eWxlcyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9nb29nbGVfbWFwX3N0eWxlcy5qc29uJyk7XG5cbnZhciBfZ29vZ2xlX21hcF9zdHlsZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZ2xlX21hcF9zdHlsZXMpO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9pbmRleCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuLy8gaW1wb3J0IEZyb3dueUZhY2VJbWcgZnJvbSAnLi4vLi4vcHVibGljL2ltZy9mYXZpY29uLnBuZyc7XG5cblxuLy8gQ29kZSBmb3IgcG90ZW50aWFsIGluY2x1c2lvbiBhdCBsYXRlciBkYXRlOlxudmFyIGdlb2xvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAvLyBjYW5Vc2VET00gJiYgbmF2aWdhdG9yLmdlb2xvY2F0aW9uIHx8IHtcbiAgLy8gICBnZXRDdXJyZW50UG9zaXRpb246IChzdWNjZXNzLCBmYWlsdXJlKSA9PiB7XG4gIC8vICAgICBmYWlsdXJlKGBZb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGdlb2xvY2F0aW9uLmApO1xuICAvLyAgIH0sXG4gIC8vIH1cbiAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICB2YXIgcG9zID0ge1xuICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgbG5nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXG4gICAgICB9O1xuICAgICAgLy8gY29uc29sZS5sb2coYExvY2F0aW9uIGZvdW5kOiAke3Bvcy5sYXR9ICR7cG9zLmxuZ31gKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBHb29nbGUgTWFwcyBMYXRMbmc6ICR7bmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwb3MubGF0LCBwb3MubG5nKX1gKTtcbiAgICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHBvcy5sYXQsIHBvcy5sbmcpO1xuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKGBZb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGdlb2xvY2F0aW9uLmApO1xuICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDM3Ljc0NTk1MSwgLTEyMi40Mzk0MjEpO1xuICB9XG59KCk7XG5cbnZhciBHTWFwID0gZnVuY3Rpb24gKF9CYXNlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHTWFwLCBfQmFzZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gR01hcChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHTWFwKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihHTWFwKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRlZmF1bHRDZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoMzcuNzQ1OTUxLCAtMTIyLjQzOTQyMSksXG4gICAgICBnZW9Qb3M6IG51bGwsXG4gICAgICB6b29tTGV2ZWw6IDEwXG4gICAgfTtcblxuICAgIF90aGlzLm1vZGFsTm8gPSBfdGhpcy5tb2RhbE5vLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmFkZFRpbWVEZWxheWVkTWFya2VyID0gX3RoaXMuYWRkVGltZURlbGF5ZWRNYXJrZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMubWFya2VyQ2FsbGJhY2tIYW5kbGVyID0gX3RoaXMubWFya2VyQ2FsbGJhY2tIYW5kbGVyLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHTWFwLCBbe1xuICAgIGtleTogJ2NlbnRlck1hcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNlbnRlck1hcCgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBGaXJzdCBtYXAgbWFya2VyIGNvb3JkaW5hdGVzOiAke3RoaXMucHJvcHMubWFya2Vyc1swXS5jb29yZHN9YCk7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5tYXJrZXJzLmxlbmd0aCA/IHRoaXMucHJvcHMubWFya2Vyc1swXS5jb29yZHMgOiB0aGlzLnN0YXRlLmRlZmF1bHRDZW50ZXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2VudGVyWm9vbU92ZXJVU0EnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjZW50ZXJab29tT3ZlclVTQSgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB6b29tTGV2ZWw6IDUgfSk7XG4gICAgfVxuXG4gICAgLy8gVG9nZ2xlIHRvICd0cnVlJyB0byBzaG93IEluZm9XaW5kb3cgYW5kIHJlLXJlbmRlciBjb21wb25lbnRcblxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlTWFya2VyQ2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNYXJrZXJDbGljayh0YXJnZXRNYXJrZXIpIHtcbiAgICAgIHRoaXMuY2xvc2VBbGxNYXJrZXJzKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWFya2VyczogdGhpcy5wcm9wcy5tYXJrZXJzLm1hcChmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcmtlciA9PT0gdGFyZ2V0TWFya2VyID8gT2JqZWN0LmFzc2lnbihtYXJrZXIsIHsgc2hvd0luZm86IHRydWUgfSkgOiBtYXJrZXI7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVNYXJrZXJDbG9zZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1hcmtlckNsb3NlKHRhcmdldE1hcmtlcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1hcmtlcnM6IHRoaXMucHJvcHMubWFya2Vycy5tYXAoZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICAgIHJldHVybiBtYXJrZXIgPT09IHRhcmdldE1hcmtlciA/IHsgbWFya2VyOiBtYXJrZXIsIHNob3dJbmZvOiBmYWxzZSB9IDogbWFya2VyO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xvc2VBbGxNYXJrZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VBbGxNYXJrZXJzKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1hcmtlcnM6IHRoaXMucHJvcHMubWFya2Vycy5tYXAoZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG1hcmtlciwgeyBzaG93SW5mbzogZmFsc2UgfSk7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJJbmZvV2luZG93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5mb1dpbmRvdyhtYXJrZXIsIHJlZiwgY29tcGFueSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBvbkNsb3NlY2xpY2sgPSB0aGlzLmhhbmRsZU1hcmtlckNsb3NlLmJpbmQodGhpcywgbWFya2VyKTtcbiAgICAgIHZhciBBTFBIQUJFVCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gICAgICBjb25zb2xlLmxvZygnTWFya2VyIEtleXM6ICcgKyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtYXJrZXIpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdKb2IgTmFtZTogJyArIG1hcmtlci5qb2JUaXRsZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0R29vZ2xlTWFwcy5JbmZvV2luZG93LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiByZWYgKyAnX2luZm9fd2luZG93JyxcbiAgICAgICAgICBvbkNsb3NlY2xpY2s6IG9uQ2xvc2VjbGljayB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGNvbXBhbnkubWFwKGZ1bmN0aW9uIChjb21wYW55TWFya2VyLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2g0JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2luZm9XaW5kb3dfSGVhZGVyJyB9LFxuICAgICAgICAgICAgICAgIEFMUEhBQkVUW190aGlzMi5wcm9wcy5tYXJrZXJzLmluZGV4T2YoY29tcGFueU1hcmtlcildICsgJy4gICdcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2g0JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2luZm9XaW5kb3dfSGVhZGVyJyB9LFxuICAgICAgICAgICAgICAgIF90aGlzMi5wYXJzZUFuZEZvcm1hdEpvYlRpdGxlKGNvbXBhbnlNYXJrZXIuam9iVGl0bGUpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaDUnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdpbmZvV2luZG93X0hlYWRlcicgfSxcbiAgICAgICAgICAgIG1hcmtlci5jb21wYW55XG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaHInLCBudWxsKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdwJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBtYXJrZXIuZm9ybWF0dGVkTG9jYXRpb25cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ2xhc3MgbWV0aG9kcyBmb3IgY29udHJvbCBvZiB0aGUgR29vZ2xlIE1hcHMgTW9kYWwgdmlzaWJpbGl0eTpcblxuICB9LCB7XG4gICAga2V5OiAnbW9kYWxZZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb2RhbFllcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnRvZ2dsZU1vZGFsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbW9kYWxObycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vZGFsTm8oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy50b2dnbGVNb2RhbE9mZigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZFRpbWVEZWxheWVkTWFya2VyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVGltZURlbGF5ZWRNYXJrZXIobWFya2VyLCBpbmRleCwgY29tcGFueSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBBTFBIQUJFVCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsXG4gICAgICAgICAgTUFYX1pJTkRFWCA9IDEwMDAsXG4gICAgICAgICAgb25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgIHJldHVybiBfdGhpczMuaGFuZGxlTWFya2VyQ2xpY2sobWFya2VyKTtcbiAgICAgIH0sXG4gICAgICAgICAgTUFQX1BJTiA9ICdNMC0xNjVjLTI3LjYxOCAwLTUwIDIxLjk2Ni01MCA0OS4wNTRDLTUwLTg4Ljg0OSAwIDAgMCAwczUwLTg4Ljg0OSA1MC0xMTUuOTQ2QzUwLTE0My4wMzQgMjcuNjA1LTE2NSAwLTE2NXonO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEdvb2dsZU1hcHMuTWFya2VyLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICByZWY6ICdtYXJrZXJfJyArIGluZGV4LFxuICAgICAgICAgICdkYXRhLWpvYlRpdGxlJzogbWFya2VyLmpvYlRpdGxlLFxuICAgICAgICAgICdkYXRhLWZvcm1hdHRlZExvY2F0aW9uJzogbWFya2VyLmZvcm1hdHRlZExvY2F0aW9uLFxuICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG1hcmtlci5jb29yZHMpXG4gICAgICAgICAgLy8gYW5pbWF0aW9uPXtnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUH1cbiAgICAgICAgICAsIHRpdGxlOiBtYXJrZXIuY29tcGFueSxcbiAgICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICBwYXRoOiBNQVBfUElOLFxuICAgICAgICAgICAgc2NhbGU6IDEgLyA0XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGljb249e2BkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyUyMHhtbG5zJTNEXCJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmdcIiUyMHdpZHRoJTNEXCIzOFwiJTIwaGVpZ2h0JTNEXCIzOFwiJTIwdmlld0JveCUzRFwiMCUyMDAlMjAzOCUyMDM4XCI+PHBhdGglMjBmaWxsJTNEXCIlMjM4MDgwODBcIiUyMHN0cm9rZSUzRFwiJTIzY2NjXCIlMjBzdHJva2Utd2lkdGglM0RcIi41XCIlMjBkJTNEXCJNMzQuMzA1JTIwMTYuMjM0YzAlMjA4LjgzLTE1LjE0OCUyMDE5LjE1OC0xNS4xNDglMjAxOS4xNThTMy41MDclMjAyNS4wNjUlMjAzLjUwNyUyMDE2LjFjMC04LjUwNSUyMDYuODk0LTE0LjMwNCUyMDE1LjQtMTQuMzA0JTIwOC41MDQlMjAwJTIwMTUuMzk4JTIwNS45MzMlMjAxNS4zOTglMjAxNC40Mzh6XCIlMkY+PHRleHQlMjB0cmFuc2Zvcm0lM0RcInRyYW5zbGF0ZSUyODE5JTIwMTguNSUyOVwiJTIwZmlsbCUzRFwiJTIzZmZmXCIlMjBzdHlsZSUzRFwiZm9udC1mYW1pbHklM0ElMjBBcmlhbCUyQyUyMHNhbnMtc2VyaWYlM0Jmb250LXdlaWdodCUzQWJvbGQlM0J0ZXh0LWFsaWduJTNBY2VudGVyJTNCXCIlMjBmb250LXNpemUlM0RcIjEyXCIlMjB0ZXh0LWFuY2hvciUzRFwibWlkZGxlXCJgfVxuICAgICAgICAgICwgb3BhY2l0eTogMC45MCxcbiAgICAgICAgICB6SW5kZXg6IE1BWF9aSU5ERVgsXG4gICAgICAgICAgbGFiZWw6IHsgXCJ0ZXh0XCI6IEFMUEhBQkVUW2luZGV4KysgJSBpbmRleF0gfSxcbiAgICAgICAgICBzaG93SW5mbzogZmFsc2UsXG4gICAgICAgICAgb25DbGljazogb25DbGljayB9LFxuICAgICAgICBtYXJrZXIuc2hvd0luZm8gPyB0aGlzLnJlbmRlckluZm9XaW5kb3cobWFya2VyLCBpbmRleCwgY29tcGFueSkgOiBudWxsXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ21hcmtlckNhbGxiYWNrSGFuZGxlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hcmtlckNhbGxiYWNrSGFuZGxlcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgZ2V0TWFya2Vyc0ZvckNvbXBhbnkgPSBmdW5jdGlvbiBnZXRNYXJrZXJzRm9yQ29tcGFueShjb21wYW55KSB7XG4gICAgICAgIHJldHVybiBfdGhpczQucHJvcHMubWFya2Vycy5maWx0ZXIoZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICAgIHJldHVybiBtYXJrZXIuY29tcGFueSA9PT0gY29tcGFueTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgY29uc29sZS5sb2coXCJIb3Jpem9uLCBJbmMuOlwiLCBnZXRNYXJrZXJzRm9yQ29tcGFueShcIkhvcml6b24gVGVjaG5vbG9neSBQYXJ0bmVycywgSW5jXCIpKTtcblxuICAgICAgdmFyIHVuaXF1ZUNvbXBhbnlOYW1lcyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobmV3IFNldCh0aGlzLnByb3BzLm1hcmtlcnMubWFwKGZ1bmN0aW9uIChtYXJrZXIpIHtcbiAgICAgICAgcmV0dXJuIG1hcmtlci5jb21wYW55O1xuICAgICAgfSkpKSk7XG4gICAgICBjb25zb2xlLmxvZygnVW5pcXVlIENvbXBhbnkgTmFtZXM6ICcgKyB1bmlxdWVDb21wYW55TmFtZXMpO1xuXG4gICAgICB2YXIgbWFya2Vyc0J5VW5pcXVlQ29tcGFueU5hbWUgPSB7fTtcbiAgICAgIHVuaXF1ZUNvbXBhbnlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChjb21wYW55TmFtZSkge1xuICAgICAgICAvLyBpZiAoIW1hcmtlcnNCeVVuaXF1ZUNvbXBhbnlOYW1lLmhhcyhtYXJrZXIuY29tcGFueSkpIHtcbiAgICAgICAgLy8gICBtYXJrZXJzQnlVbmlxdWVDb21wYW55TmFtZS5zZXQobWFya2VyLmNvbXBhbnksIFttYXJrZXJdKTtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChtYXJrZXJzQnlVbmlxdWVDb21wYW55TmFtZS5oYXMobWFya2VyLmNvbXBhbnkpKSB7XG4gICAgICAgIC8vICAgbWFya2Vyc0J5VW5pcXVlQ29tcGFueU5hbWVbbWFya2VyLmNvbXBhbnldLnB1c2gobWFya2VyKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBtYXJrZXJzQnlVbmlxdWVDb21wYW55TmFtZVtjb21wYW55TmFtZV0gPSBnZXRNYXJrZXJzRm9yQ29tcGFueShjb21wYW55TmFtZSk7XG4gICAgICB9KTtcbiAgICAgIC8vIG1hcmtlcnNCeVVuaXF1ZUNvbXBhbnlOYW1lLnNldChcIkdPT0dMRVwiLCBcIkFcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIlVuaXF1ZSBNYXJrZXJzIEJ5IENvbXBhbnk6XCIsIE9iamVjdC5rZXlzKG1hcmtlcnNCeVVuaXF1ZUNvbXBhbnlOYW1lKSwgT2JqZWN0LnZhbHVlcyhtYXJrZXJzQnlVbmlxdWVDb21wYW55TmFtZSkpO1xuXG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhtYXJrZXJzQnlVbmlxdWVDb21wYW55TmFtZSkubWFwKGZ1bmN0aW9uIChjb21wYW55LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX3RoaXM0LmFkZFRpbWVEZWxheWVkTWFya2VyKGNvbXBhbnlbMF0sIGluZGV4LCBjb21wYW55KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyByZXR1cm4gdGhpcy5wcm9wcy5tYXJrZXJzLm1hcCgobWFya2VyLCBpbmRleCkgPT4ge1xuICAgICAgLy8gICByZXR1cm4gdGhpcy5hZGRUaW1lRGVsYXllZE1hcmtlcihtYXJrZXIsIGluZGV4KTtcbiAgICAgIC8vIH0pO1xuXG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RHb29nbGVNYXBzLkdvb2dsZU1hcExvYWRlciwge1xuICAgICAgICBjb250YWluZXJFbGVtZW50OiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgIGlkOiAnbWFwc0NvbnRhaW5lcicsXG4gICAgICAgICAgb25Eb3VibGVDbGljazogZnVuY3Rpb24gb25Eb3VibGVDbGljaygpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczUubW9kYWxZZXMoKTtcbiAgICAgICAgICB9IH0pLFxuICAgICAgICBnb29nbGVNYXBFbGVtZW50OiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfcmVhY3RHb29nbGVNYXBzLkdvb2dsZU1hcCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjZW50ZXI6IHRoaXMuY2VudGVyTWFwKCksXG4gICAgICAgICAgICBkZWZhdWx0Q2VudGVyOiB0aGlzLnN0YXRlLmRlZmF1bHRDZW50ZXIsXG4gICAgICAgICAgICBkZWZhdWx0Wm9vbTogdGhpcy5zdGF0ZS56b29tTGV2ZWwsXG4gICAgICAgICAgICBtYXhab29tOiAxOSxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7IHN0eWxlczogX2dvb2dsZV9tYXBfc3R5bGVzMi5kZWZhdWx0IH0sXG4gICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXG4gICAgICAgICAgICByZWY6ICdtYXAnIH0sXG4gICAgICAgICAgdGhpcy5tYXJrZXJDYWxsYmFja0hhbmRsZXIoKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZ29vZ2xlX21hcHNfbW9kYWxfY29tcG9uZW50Mi5kZWZhdWx0LCB7IGNlbnRlcjogdGhpcy5jZW50ZXJNYXAoKSwgbW9kYWxFbmFibGU6IHRoaXMubW9kYWxZZXMsIG1vZGFsRGlzYWJsZTogdGhpcy5tb2RhbE5vIH0pXG4gICAgICAgIClcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHTWFwO1xufShfYmFzZV9jb21wb25lbnQyLmRlZmF1bHQpO1xuXG52YXIgbWFwU3RhdGVUb1Byb3BzID0gZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbWFya2Vyczogc3RhdGUuam9icy5tYXAoZnVuY3Rpb24gKGpvYikge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgICBjb29yZHM6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoam9iLmxhdGl0dWRlLCBqb2IubG9uZ2l0dWRlKVxuICAgICAgfSwgX2RlZmluZVByb3BlcnR5KF9yZWYsICdjb29yZHMnLCB7IFwibGF0XCI6IGpvYi5sYXRpdHVkZSwgXCJsbmdcIjogam9iLmxvbmdpdHVkZSB9KSwgX2RlZmluZVByb3BlcnR5KF9yZWYsICdqb2JUaXRsZScsIGpvYi5qb2J0aXRsZSksIF9kZWZpbmVQcm9wZXJ0eShfcmVmLCAnY29tcGFueScsIGpvYi5jb21wYW55KSwgX2RlZmluZVByb3BlcnR5KF9yZWYsICdmb3JtYXR0ZWRMb2NhdGlvbicsIGpvYi5mb3JtYXR0ZWRMb2NhdGlvbiksIF9kZWZpbmVQcm9wZXJ0eShfcmVmLCAnc2hvd0luZm8nLCBmYWxzZSksIF9yZWY7XG4gICAgfSksXG4gICAgdG9nZ2xlTW9kYWw6IHN0YXRlLnRvZ2dsZU1vZGFsXG4gIH07XG59O1xuXG52YXIgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoe1xuICAgIHRvZ2dsZU1vZGFsOiBfaW5kZXgudG9nZ2xlTW9kYWwsXG4gICAgdG9nZ2xlTW9kYWxPZmY6IF9pbmRleC50b2dnbGVNb2RhbE9mZlxuICB9LCBkaXNwYXRjaCk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX3JlYWN0UmVkdXguY29ubmVjdCkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdNYXApO1xuXG4vLyB7XG4vLyAgIC8vIFNob3cgSW5mb1dpbmRvdyBvbmx5IGlmIGBzaG93SW5mb2Aga2V5IG9mIHRoZSBtYXJrZXIgaXMgYHRydWVgLiBUaGF0IGlzLCB3aGVuIHRoZSBcbi8vICAgLy8gTWFya2VyIHBpbiBoYXMgYmVlbiBjbGlja2VkIGFuZCAnaGFuZGxlTWFya2VyQ2xpY2snIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBmaXJlZC5cbi8vICAgbWFya2VyLnNob3dJbmZvID8gdGhpcy5yZW5kZXJJbmZvV2luZG93KGluZGV4LCBtYXJrZXIpIDogbnVsbCBcbi8vIH1cblxuXG4vLyBmdW5jdGlvbiBwaW5Ecm9wcGVyKCkge1xuLy8gICAgICAgICAgICAgICAgIGxldCBtYXJrZXJzID0gW107XG5cblxuLy8gY29uc3QgcGluRHJvcERlbGF5ID0gMTAwMCxcbi8vICAgICAgICAgICAgICAgICAgICAgZGVsYXlQaW5Ecm9wID0gKGZuKSA9PiBzZXRUSW1lT3V0KGZuLCBwaW5Ecm9wRGVsYXkpOyBcbi8vIGRlbGF5UGluRHJvcCgoKSA9PiBuZXdNYXJrZXIsIHBpbkRyb3BEZWxheSk7XG5cbi8vIGNvbnN0IGRyb3BQaW5zID0gKCkgPT4gc2V0VGltZW91dChmdW5jdGlvbigpIHsgcmV0dXJuIG5ld01hcmtlcjsgfSwgMTAwMCk7XG4vLyBkcm9wUGlucygpO1xuXG4vKiBSRUFDVCBIT1QgTE9BREVSICovIH0pLmNhbGwodGhpcyk7IH0gZmluYWxseSB7IGlmIChtb2R1bGUuaG90KSB7IChmdW5jdGlvbiAoKSB7IHZhciBmb3VuZFJlYWN0Q2xhc3NlcyA9IG1vZHVsZS5ob3QuZGF0YSAmJiBtb2R1bGUuaG90LmRhdGEuZm91bmRSZWFjdENsYXNzZXMgfHwgZmFsc2U7IGlmIChtb2R1bGUuZXhwb3J0cyAmJiBtb2R1bGUubWFrZUhvdCkgeyB2YXIgbWFrZUV4cG9ydHNIb3QgPSByZXF1aXJlKFwiL1VzZXJzL29saXZlcmlzZW5yaWNoL25vZGovbm9kZV9tb2R1bGVzL3JlYWN0LWhvdC1sb2FkZXIvbWFrZUV4cG9ydHNIb3QuanNcIik7IGlmIChtYWtlRXhwb3J0c0hvdChtb2R1bGUsIHJlcXVpcmUoXCJyZWFjdFwiKSkpIHsgZm91bmRSZWFjdENsYXNzZXMgPSB0cnVlOyB9IHZhciBzaG91bGRBY2NlcHRNb2R1bGUgPSB0cnVlICYmIGZvdW5kUmVhY3RDbGFzc2VzOyBpZiAoc2hvdWxkQWNjZXB0TW9kdWxlKSB7IG1vZHVsZS5ob3QuYWNjZXB0KGZ1bmN0aW9uIChlcnIpIHsgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKFwiQ2Fubm90IG5vdCBhcHBseSBob3QgdXBkYXRlIHRvIFwiICsgXCJnb29nbGVfbWFwX2NvbXBvbmVudC5qc1wiICsgXCI6IFwiICsgZXJyLm1lc3NhZ2UpOyB9IH0pOyB9IH0gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7IGRhdGEubWFrZUhvdCA9IG1vZHVsZS5tYWtlSG90OyBkYXRhLmZvdW5kUmVhY3RDbGFzc2VzID0gZm91bmRSZWFjdENsYXNzZXM7IH0pOyB9KSgpOyB9IH1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvZ29vZ2xlX21hcF9jb21wb25lbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAzNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})