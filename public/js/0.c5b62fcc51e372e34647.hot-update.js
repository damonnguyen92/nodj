webpackHotUpdate(0,{

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(82); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(82);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactGoogleMaps = __webpack_require__(374);\n\nvar _InfoBox = __webpack_require__(419);\n\nvar _InfoBox2 = _interopRequireDefault(_InfoBox);\n\nvar _reactModal = __webpack_require__(423);\n\nvar _reactModal2 = _interopRequireDefault(_reactModal);\n\nvar _redux = __webpack_require__(187);\n\nvar _reactRedux = __webpack_require__(201);\n\nvar _base_component = __webpack_require__(441);\n\nvar _base_component2 = _interopRequireDefault(_base_component);\n\nvar _google_maps_modal_component = __webpack_require__(442);\n\nvar _google_maps_modal_component2 = _interopRequireDefault(_google_maps_modal_component);\n\nvar _google_map_styles = __webpack_require__(444);\n\nvar _google_map_styles2 = _interopRequireDefault(_google_map_styles);\n\nvar _favicon = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"../../public/img/favicon.png\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _favicon2 = _interopRequireDefault(_favicon);\n\nvar _index = __webpack_require__(284);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// Code for potential inclusion at later date:\nvar geolocation = function () {\n  // canUseDOM && navigator.geolocation || {\n  //   getCurrentPosition: (success, failure) => {\n  //     failure(`Your browser doesn't support geolocation.`);\n  //   },\n  // }\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(function (position) {\n      var pos = {\n        lat: position.coords.latitude,\n        lng: position.coords.longitude\n      };\n      // console.log(`Location found: ${pos.lat} ${pos.lng}`);\n      // console.log(`Google Maps LatLng: ${new google.maps.LatLng(pos.lat, pos.lng)}`);\n      return new google.maps.LatLng(pos.lat, pos.lng);\n    });\n    // console.log(`Your browser doesn't support geolocation.`);\n    return new google.maps.LatLng(37.745951, -122.439421);\n  }\n}();\n\nvar GMap = function (_BaseComponent) {\n  _inherits(GMap, _BaseComponent);\n\n  function GMap(props) {\n    _classCallCheck(this, GMap);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GMap).call(this, props));\n\n    _this.state = {\n      defaultCenter: new google.maps.LatLng(37.745951, -122.439421),\n      geoPos: null,\n      zoomLevel: 10\n    };\n\n    _this.modalNo = _this.modalNo.bind(_this);\n    _this.addTimeDelayedMarker = _this.addTimeDelayedMarker.bind(_this);\n    _this.markerCallbackHandler = _this.markerCallbackHandler.bind(_this);\n    return _this;\n  }\n\n  _createClass(GMap, [{\n    key: 'centerMap',\n    value: function centerMap() {\n      // console.log(`First map marker coordinates: ${this.props.markers[0].coords}`);\n      return this.props.markers.length ? this.props.markers[0].coords : this.state.defaultCenter;\n    }\n  }, {\n    key: 'centerZoomOverUSA',\n    value: function centerZoomOverUSA() {\n      this.setState({ zoomLevel: 5 });\n    }\n\n    // Toggle to 'true' to show InfoWindow and re-render component\n\n  }, {\n    key: 'handleMarkerClick',\n    value: function handleMarkerClick(targetMarker) {\n      this.closeAllMarkers();\n      this.setState({\n        markers: this.props.markers.map(function (marker) {\n          return marker === targetMarker ? Object.assign(marker, { showInfo: true }) : marker;\n        })\n      });\n    }\n  }, {\n    key: 'handleMarkerClose',\n    value: function handleMarkerClose(targetMarker) {\n      this.setState({\n        markers: this.props.markers.map(function (marker) {\n          return marker === targetMarker ? { marker: marker, showInfo: false } : marker;\n        })\n      });\n    }\n  }, {\n    key: 'closeAllMarkers',\n    value: function closeAllMarkers() {\n      this.setState({\n        markers: this.props.markers.map(function (marker) {\n          return Object.assign(marker, { showInfo: false });\n        })\n      });\n    }\n  }, {\n    key: 'renderInfoWindow',\n    value: function renderInfoWindow(marker, ref, company) {\n      var _this2 = this;\n\n      var onCloseclick = this.handleMarkerClose.bind(this, marker);\n      var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\n      console.log('Marker Keys: ' + Object.getOwnPropertyNames(marker));\n      console.log('Job Name: ' + marker.jobTitle);\n\n      return _react2.default.createElement(\n        _reactGoogleMaps.InfoWindow,\n        {\n          key: ref + '_info_window',\n          onCloseclick: onCloseclick },\n        _react2.default.createElement(\n          'div',\n          null,\n          company.map(function (companyMarker, index) {\n            return _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                'h4',\n                { className: 'infoWindow_Header' },\n                ALPHABET[_this2.props.markers.indexOf(companyMarker)] + '.  '\n              ),\n              _react2.default.createElement(\n                'h4',\n                { className: 'infoWindow_Header' },\n                _this2.parseAndFormatJobTitle(companyMarker.jobTitle)\n              )\n            );\n          }),\n          _react2.default.createElement(\n            'h5',\n            { className: 'infoWindow_Header' },\n            marker.company\n          ),\n          _react2.default.createElement('hr', null),\n          _react2.default.createElement(\n            'p',\n            null,\n            marker.formattedLocation\n          )\n        )\n      );\n    }\n\n    // Class methods for control of the Google Maps Modal visibility:\n\n  }, {\n    key: 'modalYes',\n    value: function modalYes() {\n      return this.props.toggleModal();\n    }\n  }, {\n    key: 'modalNo',\n    value: function modalNo() {\n      return this.props.toggleModalOff();\n    }\n  }, {\n    key: 'addTimeDelayedMarker',\n    value: function addTimeDelayedMarker(marker, index, company) {\n      var _this3 = this;\n\n      var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',\n          MAX_ZINDEX = 1000,\n          onClick = function onClick() {\n        return _this3.handleMarkerClick(marker);\n      };\n\n      return _react2.default.createElement(\n        _reactGoogleMaps.Marker,\n        {\n          key: index,\n          ref: 'marker_' + index,\n          'data-jobTitle': marker.jobTitle,\n          'data-formattedLocation': marker.formattedLocation,\n          position: new google.maps.LatLng(marker.coords)\n          // animation={google.maps.Animation.DROP}\n          , title: marker.company,\n          icon: _favicon2.default\n          // icon={`data:image/svg+xml,<svg%20xmlns%3D\"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\"%20width%3D\"38\"%20height%3D\"38\"%20viewBox%3D\"0%200%2038%2038\"><path%20fill%3D\"%23808080\"%20stroke%3D\"%23ccc\"%20stroke-width%3D\".5\"%20d%3D\"M34.305%2016.234c0%208.83-15.148%2019.158-15.148%2019.158S3.507%2025.065%203.507%2016.1c0-8.505%206.894-14.304%2015.4-14.304%208.504%200%2015.398%205.933%2015.398%2014.438z\"%2F><text%20transform%3D\"translate%2819%2018.5%29\"%20fill%3D\"%23fff\"%20style%3D\"font-family%3A%20Arial%2C%20sans-serif%3Bfont-weight%3Abold%3Btext-align%3Acenter%3B\"%20font-size%3D\"12\"%20text-anchor%3D\"middle\"`}\n          , opacity: 0.90,\n          zIndex: MAX_ZINDEX,\n          label: { \"text\": ALPHABET[index++ % index] },\n          showInfo: false,\n          onClick: onClick },\n        marker.showInfo ? this.renderInfoWindow(marker, index, company) : null\n      );\n    }\n  }, {\n    key: 'markerCallbackHandler',\n    value: function markerCallbackHandler() {\n      var _this4 = this;\n\n      var getMarkersForCompany = function getMarkersForCompany(company) {\n        return _this4.props.markers.filter(function (marker) {\n          return marker.company === company;\n        });\n      };\n      console.log(\"Horizon, Inc.:\", getMarkersForCompany(\"Horizon Technology Partners, Inc\"));\n\n      var uniqueCompanyNames = [].concat(_toConsumableArray(new Set(this.props.markers.map(function (marker) {\n        return marker.company;\n      }))));\n      console.log('Unique Company Names: ' + uniqueCompanyNames);\n\n      var markersByUniqueCompanyName = {};\n      uniqueCompanyNames.forEach(function (companyName) {\n        // if (!markersByUniqueCompanyName.has(marker.company)) {\n        //   markersByUniqueCompanyName.set(marker.company, [marker]);\n        // } else if (markersByUniqueCompanyName.has(marker.company)) {\n        //   markersByUniqueCompanyName[marker.company].push(marker);\n        // }\n        markersByUniqueCompanyName[companyName] = getMarkersForCompany(companyName);\n      });\n      // markersByUniqueCompanyName.set(\"GOOGLE\", \"A\");\n      console.log(\"Unique Markers By Company:\", Object.keys(markersByUniqueCompanyName), Object.values(markersByUniqueCompanyName));\n\n      return Object.values(markersByUniqueCompanyName).map(function (company, index) {\n        return _this4.addTimeDelayedMarker(company[0], index, company);\n      });\n\n      // return this.props.markers.map((marker, index) => {\n      //   return this.addTimeDelayedMarker(marker, index);\n      // });\n\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this5 = this;\n\n      return _react2.default.createElement(_reactGoogleMaps.GoogleMapLoader, {\n        containerElement: _react2.default.createElement('div', {\n          id: 'mapsContainer',\n          onDoubleClick: function onDoubleClick() {\n            return _this5.modalYes();\n          } }),\n        googleMapElement: _react2.default.createElement(\n          _reactGoogleMaps.GoogleMap,\n          {\n            center: this.centerMap(),\n            defaultCenter: this.state.defaultCenter,\n            defaultZoom: this.state.zoomLevel,\n            maxZoom: 19,\n            defaultOptions: { styles: _google_map_styles2.default },\n            scrollwheel: false,\n            ref: 'map' },\n          this.markerCallbackHandler(),\n          _react2.default.createElement(_google_maps_modal_component2.default, { center: this.centerMap(), modalEnable: this.modalYes, modalDisable: this.modalNo })\n        )\n      });\n    }\n  }]);\n\n  return GMap;\n}(_base_component2.default);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    markers: state.jobs.map(function (job) {\n      var _ref;\n\n      return _ref = {\n        coords: new google.maps.LatLng(job.latitude, job.longitude)\n      }, _defineProperty(_ref, 'coords', { \"lat\": job.latitude, \"lng\": job.longitude }), _defineProperty(_ref, 'jobTitle', job.jobtitle), _defineProperty(_ref, 'company', job.company), _defineProperty(_ref, 'formattedLocation', job.formattedLocation), _defineProperty(_ref, 'showInfo', false), _ref;\n    }),\n    toggleModal: state.toggleModal\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({\n    toggleModal: _index.toggleModal,\n    toggleModalOff: _index.toggleModalOff\n  }, dispatch);\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GMap);\n\n// {\n//   // Show InfoWindow only if `showInfo` key of the marker is `true`. That is, when the \n//   // Marker pin has been clicked and 'handleMarkerClick' has been successfully fired.\n//   marker.showInfo ? this.renderInfoWindow(index, marker) : null \n// }\n\n\n// function pinDropper() {\n//                 let markers = [];\n\n\n// const pinDropDelay = 1000,\n//                     delayPinDrop = (fn) => setTImeOut(fn, pinDropDelay); \n// delayPinDrop(() => newMarker, pinDropDelay);\n\n// const dropPins = () => setTimeout(function() { return newMarker; }, 1000);\n// dropPins();\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(307); if (makeExportsHot(module, __webpack_require__(82))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"google_map_component.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzczLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZ29vZ2xlX21hcF9jb21wb25lbnQuanM/Mjg5YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSRUFDVCBIT1QgTE9BREVSICovIGlmIChtb2R1bGUuaG90KSB7IChmdW5jdGlvbiAoKSB7IHZhciBSZWFjdEhvdEFQSSA9IHJlcXVpcmUoXCIvVXNlcnMvb2xpdmVyaXNlbnJpY2gvbm9kai9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWFwaS9tb2R1bGVzL2luZGV4LmpzXCIpLCBSb290SW5zdGFuY2VQcm92aWRlciA9IHJlcXVpcmUoXCIvVXNlcnMvb2xpdmVyaXNlbnJpY2gvbm9kai9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWxvYWRlci9Sb290SW5zdGFuY2VQcm92aWRlci5qc1wiKSwgUmVhY3RNb3VudCA9IHJlcXVpcmUoXCJyZWFjdC9saWIvUmVhY3RNb3VudFwiKSwgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7IG1vZHVsZS5tYWtlSG90ID0gbW9kdWxlLmhvdC5kYXRhID8gbW9kdWxlLmhvdC5kYXRhLm1ha2VIb3QgOiBSZWFjdEhvdEFQSShmdW5jdGlvbiAoKSB7IHJldHVybiBSb290SW5zdGFuY2VQcm92aWRlci5nZXRSb290SW5zdGFuY2VzKFJlYWN0TW91bnQpOyB9LCBSZWFjdCk7IH0pKCk7IH0gdHJ5IHsgKGZ1bmN0aW9uICgpIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RHb29nbGVNYXBzID0gcmVxdWlyZSgncmVhY3QtZ29vZ2xlLW1hcHMnKTtcblxudmFyIF9JbmZvQm94ID0gcmVxdWlyZSgncmVhY3QtZ29vZ2xlLW1hcHMvbGliL2FkZG9ucy9JbmZvQm94Jyk7XG5cbnZhciBfSW5mb0JveDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbmZvQm94KTtcblxudmFyIF9yZWFjdE1vZGFsID0gcmVxdWlyZSgncmVhY3QtbW9kYWwnKTtcblxudmFyIF9yZWFjdE1vZGFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0TW9kYWwpO1xuXG52YXIgX3JlZHV4ID0gcmVxdWlyZSgncmVkdXgnKTtcblxudmFyIF9yZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxudmFyIF9iYXNlX2NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYmFzZV9jb21wb25lbnQnKTtcblxudmFyIF9iYXNlX2NvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iYXNlX2NvbXBvbmVudCk7XG5cbnZhciBfZ29vZ2xlX21hcHNfbW9kYWxfY29tcG9uZW50ID0gcmVxdWlyZSgnLi9nb29nbGVfbWFwc19tb2RhbF9jb21wb25lbnQnKTtcblxudmFyIF9nb29nbGVfbWFwc19tb2RhbF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZ2xlX21hcHNfbW9kYWxfY29tcG9uZW50KTtcblxudmFyIF9nb29nbGVfbWFwX3N0eWxlcyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9nb29nbGVfbWFwX3N0eWxlcy5qc29uJyk7XG5cbnZhciBfZ29vZ2xlX21hcF9zdHlsZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZ2xlX21hcF9zdHlsZXMpO1xuXG52YXIgX2Zhdmljb24gPSByZXF1aXJlKCcuLi8uLi9wdWJsaWMvaW1nL2Zhdmljb24ucG5nJyk7XG5cbnZhciBfZmF2aWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYXZpY29uKTtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvaW5kZXgnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy8gQ29kZSBmb3IgcG90ZW50aWFsIGluY2x1c2lvbiBhdCBsYXRlciBkYXRlOlxudmFyIGdlb2xvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAvLyBjYW5Vc2VET00gJiYgbmF2aWdhdG9yLmdlb2xvY2F0aW9uIHx8IHtcbiAgLy8gICBnZXRDdXJyZW50UG9zaXRpb246IChzdWNjZXNzLCBmYWlsdXJlKSA9PiB7XG4gIC8vICAgICBmYWlsdXJlKGBZb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGdlb2xvY2F0aW9uLmApO1xuICAvLyAgIH0sXG4gIC8vIH1cbiAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICB2YXIgcG9zID0ge1xuICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgbG5nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXG4gICAgICB9O1xuICAgICAgLy8gY29uc29sZS5sb2coYExvY2F0aW9uIGZvdW5kOiAke3Bvcy5sYXR9ICR7cG9zLmxuZ31gKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBHb29nbGUgTWFwcyBMYXRMbmc6ICR7bmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwb3MubGF0LCBwb3MubG5nKX1gKTtcbiAgICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHBvcy5sYXQsIHBvcy5sbmcpO1xuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKGBZb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGdlb2xvY2F0aW9uLmApO1xuICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDM3Ljc0NTk1MSwgLTEyMi40Mzk0MjEpO1xuICB9XG59KCk7XG5cbnZhciBHTWFwID0gZnVuY3Rpb24gKF9CYXNlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHTWFwLCBfQmFzZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gR01hcChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHTWFwKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihHTWFwKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRlZmF1bHRDZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoMzcuNzQ1OTUxLCAtMTIyLjQzOTQyMSksXG4gICAgICBnZW9Qb3M6IG51bGwsXG4gICAgICB6b29tTGV2ZWw6IDEwXG4gICAgfTtcblxuICAgIF90aGlzLm1vZGFsTm8gPSBfdGhpcy5tb2RhbE5vLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmFkZFRpbWVEZWxheWVkTWFya2VyID0gX3RoaXMuYWRkVGltZURlbGF5ZWRNYXJrZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMubWFya2VyQ2FsbGJhY2tIYW5kbGVyID0gX3RoaXMubWFya2VyQ2FsbGJhY2tIYW5kbGVyLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHTWFwLCBbe1xuICAgIGtleTogJ2NlbnRlck1hcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNlbnRlck1hcCgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBGaXJzdCBtYXAgbWFya2VyIGNvb3JkaW5hdGVzOiAke3RoaXMucHJvcHMubWFya2Vyc1swXS5jb29yZHN9YCk7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5tYXJrZXJzLmxlbmd0aCA/IHRoaXMucHJvcHMubWFya2Vyc1swXS5jb29yZHMgOiB0aGlzLnN0YXRlLmRlZmF1bHRDZW50ZXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2VudGVyWm9vbU92ZXJVU0EnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjZW50ZXJab29tT3ZlclVTQSgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB6b29tTGV2ZWw6IDUgfSk7XG4gICAgfVxuXG4gICAgLy8gVG9nZ2xlIHRvICd0cnVlJyB0byBzaG93IEluZm9XaW5kb3cgYW5kIHJlLXJlbmRlciBjb21wb25lbnRcblxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlTWFya2VyQ2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNYXJrZXJDbGljayh0YXJnZXRNYXJrZXIpIHtcbiAgICAgIHRoaXMuY2xvc2VBbGxNYXJrZXJzKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWFya2VyczogdGhpcy5wcm9wcy5tYXJrZXJzLm1hcChmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcmtlciA9PT0gdGFyZ2V0TWFya2VyID8gT2JqZWN0LmFzc2lnbihtYXJrZXIsIHsgc2hvd0luZm86IHRydWUgfSkgOiBtYXJrZXI7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVNYXJrZXJDbG9zZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1hcmtlckNsb3NlKHRhcmdldE1hcmtlcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1hcmtlcnM6IHRoaXMucHJvcHMubWFya2Vycy5tYXAoZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICAgIHJldHVybiBtYXJrZXIgPT09IHRhcmdldE1hcmtlciA/IHsgbWFya2VyOiBtYXJrZXIsIHNob3dJbmZvOiBmYWxzZSB9IDogbWFya2VyO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xvc2VBbGxNYXJrZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VBbGxNYXJrZXJzKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1hcmtlcnM6IHRoaXMucHJvcHMubWFya2Vycy5tYXAoZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG1hcmtlciwgeyBzaG93SW5mbzogZmFsc2UgfSk7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJJbmZvV2luZG93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5mb1dpbmRvdyhtYXJrZXIsIHJlZiwgY29tcGFueSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBvbkNsb3NlY2xpY2sgPSB0aGlzLmhhbmRsZU1hcmtlckNsb3NlLmJpbmQodGhpcywgbWFya2VyKTtcbiAgICAgIHZhciBBTFBIQUJFVCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gICAgICBjb25zb2xlLmxvZygnTWFya2VyIEtleXM6ICcgKyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtYXJrZXIpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdKb2IgTmFtZTogJyArIG1hcmtlci5qb2JUaXRsZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0R29vZ2xlTWFwcy5JbmZvV2luZG93LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiByZWYgKyAnX2luZm9fd2luZG93JyxcbiAgICAgICAgICBvbkNsb3NlY2xpY2s6IG9uQ2xvc2VjbGljayB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGNvbXBhbnkubWFwKGZ1bmN0aW9uIChjb21wYW55TWFya2VyLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2g0JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2luZm9XaW5kb3dfSGVhZGVyJyB9LFxuICAgICAgICAgICAgICAgIEFMUEhBQkVUW190aGlzMi5wcm9wcy5tYXJrZXJzLmluZGV4T2YoY29tcGFueU1hcmtlcildICsgJy4gICdcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2g0JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2luZm9XaW5kb3dfSGVhZGVyJyB9LFxuICAgICAgICAgICAgICAgIF90aGlzMi5wYXJzZUFuZEZvcm1hdEpvYlRpdGxlKGNvbXBhbnlNYXJrZXIuam9iVGl0bGUpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaDUnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdpbmZvV2luZG93X0hlYWRlcicgfSxcbiAgICAgICAgICAgIG1hcmtlci5jb21wYW55XG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaHInLCBudWxsKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdwJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBtYXJrZXIuZm9ybWF0dGVkTG9jYXRpb25cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ2xhc3MgbWV0aG9kcyBmb3IgY29udHJvbCBvZiB0aGUgR29vZ2xlIE1hcHMgTW9kYWwgdmlzaWJpbGl0eTpcblxuICB9LCB7XG4gICAga2V5OiAnbW9kYWxZZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb2RhbFllcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnRvZ2dsZU1vZGFsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbW9kYWxObycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vZGFsTm8oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy50b2dnbGVNb2RhbE9mZigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZFRpbWVEZWxheWVkTWFya2VyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVGltZURlbGF5ZWRNYXJrZXIobWFya2VyLCBpbmRleCwgY29tcGFueSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBBTFBIQUJFVCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsXG4gICAgICAgICAgTUFYX1pJTkRFWCA9IDEwMDAsXG4gICAgICAgICAgb25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgIHJldHVybiBfdGhpczMuaGFuZGxlTWFya2VyQ2xpY2sobWFya2VyKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0R29vZ2xlTWFwcy5NYXJrZXIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgIHJlZjogJ21hcmtlcl8nICsgaW5kZXgsXG4gICAgICAgICAgJ2RhdGEtam9iVGl0bGUnOiBtYXJrZXIuam9iVGl0bGUsXG4gICAgICAgICAgJ2RhdGEtZm9ybWF0dGVkTG9jYXRpb24nOiBtYXJrZXIuZm9ybWF0dGVkTG9jYXRpb24sXG4gICAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobWFya2VyLmNvb3JkcylcbiAgICAgICAgICAvLyBhbmltYXRpb249e2dvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QfVxuICAgICAgICAgICwgdGl0bGU6IG1hcmtlci5jb21wYW55LFxuICAgICAgICAgIGljb246IF9mYXZpY29uMi5kZWZhdWx0XG4gICAgICAgICAgLy8gaWNvbj17YGRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnJTIweG1sbnMlM0RcImh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2Z1wiJTIwd2lkdGglM0RcIjM4XCIlMjBoZWlnaHQlM0RcIjM4XCIlMjB2aWV3Qm94JTNEXCIwJTIwMCUyMDM4JTIwMzhcIj48cGF0aCUyMGZpbGwlM0RcIiUyMzgwODA4MFwiJTIwc3Ryb2tlJTNEXCIlMjNjY2NcIiUyMHN0cm9rZS13aWR0aCUzRFwiLjVcIiUyMGQlM0RcIk0zNC4zMDUlMjAxNi4yMzRjMCUyMDguODMtMTUuMTQ4JTIwMTkuMTU4LTE1LjE0OCUyMDE5LjE1OFMzLjUwNyUyMDI1LjA2NSUyMDMuNTA3JTIwMTYuMWMwLTguNTA1JTIwNi44OTQtMTQuMzA0JTIwMTUuNC0xNC4zMDQlMjA4LjUwNCUyMDAlMjAxNS4zOTglMjA1LjkzMyUyMDE1LjM5OCUyMDE0LjQzOHpcIiUyRj48dGV4dCUyMHRyYW5zZm9ybSUzRFwidHJhbnNsYXRlJTI4MTklMjAxOC41JTI5XCIlMjBmaWxsJTNEXCIlMjNmZmZcIiUyMHN0eWxlJTNEXCJmb250LWZhbWlseSUzQSUyMEFyaWFsJTJDJTIwc2Fucy1zZXJpZiUzQmZvbnQtd2VpZ2h0JTNBYm9sZCUzQnRleHQtYWxpZ24lM0FjZW50ZXIlM0JcIiUyMGZvbnQtc2l6ZSUzRFwiMTJcIiUyMHRleHQtYW5jaG9yJTNEXCJtaWRkbGVcImB9XG4gICAgICAgICAgLCBvcGFjaXR5OiAwLjkwLFxuICAgICAgICAgIHpJbmRleDogTUFYX1pJTkRFWCxcbiAgICAgICAgICBsYWJlbDogeyBcInRleHRcIjogQUxQSEFCRVRbaW5kZXgrKyAlIGluZGV4XSB9LFxuICAgICAgICAgIHNob3dJbmZvOiBmYWxzZSxcbiAgICAgICAgICBvbkNsaWNrOiBvbkNsaWNrIH0sXG4gICAgICAgIG1hcmtlci5zaG93SW5mbyA/IHRoaXMucmVuZGVySW5mb1dpbmRvdyhtYXJrZXIsIGluZGV4LCBjb21wYW55KSA6IG51bGxcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWFya2VyQ2FsbGJhY2tIYW5kbGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFya2VyQ2FsbGJhY2tIYW5kbGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBnZXRNYXJrZXJzRm9yQ29tcGFueSA9IGZ1bmN0aW9uIGdldE1hcmtlcnNGb3JDb21wYW55KGNvbXBhbnkpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5wcm9wcy5tYXJrZXJzLmZpbHRlcihmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcmtlci5jb21wYW55ID09PSBjb21wYW55O1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBjb25zb2xlLmxvZyhcIkhvcml6b24sIEluYy46XCIsIGdldE1hcmtlcnNGb3JDb21wYW55KFwiSG9yaXpvbiBUZWNobm9sb2d5IFBhcnRuZXJzLCBJbmNcIikpO1xuXG4gICAgICB2YXIgdW5pcXVlQ29tcGFueU5hbWVzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShuZXcgU2V0KHRoaXMucHJvcHMubWFya2Vycy5tYXAoZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICByZXR1cm4gbWFya2VyLmNvbXBhbnk7XG4gICAgICB9KSkpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdVbmlxdWUgQ29tcGFueSBOYW1lczogJyArIHVuaXF1ZUNvbXBhbnlOYW1lcyk7XG5cbiAgICAgIHZhciBtYXJrZXJzQnlVbmlxdWVDb21wYW55TmFtZSA9IHt9O1xuICAgICAgdW5pcXVlQ29tcGFueU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBhbnlOYW1lKSB7XG4gICAgICAgIC8vIGlmICghbWFya2Vyc0J5VW5pcXVlQ29tcGFueU5hbWUuaGFzKG1hcmtlci5jb21wYW55KSkge1xuICAgICAgICAvLyAgIG1hcmtlcnNCeVVuaXF1ZUNvbXBhbnlOYW1lLnNldChtYXJrZXIuY29tcGFueSwgW21hcmtlcl0pO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKG1hcmtlcnNCeVVuaXF1ZUNvbXBhbnlOYW1lLmhhcyhtYXJrZXIuY29tcGFueSkpIHtcbiAgICAgICAgLy8gICBtYXJrZXJzQnlVbmlxdWVDb21wYW55TmFtZVttYXJrZXIuY29tcGFueV0ucHVzaChtYXJrZXIpO1xuICAgICAgICAvLyB9XG4gICAgICAgIG1hcmtlcnNCeVVuaXF1ZUNvbXBhbnlOYW1lW2NvbXBhbnlOYW1lXSA9IGdldE1hcmtlcnNGb3JDb21wYW55KGNvbXBhbnlOYW1lKTtcbiAgICAgIH0pO1xuICAgICAgLy8gbWFya2Vyc0J5VW5pcXVlQ29tcGFueU5hbWUuc2V0KFwiR09PR0xFXCIsIFwiQVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVW5pcXVlIE1hcmtlcnMgQnkgQ29tcGFueTpcIiwgT2JqZWN0LmtleXMobWFya2Vyc0J5VW5pcXVlQ29tcGFueU5hbWUpLCBPYmplY3QudmFsdWVzKG1hcmtlcnNCeVVuaXF1ZUNvbXBhbnlOYW1lKSk7XG5cbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKG1hcmtlcnNCeVVuaXF1ZUNvbXBhbnlOYW1lKS5tYXAoZnVuY3Rpb24gKGNvbXBhbnksIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfdGhpczQuYWRkVGltZURlbGF5ZWRNYXJrZXIoY29tcGFueVswXSwgaW5kZXgsIGNvbXBhbnkpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHJldHVybiB0aGlzLnByb3BzLm1hcmtlcnMubWFwKChtYXJrZXIsIGluZGV4KSA9PiB7XG4gICAgICAvLyAgIHJldHVybiB0aGlzLmFkZFRpbWVEZWxheWVkTWFya2VyKG1hcmtlciwgaW5kZXgpO1xuICAgICAgLy8gfSk7XG5cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdEdvb2dsZU1hcHMuR29vZ2xlTWFwTG9hZGVyLCB7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQ6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgaWQ6ICdtYXBzQ29udGFpbmVyJyxcbiAgICAgICAgICBvbkRvdWJsZUNsaWNrOiBmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5tb2RhbFllcygpO1xuICAgICAgICAgIH0gfSksXG4gICAgICAgIGdvb2dsZU1hcEVsZW1lbnQ6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9yZWFjdEdvb2dsZU1hcHMuR29vZ2xlTWFwLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNlbnRlcjogdGhpcy5jZW50ZXJNYXAoKSxcbiAgICAgICAgICAgIGRlZmF1bHRDZW50ZXI6IHRoaXMuc3RhdGUuZGVmYXVsdENlbnRlcixcbiAgICAgICAgICAgIGRlZmF1bHRab29tOiB0aGlzLnN0YXRlLnpvb21MZXZlbCxcbiAgICAgICAgICAgIG1heFpvb206IDE5LFxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHsgc3R5bGVzOiBfZ29vZ2xlX21hcF9zdHlsZXMyLmRlZmF1bHQgfSxcbiAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgICAgICAgIHJlZjogJ21hcCcgfSxcbiAgICAgICAgICB0aGlzLm1hcmtlckNhbGxiYWNrSGFuZGxlcigpLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9nb29nbGVfbWFwc19tb2RhbF9jb21wb25lbnQyLmRlZmF1bHQsIHsgY2VudGVyOiB0aGlzLmNlbnRlck1hcCgpLCBtb2RhbEVuYWJsZTogdGhpcy5tb2RhbFllcywgbW9kYWxEaXNhYmxlOiB0aGlzLm1vZGFsTm8gfSlcbiAgICAgICAgKVxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdNYXA7XG59KF9iYXNlX2NvbXBvbmVudDIuZGVmYXVsdCk7XG5cbnZhciBtYXBTdGF0ZVRvUHJvcHMgPSBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBtYXJrZXJzOiBzdGF0ZS5qb2JzLm1hcChmdW5jdGlvbiAoam9iKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAgIGNvb3JkczogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhqb2IubGF0aXR1ZGUsIGpvYi5sb25naXR1ZGUpXG4gICAgICB9LCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgJ2Nvb3JkcycsIHsgXCJsYXRcIjogam9iLmxhdGl0dWRlLCBcImxuZ1wiOiBqb2IubG9uZ2l0dWRlIH0pLCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgJ2pvYlRpdGxlJywgam9iLmpvYnRpdGxlKSwgX2RlZmluZVByb3BlcnR5KF9yZWYsICdjb21wYW55Jywgam9iLmNvbXBhbnkpLCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgJ2Zvcm1hdHRlZExvY2F0aW9uJywgam9iLmZvcm1hdHRlZExvY2F0aW9uKSwgX2RlZmluZVByb3BlcnR5KF9yZWYsICdzaG93SW5mbycsIGZhbHNlKSwgX3JlZjtcbiAgICB9KSxcbiAgICB0b2dnbGVNb2RhbDogc3RhdGUudG9nZ2xlTW9kYWxcbiAgfTtcbn07XG5cbnZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuICgwLCBfcmVkdXguYmluZEFjdGlvbkNyZWF0b3JzKSh7XG4gICAgdG9nZ2xlTW9kYWw6IF9pbmRleC50b2dnbGVNb2RhbCxcbiAgICB0b2dnbGVNb2RhbE9mZjogX2luZGV4LnRvZ2dsZU1vZGFsT2ZmXG4gIH0sIGRpc3BhdGNoKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfcmVhY3RSZWR1eC5jb25uZWN0KShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR01hcCk7XG5cbi8vIHtcbi8vICAgLy8gU2hvdyBJbmZvV2luZG93IG9ubHkgaWYgYHNob3dJbmZvYCBrZXkgb2YgdGhlIG1hcmtlciBpcyBgdHJ1ZWAuIFRoYXQgaXMsIHdoZW4gdGhlIFxuLy8gICAvLyBNYXJrZXIgcGluIGhhcyBiZWVuIGNsaWNrZWQgYW5kICdoYW5kbGVNYXJrZXJDbGljaycgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGZpcmVkLlxuLy8gICBtYXJrZXIuc2hvd0luZm8gPyB0aGlzLnJlbmRlckluZm9XaW5kb3coaW5kZXgsIG1hcmtlcikgOiBudWxsIFxuLy8gfVxuXG5cbi8vIGZ1bmN0aW9uIHBpbkRyb3BwZXIoKSB7XG4vLyAgICAgICAgICAgICAgICAgbGV0IG1hcmtlcnMgPSBbXTtcblxuXG4vLyBjb25zdCBwaW5Ecm9wRGVsYXkgPSAxMDAwLFxuLy8gICAgICAgICAgICAgICAgICAgICBkZWxheVBpbkRyb3AgPSAoZm4pID0+IHNldFRJbWVPdXQoZm4sIHBpbkRyb3BEZWxheSk7IFxuLy8gZGVsYXlQaW5Ecm9wKCgpID0+IG5ld01hcmtlciwgcGluRHJvcERlbGF5KTtcblxuLy8gY29uc3QgZHJvcFBpbnMgPSAoKSA9PiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3TWFya2VyOyB9LCAxMDAwKTtcbi8vIGRyb3BQaW5zKCk7XG5cbi8qIFJFQUNUIEhPVCBMT0FERVIgKi8gfSkuY2FsbCh0aGlzKTsgfSBmaW5hbGx5IHsgaWYgKG1vZHVsZS5ob3QpIHsgKGZ1bmN0aW9uICgpIHsgdmFyIGZvdW5kUmVhY3RDbGFzc2VzID0gbW9kdWxlLmhvdC5kYXRhICYmIG1vZHVsZS5ob3QuZGF0YS5mb3VuZFJlYWN0Q2xhc3NlcyB8fCBmYWxzZTsgaWYgKG1vZHVsZS5leHBvcnRzICYmIG1vZHVsZS5tYWtlSG90KSB7IHZhciBtYWtlRXhwb3J0c0hvdCA9IHJlcXVpcmUoXCIvVXNlcnMvb2xpdmVyaXNlbnJpY2gvbm9kai9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWxvYWRlci9tYWtlRXhwb3J0c0hvdC5qc1wiKTsgaWYgKG1ha2VFeHBvcnRzSG90KG1vZHVsZSwgcmVxdWlyZShcInJlYWN0XCIpKSkgeyBmb3VuZFJlYWN0Q2xhc3NlcyA9IHRydWU7IH0gdmFyIHNob3VsZEFjY2VwdE1vZHVsZSA9IHRydWUgJiYgZm91bmRSZWFjdENsYXNzZXM7IGlmIChzaG91bGRBY2NlcHRNb2R1bGUpIHsgbW9kdWxlLmhvdC5hY2NlcHQoZnVuY3Rpb24gKGVycikgeyBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoXCJDYW5ub3Qgbm90IGFwcGx5IGhvdCB1cGRhdGUgdG8gXCIgKyBcImdvb2dsZV9tYXBfY29tcG9uZW50LmpzXCIgKyBcIjogXCIgKyBlcnIubWVzc2FnZSk7IH0gfSk7IH0gfSBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHsgZGF0YS5tYWtlSG90ID0gbW9kdWxlLm1ha2VIb3Q7IGRhdGEuZm91bmRSZWFjdENsYXNzZXMgPSBmb3VuZFJlYWN0Q2xhc3NlczsgfSk7IH0pKCk7IH0gfVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9nb29nbGVfbWFwX2NvbXBvbmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDM3M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})