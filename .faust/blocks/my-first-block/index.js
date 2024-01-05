/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./wp-blocks/my-first-block/MyFirstBlock.jsx":
/*!***************************************************!*\
  !*** ./wp-blocks/my-first-block/MyFirstBlock.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyFirstBlock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function MyFirstBlock(props) {
  const {
    style,
    attributes
  } = props;
  const styles = {
    ...style
  };
  const cssClassName = 'create-block-my-first-block';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: styles,
    className: cssClassName,
    dangerouslySetInnerHTML: {
      __html: attributes.message
    }
  });
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/components/Edit.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/components/Edit.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _Preview_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Preview.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/components/Preview.js");
/* harmony import */ var _EditFormFields_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditFormFields.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/components/EditFormFields.js");
/* harmony import */ var _helpers_getControlFields_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/getControlFields.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/helpers/getControlFields.js");





function Edit(ctx) {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
    const { block, props, blockJson } = ctx;
    const { editorFields = [] } = block.config;
    const fieldsConfig = (0,_helpers_getControlFields_js__WEBPACK_IMPORTED_MODULE_4__["default"])(blockJson, 
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    editorFields);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", Object.assign({}, blockProps), props.isSelected ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditFormFields_js__WEBPACK_IMPORTED_MODULE_3__["default"], { props: props, fields: fieldsConfig, blockJson: blockJson })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Preview_js__WEBPACK_IMPORTED_MODULE_2__["default"], { block: block, props: props }))));
}


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/components/EditFormFields.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/components/EditFormFields.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _InspectorFields_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectorFields.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/components/InspectorFields.js");
/* harmony import */ var _EditorForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorForm.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/components/EditorForm.js");



function EditFormFields({ props, fields, blockJson, }) {
    const inspectorFields = fields.filter((field) => field.location === 'inspector');
    const editorFields = fields.filter((field) => field.location === 'editor');
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InspectorFields_js__WEBPACK_IMPORTED_MODULE_1__["default"], { fields: inspectorFields, props: props }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditorForm_js__WEBPACK_IMPORTED_MODULE_2__["default"], { fields: editorFields, props: props, blockJson: blockJson })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditFormFields);


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/components/EditorForm.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/components/EditorForm.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");



const styles = {
    form: {
        padding: '0 10px',
        margin: '20px 0',
        border: '1px solid black',
    },
    icon: {
        marginRight: '10px',
    },
    heading: {
        margin: '10px 0',
        display: 'flex',
        alignItems: 'center',
    },
};
function EditorForm({ fields, props, blockJson, }) {
    const loadedControls = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('faustBlockEditorUtils.controls', {});
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "faust-editor-form", "aria-label": "Faust block editor form", style: styles.form },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: "faust-editor-form__heading", style: styles.heading },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, { size: 24, icon: blockJson === null || blockJson === void 0 ? void 0 : blockJson.icon, style: styles.icon }),
            blockJson.title),
        fields.map((field) => {
            const ControlField = loadedControls[field.control];
            if (!ControlField) {
                return null;
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ControlField, { config: field, props: props, key: `editor-field-${field.name}` }));
        })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorForm);


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/components/InspectorFields.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/components/InspectorFields.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");




function InspectorFields({ fields, props, }) {
    const loadedControls = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('faustBlockEditorUtils.controls', {});
    const renderFields = () => {
        return fields
            .map((field) => {
            const ControlField = loadedControls[field.control];
            if (!ControlField) {
                return null;
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, { className: "faust-inspector-form-field", key: `inspector-controls-panel-${field.name}` },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(ControlField, { config: field, props: props })));
        })
            .filter(Boolean);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, { key: "FaustBlockInspectorControls" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderFields())));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InspectorFields);


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/components/Preview.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/components/Preview.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");


const overlayStyle = {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
};
function Preview({ block: Block, props, }) {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
    const allBlockProps = Object.assign(Object.assign({ key: null }, blockProps), props);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Block, Object.assign({}, allBlockProps),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, null)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: overlayStyle })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preview);


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/components/Save.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/components/Save.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");


