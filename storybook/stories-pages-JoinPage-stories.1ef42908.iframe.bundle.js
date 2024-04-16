"use strict";(self.webpackChunkmyrok_client=self.webpackChunkmyrok_client||[]).push([[727],{"./src/stories/pages/JoinPage.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>JoinPage_stories});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),Text=__webpack_require__("./src/components/common/Text/Text.tsx"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),animation=__webpack_require__("./src/styles/animation.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n\n  width: 100vw;\n  height: 90vh;\n  padding: 20px 40px;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  display: flex;\n  align-items: center;\n  overflow-x: hidden;\n  justify-content: flex-end;\n\n  height: 100%;\n  padding-right: 120px;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  position: fixed;\n  display: inline-block;\n  overflow: hidden;\n\n  top: calc(40vh - 100px);\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  width: 340px;\n  height: 380px;\n  gap: 10px;\n\n  animation: "," 0.6s ease-in-out forwards;\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n  gap: 80px;\n"]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n"]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal(["\n  width: 100%;\n  height: 60px;\n\n  border-radius: 14px;\n\n  box-shadow:\n    0 0 1px #1b1d1f33,\n    0 15px 25px #1b1d1f33,\n    0 5px 10px #1b1d1f1f;\n"]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal(["\n  display: flex;\n  justify-content: space-between;\n"]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal(["\n  padding: 0;\n\n  border-bottom: 1px solid ",";\n\n  font-size: 16px;\n  font-weight: 600;\n  color: ",";\n\n  &:hover {\n    opacity: 0.6;\n  }\n"]);return _templateObject9=function _templateObject(){return data},data}function _templateObject10(){var data=_tagged_template_literal(["\n  margin-bottom: 10px;\n\n  color: ",";\n"]);return _templateObject10=function _templateObject(){return data},data}function _templateObject11(){var data=_tagged_template_literal(["\n  display: flex;\n  justify-content: center;\n\n  width: 100%;\n\n  border-bottom: 1px solid ",";\n\n  font-size: 32px;\n  color: ",";\n"]);return _templateObject11=function _templateObject(){return data},data}function _templateObject12(){var data=_tagged_template_literal(["\n  padding: 10px 20px;\n\n  border: none;\n  border-radius: 14px;\n  background-color: ",";\n\n  font-size: 24px;\n"]);return _templateObject12=function _templateObject(){return data},data}function _templateObject13(){var data=_tagged_template_literal(["\n  display: flex;\n  justify-content: center;\n  align-self: flex-end;\n\n  width: 100px;\n\n  border-radius: 10px;\n"]);return _templateObject13=function _templateObject(){return data},data}function _templateObject14(){var data=_tagged_template_literal(["\n  height: 16px;\n  margin-left: 10px;\n  color: ",";\n"]);return _templateObject14=function _templateObject(){return data},data}var joinPageContainer=(0,emotion_react_browser_esm.AH)(_templateObject()),mainContainer=(0,emotion_react_browser_esm.AH)(_templateObject1()),titleWrapper=(0,emotion_react_browser_esm.AH)(_templateObject2()),inviteCodeForm=(0,emotion_react_browser_esm.AH)(_templateObject4()),bodyContainer=(0,emotion_react_browser_esm.AH)(_templateObject5()),inputWrapper=(0,emotion_react_browser_esm.AH)(_templateObject6()),inputContainer=(0,emotion_react_browser_esm.AH)(_templateObject7()),confirmButtonsContainer=(0,emotion_react_browser_esm.AH)(_templateObject8()),createPageButton=(0,emotion_react_browser_esm.AH)(_templateObject9(),Theme.S.color.primary,Theme.S.color.primary),explainText=(0,emotion_react_browser_esm.AH)(_templateObject10(),Theme.S.color.gray800),titleText=(0,emotion_react_browser_esm.AH)(_templateObject11(),Theme.S.color.primary,Theme.S.color.primary),inputTitle=(0,emotion_react_browser_esm.AH)(_templateObject12(),Theme.S.color.white),submitButton=(0,emotion_react_browser_esm.AH)(_templateObject13()),JoinPage_styles_warningText=(0,emotion_react_browser_esm.AH)(_templateObject14(),Theme.S.color.red),Input=__webpack_require__("./src/components/common/Input/Input.tsx"),BackButton=__webpack_require__("./src/components/common/BackButton/BackButton.tsx"),Button=__webpack_require__("./src/components/common/Button/Button.tsx"),react=__webpack_require__("./node_modules/react/index.js"),routes=__webpack_require__("./src/constants/routes.ts"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),useToast=__webpack_require__("./src/components/common/Toast/useToast.ts"),QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js"),project=__webpack_require__("./src/apis/project.ts"),api=__webpack_require__("./src/constants/api.ts"),usePostJoinProject=function(){var queryClient=(0,QueryClientProvider.jE)(),showToast=(0,useToast.d)().showToast;return{mutatePostJoinProject:(0,useMutation.n)({mutationFn:project.Q,onSuccess:function(){queryClient.invalidateQueries({queryKey:["userProjectInfo"]})},onError:function(error){var _error_message;error.code&&error.code===api.bo.INVALID_INVITE_CODE&&showToast("error",null!==(_error_message=error.message)&&void 0!==_error_message?_error_message:"잘못된 참여코드 입니다.")}}).mutate}};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var useJoinPage=function(inputRef){var _useState=_sliced_to_array((0,react.useState)(""),2),inviteCode=_useState[0],setInviteCode=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),isClicked=_useState1[0],setIsClicked=_useState1[1],_useState2=_sliced_to_array((0,react.useState)(!0),2),isRequired=_useState2[0],setIsRequired=_useState2[1],_useState3=_sliced_to_array((0,react.useState)(""),2),warningText=_useState3[0],setWarningText=_useState3[1],showToast=(0,useToast.d)().showToast,mutatePostJoinProject=usePostJoinProject().mutatePostJoinProject,navigate=(0,dist.Zp)();return{inviteCode:inviteCode,isClicked:isClicked,isRequired:isRequired,warningText:warningText,handlers:{handleInviteCodeChange:function(e){var rawCode=e.target.value,code=rawCode.replace(/[^A-z0-9]/g,"");rawCode.length!==code.length&&setWarningText(function(){return"영어 대,소문자와 숫자만 입력 가능합니다."}),rawCode.length===code.length&&setWarningText(function(){return""}),code.length>8&&setWarningText(function(){return"초대코드는 8자리입니다."}),setInviteCode(function(){return code.slice(0,8)})},handleProjectInviteCodeSubmit:function(e){if(e.preventDefault(),8!==inviteCode.length){var _inputRef_current;showToast("error","8자리 초대코드를 입력해주세요."),null===(_inputRef_current=inputRef.current)||void 0===_inputRef_current||_inputRef_current.focus();return}mutatePostJoinProject({inviteCode:inviteCode},{onSuccess:function(){showToast("success","프로젝트에 참여했어요!"),navigate(routes.b.DASH_BOARD)},onError:function(){var _inputRef_current;null===(_inputRef_current=inputRef.current)||void 0===_inputRef_current||_inputRef_current.focus(),setIsRequired(function(){return!0}),setIsClicked(function(){return!1}),setWarningText(function(){return""}),setInviteCode(function(){return""})}})},handleCreatePageClicked:function(e){e.preventDefault(),setIsRequired(function(){return!1}),setIsClicked(function(){return!0}),setWarningText(function(){return""}),setInviteCode(function(){return""})}}}},Title=__webpack_require__("./src/components/common/Title/Title.tsx");let JoinPage_stories={title:"pages/JoinPage",component:function(){var ref=(0,react.useRef)(null),inputRef=(0,react.useRef)(null),navigate=(0,dist.Zp)(),_useJoinPage=useJoinPage(inputRef),inviteCode=_useJoinPage.inviteCode,isClicked=_useJoinPage.isClicked,isRequired=_useJoinPage.isRequired,warningText=_useJoinPage.warningText,_useJoinPage_handlers=_useJoinPage.handlers,handleInviteCodeChange=_useJoinPage_handlers.handleInviteCodeChange,handleProjectInviteCodeSubmit=_useJoinPage_handlers.handleProjectInviteCodeSubmit,handleCreatePageClicked=_useJoinPage_handlers.handleCreatePageClicked;return(0,react.useEffect)(function(){isClicked&&null!==ref.current&&ref.current.getAnimations().forEach(function(animation){animation.onfinish=function(){return navigate(routes.b.CREATE)}})},[isClicked,navigate]),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:joinPageContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("main",{css:mainContainer,children:(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:(0,emotion_react_browser_esm.AH)(_templateObject3(),isClicked?animation.st:animation.z4),ref:ref,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Text.A,{weight:"semiBold",css:titleText,children:"프로젝트 참가하기"}),(0,emotion_react_jsx_runtime_browser_esm.FD)("form",{css:inviteCodeForm,onSubmit:handleProjectInviteCodeSubmit,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:bodyContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:inputContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:inputWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Input.A,{width:"100%",height:"100%",placeholder:"8자리 초대코드 입력",ref:inputRef,value:inviteCode,onChange:handleInviteCodeChange,css:inputTitle,required:isRequired})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Text.A,{size:"sm",weight:"bold",css:JoinPage_styles_warningText,children:warningText})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Text.A,{weight:"semiBold",css:explainText,children:"초대코드가 없으신가요?"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{variant:"plain",type:"button",css:createPageButton,"aria-label":"프로젝트 생성하기 페이지 이동",onClick:handleCreatePageClicked,children:"직접 프로젝트를 만들어보세요!"})]})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:confirmButtonsContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(BackButton.A,{label:"이전 단계로"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{variant:"primary",type:"submit",css:submitButton,disabled:inviteCode.length<8,"aria-label":"참가하기",children:"참가하기"})]})]})]})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:titleWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Title.A,{})})]})},parameters:{docs:{description:{component:"프로젝트 참가 페이지"}}}};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/apis/project.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>postJoinProject,U:()=>postCreateProject});var _apis_axiosInstance__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/axiosInstance.ts"),postCreateProject=function(data){return _apis_axiosInstance__WEBPACK_IMPORTED_MODULE_0__.S.post("/myrok/project",data)},postJoinProject=function(data){return _apis_axiosInstance__WEBPACK_IMPORTED_MODULE_0__.S.post("/myrok/project/participate",data)}},"./src/components/common/BackButton/BackButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BackButton_BackButton});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  transition: 0.3s;\n  transform: translateX(6px);\n\n  button:hover > & {\n    transform: translateX(0);\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  display: inline-flex;\n  align-items: center;\n  column-gap: 12px;\n\n  height: 42px;\n  padding: 4px;\n"]);return _templateObject1=function _templateObject(){return data},data}var arrowLeftIconWrapper=(0,emotion_react_browser_esm.AH)(_templateObject()),backButton=(0,emotion_react_browser_esm.AH)(_templateObject1()),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),svg=__webpack_require__("./src/assets/svg/index.ts"),Button=__webpack_require__("./src/components/common/Button/Button.tsx"),Text=__webpack_require__("./src/components/common/Text/Text.tsx"),BackButton=function(props){var label=props.label,href=props.href,navigate=(0,dist.Zp)();return(0,emotion_react_jsx_runtime_browser_esm.FD)(Button.A,{type:"button",variant:"plain",css:backButton,onClick:function(){href?navigate(href):navigate(-1)},children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:arrowLeftIconWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(svg.A6,{})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Text.A,{weight:"semiBold",children:label})]})};let BackButton_BackButton=BackButton;try{BackButton.displayName="BackButton",BackButton.__docgenInfo={description:"",displayName:"BackButton",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"enum",value:[{value:"0"},{value:'"/"'},{value:'"/login"'},{value:'"/start"'},{value:'"/join"'},{value:'"/create"'},{value:'"/dashboard"'},{value:'"/project-holder"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/BackButton/BackButton.tsx#BackButton"]={docgenInfo:BackButton.__docgenInfo,name:"BackButton",path:"src/components/common/BackButton/BackButton.tsx#BackButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Input_Input});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  width: ",";\n  height: ",";\n  padding: 6px;\n\n  border: 1px solid ",";\n\n  font-size: 14px;\n"]);return _templateObject=function _templateObject(){return data},data}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Input=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(function(props,ref){var width=props.width,height=props.height,rest=_object_without_properties(props,["width","height"]);return(0,emotion_react_jsx_runtime_browser_esm.Y)("input",_object_spread({css:(0,emotion_react_browser_esm.AH)(_templateObject(),width,height,Theme.S.color.gray200),ref:ref},rest))});Input.displayName="Input";let Input_Input=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/common/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}}}]);