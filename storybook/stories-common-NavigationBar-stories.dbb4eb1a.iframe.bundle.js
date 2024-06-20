"use strict";(self.webpackChunkmyrok_client=self.webpackChunkmyrok_client||[]).push([[422],{"./src/stories/common/NavigationBar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>NavigationBar_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),routes=__webpack_require__("./src/constants/routes.ts"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: flex;\n  width: 80px;\n  height: 100%;\n  padding: 14px 4px;\n\n  background-color: ",";\n  border-right: 2px solid ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  width: 100%;\n  height: 80%;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  display: flex;\n  align-items: center;\n\n  width: 100%;\n\n  flex-direction: column;\n\n  gap: 30px;\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  width: 62px;\n  height: 62px;\n  padding: 4px;\n\n  border-radius: 50%;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n\n  & > span {\n    margin-top: 3px;\n    font-size: 13px;\n  }\n\n  &.active {\n    background-color: ",";\n  }\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  width: 62px;\n  height: 62px;\n  padding: 4px;\n\n  border-radius: 50%;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal(["\n  font-size: 11px;\n"]);return _templateObject5=function _templateObject(){return data},data}var nav=(0,emotion_react_browser_esm.AH)(_templateObject(),Theme.S.color.white,Theme.S.color.gray250),menuContainer=(0,emotion_react_browser_esm.AH)(_templateObject1()),menuInnerContainer=(0,emotion_react_browser_esm.AH)(_templateObject2()),menuLink=(0,emotion_react_browser_esm.AH)(_templateObject3(),Theme.S.color.gray200,Theme.S.color.gray200);(0,emotion_react_browser_esm.AH)(_templateObject4(),Theme.S.color.gray200),(0,emotion_react_browser_esm.AH)(_templateObject5());var Text=__webpack_require__("./src/components/common/Text/Text.tsx"),svg=__webpack_require__("./src/assets/svg/index.ts"),Button=__webpack_require__("./src/components/common/Button/Button.tsx"),Modal=__webpack_require__("./src/components/common/Modal/Modal.tsx"),Input=__webpack_require__("./src/components/common/Input/Input.tsx");function TeamExitModal_styled_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TeamExitModal_styled_templateObject(){var data=TeamExitModal_styled_tagged_template_literal(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: ",";\n\n  width: 500px;\n  padding: 18px 22px;\n\n  border-radius: 10px;\n  background-color: ",";\n  box-shadow:\n    0 0 1px #1b1d1f33,\n    0 15px 25px #1b1d1f33,\n    0 5px 10px #1b1d1f1f;\n\n  transform: translate(-50%, -50%);\n"]);return TeamExitModal_styled_templateObject=function _templateObject(){return data},data}function TeamExitModal_styled_templateObject1(){var data=TeamExitModal_styled_tagged_template_literal(["\n  display: flex;\n  width: 100%;\n  height: 34px;\n  margin-bottom: 18px;\n\n  border-bottom: 1px solid ",";\n"]);return TeamExitModal_styled_templateObject1=function _templateObject(){return data},data}function TeamExitModal_styled_templateObject2(){var data=TeamExitModal_styled_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n  row-gap: 22px;\n\n  & > label {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    row-gap: 26px;\n  }\n"]);return TeamExitModal_styled_templateObject2=function _templateObject(){return data},data}function TeamExitModal_styled_templateObject3(){var data=TeamExitModal_styled_tagged_template_literal(["\n  display: flex;\n\n  column-gap: 10px;\n  margin-left: auto;\n"]);return TeamExitModal_styled_templateObject3=function _templateObject(){return data},data}function TeamExitModal_styled_templateObject4(){var data=TeamExitModal_styled_tagged_template_literal(["\n  display: flex;\n  align-items: center;\n\n  padding: 8px;\n  gap: 2px;\n  margin: 0 auto;\n"]);return TeamExitModal_styled_templateObject4=function _templateObject(){return data},data}function TeamExitModal_styled_templateObject5(){var data=TeamExitModal_styled_tagged_template_literal(["\n  text-decoration: underline;\n"]);return TeamExitModal_styled_templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=TeamExitModal_styled_tagged_template_literal(["\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  margin-bottom: 4px;\n  margin-left: auto;\n\n  svg {\n    width: 28px;\n    height: 28px;\n  }\n"]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=TeamExitModal_styled_tagged_template_literal(["\n  display: flex;\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n  flex-direction: column;\n\n  width: 50px;\n  height: 50px;\n  padding: 4px;\n\n  border-radius: 50%;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n\n  & > span {\n    margin-top: 3px;\n  }\n\n  &.active {\n    background-color: ",";\n  }\n"]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=TeamExitModal_styled_tagged_template_literal(["\n  padding: 0 10px;\n\n  font-size: 16px;\n\n  border-radius: 4px;\n  border: 1px solid ",";\n"]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=TeamExitModal_styled_tagged_template_literal(["\n  display: flex;\n  gap: 6px;\n"]);return _templateObject9=function _templateObject(){return data},data}var modalContainer=(0,emotion_react_browser_esm.AH)(TeamExitModal_styled_templateObject(),Theme.S.zIndex.modal,Theme.S.color.white),header=(0,emotion_react_browser_esm.AH)(TeamExitModal_styled_templateObject1(),Theme.S.color.gray300),body=(0,emotion_react_browser_esm.AH)(TeamExitModal_styled_templateObject2()),buttonContainer=(0,emotion_react_browser_esm.AH)(TeamExitModal_styled_templateObject3());(0,emotion_react_browser_esm.AH)(TeamExitModal_styled_templateObject4());var strongContent=(0,emotion_react_browser_esm.AH)(TeamExitModal_styled_templateObject5()),closeButton=(0,emotion_react_browser_esm.AH)(_templateObject6()),exitLink=(0,emotion_react_browser_esm.AH)(_templateObject7(),Theme.S.color.gray200,Theme.S.color.gray200),teamNameInput=(0,emotion_react_browser_esm.AH)(_templateObject8(),Theme.S.color.gray300),explainText=(0,emotion_react_browser_esm.AH)(_templateObject9()),react=__webpack_require__("./node_modules/react/index.js"),react_router_dist=__webpack_require__("./node_modules/react-router/dist/index.js"),useToast=__webpack_require__("./src/components/common/Toast/useToast.ts"),QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js"),project=__webpack_require__("./src/apis/project.ts"),useProject=__webpack_require__("./src/hooks/useProject.ts"),useDeleteProject=function(){var projectId=(0,useProject.B)().projectId,queryClient=(0,QueryClientProvider.jE)();return{mutateDeleteProject:(0,useMutation.n)({mutationFn:function(){return(0,project.xx)(projectId)},onSuccess:function(){queryClient.clear()}}).mutate}};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var useTeamExitModal=function(){var navigate=(0,react_router_dist.Zp)(),_useProject=(0,useProject.B)(),projectName=_useProject.projectName,resetProject=_useProject.resetProject,showToast=(0,useToast.d)().showToast,mutateDeleteProject=useDeleteProject().mutateDeleteProject,ref=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(""),2),teamName=_useState[0],setTeamName=_useState[1],handleResetInput=function(){setTeamName(function(){return""})};return{teamName:teamName,projectName:projectName,ref:ref,handlers:{handleTeamNameChange:function(e){var target=e.target;setTeamName(function(){return target.value})},handleSubmit:function(){if(teamName.trim()!==projectName){showToast("error","탈퇴하려는 팀 이름과 일치하지 않습니다.");return}confirm("정말 팀을 탈퇴하시겠어요? \n 해당 작업은 되돌릴 수 없습니다.")&&mutateDeleteProject(void 0,{onSuccess:function(){var _ref_current;resetProject(),handleResetInput(),null===(_ref_current=ref.current)||void 0===_ref_current||_ref_current.click(),showToast("success","팀 탈퇴가 완료되었습니다."),navigate(routes.b.START)}})},handleResetInput:handleResetInput}}};let TeamExitModal_TeamExitModal=function(){var _useTeamExitModal=useTeamExitModal(),teamName=_useTeamExitModal.teamName,projectName=_useTeamExitModal.projectName,ref=_useTeamExitModal.ref,_useTeamExitModal_handlers=_useTeamExitModal.handlers,handleTeamNameChange=_useTeamExitModal_handlers.handleTeamNameChange,handleSubmit=_useTeamExitModal_handlers.handleSubmit,handleResetInput=_useTeamExitModal_handlers.handleResetInput;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(Modal.A,{children:[(0,jsx_runtime.jsxs)(Modal.A.Button,{variant:"normal",act:"open",css:exitLink,children:[(0,jsx_runtime.jsx)(svg.Gq,{}),(0,jsx_runtime.jsx)(Text.A,{size:"xxs",children:"팀 나가기"})]}),(0,jsx_runtime.jsx)(Modal.A.Backdrop,{}),(0,jsx_runtime.jsxs)(Modal.A.Layout,{css:modalContainer,children:[(0,jsx_runtime.jsx)("div",{css:header,children:(0,jsx_runtime.jsx)(Modal.A.Button,{act:"close",css:closeButton,ref:ref,handleClickCallback:handleResetInput,children:(0,jsx_runtime.jsx)(svg.nd,{})})}),(0,jsx_runtime.jsxs)("div",{css:body,children:[(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsxs)("div",{css:explainText,children:[(0,jsx_runtime.jsx)(Text.A,{size:"lg",children:"팀 탈퇴를 위해 "}),(0,jsx_runtime.jsx)(Text.A,{size:"lg",weight:"semiBold",css:strongContent,children:projectName}),(0,jsx_runtime.jsx)(Text.A,{children:"을(를) 입력해 주세요."})]}),(0,jsx_runtime.jsx)(Input.A,{width:"340px",height:"40px",placeholder:projectName,css:teamNameInput,autoFocus:!0,required:!0,value:teamName,onChange:handleTeamNameChange})]}),(0,jsx_runtime.jsxs)("div",{css:buttonContainer,children:[(0,jsx_runtime.jsx)(Modal.A.Button,{type:"button",variant:"primary",act:"close",handleClickCallback:handleResetInput,children:"취소"}),(0,jsx_runtime.jsx)(Button.A,{type:"button",onClick:handleSubmit,disabled:teamName!==projectName,children:"확인"})]})]})]})]})})},NavigationBar_stories={title:"common/NavigationBar",component:function(){return(0,jsx_runtime.jsx)("nav",{css:nav,children:(0,jsx_runtime.jsxs)("div",{css:menuContainer,children:[(0,jsx_runtime.jsxs)("div",{css:menuInnerContainer,children:[(0,jsx_runtime.jsxs)(dist.k2,{css:menuLink,to:routes.b.DASH_BOARD,children:[(0,jsx_runtime.jsx)(svg.fA,{}),(0,jsx_runtime.jsx)(Text.A,{size:"sm",children:"대시보드"})]}),(0,jsx_runtime.jsxs)(dist.k2,{css:menuLink,to:routes.b.MEETING_MINUTES,children:[(0,jsx_runtime.jsx)(svg.B6,{}),(0,jsx_runtime.jsx)(Text.A,{size:"sm",children:"회의록"})]})]}),(0,jsx_runtime.jsx)(TeamExitModal_TeamExitModal,{})]})})},tags:["autodocs"]};var Default={args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/components/common/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Input_Input});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  width: ",";\n  height: ",";\n  padding: 6px;\n\n  border: 1px solid ",";\n\n  font-size: 14px;\n"]);return _templateObject=function _templateObject(){return data},data}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Input=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(function(props,ref){var width=props.width,height=props.height,rest=_object_without_properties(props,["width","height"]);return(0,emotion_react_jsx_runtime_browser_esm.Y)("input",_object_spread({css:(0,emotion_react_browser_esm.AH)(_templateObject(),width,height,Theme.S.color.gray200),ref:ref},rest))});Input.displayName="Input";let Input_Input=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/common/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}}}]);