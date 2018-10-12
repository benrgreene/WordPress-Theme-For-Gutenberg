/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/src/admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/src/admin.js":
/*!******************************!*\
  !*** ./scripts/src/admin.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar Fragment = wp.element.Fragment;\nvar InspectorControls = wp.editor.InspectorControls;\nvar PanelBody = wp.components.PanelBody;\n\n/**\n *  Add the custom block control \n */\n\nvar withInspectorControls = createHigherOrderComponent(function (BlockEdit) {\n  return function (props) {\n    return React.createElement(\n      Fragment,\n      null,\n      React.createElement(BlockEdit, props),\n      React.createElement(\n        InspectorControls,\n        null,\n        React.createElement(\n          PanelBody,\n          null,\n          \"Set Layout Type:\",\n          React.createElement(\n            \"select\",\n            { onChange: function onChange(event) {\n                props.setAttributes({ container: event.target.value });\n              }, value: props.attributes.container },\n            React.createElement(\n              \"option\",\n              { value: \"contained\" },\n              \"Contained\"\n            ),\n            React.createElement(\n              \"option\",\n              { value: \"full-width\" },\n              \"Full Width\"\n            )\n          )\n        )\n      )\n    );\n  };\n}, \"withInspectorControl\");\nwp.hooks.addFilter('editor.BlockEdit', 'brg-theme/with-inspector-controls', withInspectorControls);\n\n/**\n *  Need to set the container attribute for validation of the block\n */\nfunction setContainerValidation(block, blockType, innerHTML) {\n  // set the blocktype info for our new attribute\n  blockType.attributes.container = {\n    type: 'string',\n    default: 'contained'\n    // get the current blocks container type\n  };var dummyEl = document.createElement('div');\n  dummyEl.innerHTML = innerHTML;\n  var blockElement = dummyEl.firstChild;\n  var containerType = blockElement.getAttribute('container') || false;\n  // set that container type\n  if (containerType) {\n    block.container = containerType;\n  }\n  return block;\n}\nwp.hooks.addFilter('blocks.getBlockAttributes', 'brg-theme/validate-container-attributes', setContainerValidation);\n\n/**\n *  Need to set the new attribute value to save\n */\nfunction setContainerAttribute(el, type, atts) {\n  el.props.container = atts.container;\n  return el;\n}\nwp.hooks.addFilter('blocks.getSaveElement', 'brg-theme/save-container-attributes', setContainerAttribute);\n\n//# sourceURL=webpack:///./scripts/src/admin.js?");

/***/ })

/******/ });