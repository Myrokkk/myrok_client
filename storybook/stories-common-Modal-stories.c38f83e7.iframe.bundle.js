"use strict";(self.webpackChunkmyrok_client=self.webpackChunkmyrok_client||[]).push([[68],{"./src/stories/common/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,UnableToCloseWithBackdrop:()=>UnableToCloseWithBackdrop,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_components_common_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Modal/Modal.tsx"),_components_common_Text_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Text/Text.tsx");let __WEBPACK_DEFAULT_EXPORT__={title:"common/Modal",component:_components_common_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{docs:{description:{component:"하위 컴포넌트 조합으로 원하는 형태의 모달을 만들 수 있는 컴포넌트"}}}};var Default={render:function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Button,{act:"open",variant:"primary",children:"모달 열기"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Backdrop,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Layout,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{css:{top:"50%",right:"50%",width:"100px",height:"100px",backgroundColor:"white"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_Text_Text__WEBPACK_IMPORTED_MODULE_2__.A,{children:"모달 열림"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Button,{act:"close",variant:"primary",children:"모달 닫기"})]})})]})}},UnableToCloseWithBackdrop={render:function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Button,{act:"open",variant:"primary",children:"모달 열기"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Backdrop,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Layout,{isBackdropClosable:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{css:{top:"50%",right:"50%",width:"100px",height:"100px",backgroundColor:"white"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_Text_Text__WEBPACK_IMPORTED_MODULE_2__.A,{children:"모달 열림"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Button,{act:"close",variant:"primary",children:"모달 닫기"})]})})]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    return <Modal>\n        <Modal.Button act=\"open\" variant=\"primary\">\n          모달 열기\n        </Modal.Button>\n        <Modal.Backdrop />\n        <Modal.Layout>\n          <div css={{\n          top: '50%',\n          right: '50%',\n          width: '100px',\n          height: '100px',\n          backgroundColor: 'white'\n        }}>\n            <Text>모달 열림</Text>\n            <Modal.Button act=\"close\" variant=\"primary\">\n              모달 닫기\n            </Modal.Button>\n          </div>\n        </Modal.Layout>\n      </Modal>;\n  }\n}",...Default.parameters?.docs?.source}}},UnableToCloseWithBackdrop.parameters={...UnableToCloseWithBackdrop.parameters,docs:{...UnableToCloseWithBackdrop.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    return <Modal>\n        <Modal.Button act=\"open\" variant=\"primary\">\n          모달 열기\n        </Modal.Button>\n        <Modal.Backdrop />\n        <Modal.Layout isBackdropClosable={false}>\n          <div css={{\n          top: '50%',\n          right: '50%',\n          width: '100px',\n          height: '100px',\n          backgroundColor: 'white'\n        }}>\n            <Text>모달 열림</Text>\n            <Modal.Button act=\"close\" variant=\"primary\">\n              모달 닫기\n            </Modal.Button>\n          </div>\n        </Modal.Layout>\n      </Modal>;\n  }\n}",...UnableToCloseWithBackdrop.parameters?.docs?.source}}};let __namedExportsOrder=["Default","UnableToCloseWithBackdrop"]}}]);