function Save(ctx) {
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
    const { block: Block, props } = ctx;
    const allBlockProps = Object.assign(Object.assign({ key: null }, blockProps), props);
    return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(Block, Object.assign({}, allBlockProps),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
}


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Checkbox.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Checkbox.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");


function Checkbox({ config, props, }) {
    const onChange = (newContent) => {
        props.setAttributes({ [config.name]: newContent });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, { label: config.label, checked: props.attributes[config.name], onChange: onChange }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Color.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Color.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");


function Color({ config, props, }) {
    const onChange = (newContent) => {
        props.setAttributes({ [config.name]: newContent });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { style: { marginBottom: '10px' } }, config.label),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, { color: props.attributes[config.name], onChange: onChange })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Color);


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Number.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Number.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");


function NumberField({ config, props, }) {
    const onChange = (newContent) => {
        props.setAttributes({ [config.name]: Number(newContent) });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, { type: "number", label: config.label, value: props.attributes[config.name], onChange: onChange }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberField);


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Radio.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Radio.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");


function Radio({ config, props, }) {
    const onChange = (newContent) => {
        props.setAttributes({ [config.name]: String(newContent) });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, { label: config.label, selected: props.attributes[config.name], options: config.options, onChange: onChange }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radio);


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Range.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Range.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");


function Range({ config, props, }) {
    const onChange = (newContent) => {
        props.setAttributes({ [config.name]: newContent });
    };
    const params = Object.assign(Object.assign({}, config), { control: 'range' }); // TODO use satisfies operator when using TS v5
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, { label: params.label, onChange: onChange, value: props.attributes[config.name], min: params === null || params === void 0 ? void 0 : params.min, max: params === null || params === void 0 ? void 0 : params.max }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Range);


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Select.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Select.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");


function Select({ config, props, }) {
    const onChange = (newContent) => {
        props.setAttributes({ [config.name]: String(newContent) });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, { label: config.label, value: props.attributes[config.name], options: config.options, onChange: onChange }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Text.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Text.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");


function Text({ config, props, }) {
    const onChange = (newContent) => {
        props.setAttributes({ [config.name]: newContent });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, { label: config.label, value: props.attributes[config.name], onChange: onChange }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_registerControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/registerControl.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/helpers/registerControl.js");
/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Text.js");
/* harmony import */ var _Number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Number.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Number.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Color.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Color.js");
/* harmony import */ var _Checkbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Checkbox.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Checkbox.js");
/* harmony import */ var _Select_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Select.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Select.js");
/* harmony import */ var _Radio_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Radio.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Radio.js");
/* harmony import */ var _Range_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Range.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/Range.js");








(0,_helpers_registerControl_js__WEBPACK_IMPORTED_MODULE_0__["default"])('text', _Text_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
(0,_helpers_registerControl_js__WEBPACK_IMPORTED_MODULE_0__["default"])('number', _Number_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
(0,_helpers_registerControl_js__WEBPACK_IMPORTED_MODULE_0__["default"])('color', _Color_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
(0,_helpers_registerControl_js__WEBPACK_IMPORTED_MODULE_0__["default"])('checkbox', _Checkbox_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
(0,_helpers_registerControl_js__WEBPACK_IMPORTED_MODULE_0__["default"])('select', _Select_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
(0,_helpers_registerControl_js__WEBPACK_IMPORTED_MODULE_0__["default"])('radio', _Radio_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
(0,_helpers_registerControl_js__WEBPACK_IMPORTED_MODULE_0__["default"])('range', _Range_js__WEBPACK_IMPORTED_MODULE_7__["default"]);


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/helpers/getControlFields.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/helpers/getControlFields.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const blockAttributeTypeToControlMap = {
    string: 'text',
    boolean: 'radio',
    integer: 'number',
    number: 'number',
    object: 'textarea',
    array: 'textarea',
};
/**
 * Returns a list of Field objects that describe how the Component Editor Fields configuration.
 * Uses both the Block.json and the blocks editorFields config to create the final list.
 * The logic is explained in detail in the RFC document for React Components To Blocks.
 *
 * @param blockJson Block.json object
 * @param editorFields Block config editorFields metadata
 * @returns
 */
function getControlFields(blockJson, editorFields) {
    const fields = [];
    Object.entries(blockJson.attributes).forEach(([key, value]) => {
        var _a, _b, _c, _d, _e, _f;
        const fieldConfig = (_a = Object.entries(editorFields).find(([name]) => {
            return key === name;
        })) === null || _a === void 0 ? void 0 : _a[1];
        const fieldType = value.type;
        const control = (_b = blockAttributeTypeToControlMap[fieldType]) !== null && _b !== void 0 ? _b : 'text';
        // Set default field by merging both blockAttributes meta and editorFields hints.
        if (fieldConfig) {
            fields.push(Object.assign(Object.assign({}, fieldConfig), { name: key, label: (_c = fieldConfig.label) !== null && _c !== void 0 ? _c : key, type: fieldType, location: (_d = fieldConfig.location) !== null && _d !== void 0 ? _d : 'editor', control: (_e = fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.control) !== null && _e !== void 0 ? _e : control, options: (_f = fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.options) !== null && _f !== void 0 ? _f : [] }));
        }
        else {
            // Set default field by using only blockAttributes meta
            fields.push({
                name: key,
                label: key,
                type: fieldType,
                location: 'editor',
                control,
                options: [],
            });
        }
    });
    return fields;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getControlFields);


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/helpers/registerControl.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/helpers/registerControl.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");

function registerControl(name, control) {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('faustBlockEditorUtils.controls', 'faust-block-editor-utils', (controls) => {
        // eslint-disable-next-line no-param-reassign
        controls[name] = control;
        return controls;
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerControl);


/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerFaustBlock: () => (/* reexport safe */ _registerFaustBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _registerFaustBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerFaustBlock.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/registerFaustBlock.js");




/***/ }),

/***/ "./node_modules/@faustwp/block-editor-utils/dist/mjs/registerFaustBlock.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@faustwp/block-editor-utils/dist/mjs/registerFaustBlock.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerFaustBlock)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _components_Save_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Save.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/components/Save.js");
/* harmony import */ var _components_Edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Edit.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/components/Edit.js");
/* harmony import */ var _controls_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/index.js */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/controls/index.js");




/**
 * The `registerFaustBlock` helper function registers a new React Component into the Gutenberg Editor.
 * By providing a valid `block.json` and some configuration, this helper function will generate custom `edit` and `save` functions that will be used a parameters to the
 * [registerBlockType](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/#registerblocktype) function.
 *
 * Users can provider their own custom edit or save functions by passing them as parameters to the ctx argument.
 * Use `editFn` to override the `edit` function and `saveFn` to override the `save` function
 *
 * @param block The React component to register as Gutenberg Block.
 * @param ctx  The metadata object that contains the block.json.
 */
function registerFaustBlock(block, { blockJson, editFn = _components_Edit_js__WEBPACK_IMPORTED_MODULE_2__["default"], saveFn = _components_Save_js__WEBPACK_IMPORTED_MODULE_1__["default"], }) {
    var _a, _b, _c;
    // Pass the block config as a separate argument
    const { config } = block;
    const name = (_c = (_b = (_a = blockJson.name) !== null && _a !== void 0 ? _a : config === null || config === void 0 ? void 0 : config.name) !== null && _b !== void 0 ? _b : block.displayName) !== null && _c !== void 0 ? _c : block.name;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, Object.assign(Object.assign({}, blockJson), { edit: (props) => editFn({
            block,
            blockJson,
            config,
            props,
            wp,
        }), save: (props) => saveFn({
            block,
            props,
            wp,
        }) }));
}


/***/ }),

/***/ "./wp-blocks/my-first-block/block.json":
/*!*********************************************!*\
  !*** ./wp-blocks/my-first-block/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"create-block/my-first-block","version":"0.1.0","title":"My First Block","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","supports":{"html":false},"attributes":{"message":{"type":"string","default":"My First Block"},"bg_color":{"type":"string","default":"#000000"},"text_color":{"type":"string","default":"#ffffff"}},"textdomain":"my-first-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./wp-blocks/my-first-block/index.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./wp-blocks/my-first-block/block.json");
/* harmony import */ var _MyFirstBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyFirstBlock */ "./wp-blocks/my-first-block/MyFirstBlock.jsx");
/* harmony import */ var _faustwp_block_editor_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @faustwp/block-editor-utils */ "./node_modules/@faustwp/block-editor-utils/dist/mjs/index.js");
// import './style.scss';
// import block.json


// import our React component



// Register the React component in Gutenberg
(0,_faustwp_block_editor_utils__WEBPACK_IMPORTED_MODULE_2__.registerFaustBlock)(_MyFirstBlock__WEBPACK_IMPORTED_MODULE_1__["default"], {
  blockJson: _block_json__WEBPACK_IMPORTED_MODULE_0__
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map