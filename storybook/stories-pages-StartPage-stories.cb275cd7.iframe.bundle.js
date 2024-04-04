"use strict";(self.webpackChunkmyrok_client=self.webpackChunkmyrok_client||[]).push([[539],{"./src/stories/pages/\bStartPage.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>_StartPage_stories});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),Text=__webpack_require__("./src/components/common/Text/Text.tsx"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),animation=__webpack_require__("./src/styles/animation.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n\n  width: 100vw;\n  height: 90vh;\n  padding: 20px 40px;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  display: flex;\n  align-items: center;\n  overflow-x: hidden;\n  justify-content: flex-end;\n\n  height: 100%;\n  padding-right: 120px;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  position: fixed;\n  display: inline-block;\n  overflow: hidden;\n\n  top: calc(40vh - 100px);\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  width: 340px;\n  height: 460px;\n\n  animation: "," 0.6s ease-in-out forwards;\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal(["\n  color: ",";\n"]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal(["\n  width: 100%;\n  height: 70px;\n  padding: 16px 80px;\n\n  border-radius: 14px;\n\n  font-size: 32px;\n  font-weight: 600;\n\n  box-shadow:\n    0 0 1px #1b1d1f33,\n    0 15px 25px #1b1d1f33,\n    0 5px 10px #1b1d1f1f;\n"]);return _templateObject6=function _templateObject(){return data},data}var startPageContainer=(0,emotion_react_browser_esm.AH)(_templateObject()),mainContainer=(0,emotion_react_browser_esm.AH)(_templateObject1()),titleWrapper=(0,emotion_react_browser_esm.AH)(_templateObject2()),buttonContainer=(0,emotion_react_browser_esm.AH)(_templateObject4()),explainText=(0,emotion_react_browser_esm.AH)(_templateObject5(),Theme.S.color.gray800),startTeamButton=function(){return(0,emotion_react_browser_esm.AH)(_templateObject6())},Button=__webpack_require__("./src/components/common/Button/Button.tsx"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),routes=__webpack_require__("./src/constants/routes.ts"),Title=__webpack_require__("./src/components/common/Title/Title.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let _StartPage_stories={title:"pages/StartPage",component:function(){var navigate=(0,dist.Zp)(),ref=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(),2),clickedButton=_useState[0],setClickedButton=_useState[1],handleButtonClick=function(value){setClickedButton(function(){return value})};return(0,react.useEffect)(function(){clickedButton&&null!==ref.current&&ref.current.getAnimations().forEach(function(animation){animation.onfinish=function(){return"create"===clickedButton?navigate(routes.b.CREATE):navigate(routes.b.JOIN)}})},[clickedButton,navigate]),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:startPageContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("main",{css:mainContainer,children:(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:(0,emotion_react_browser_esm.AH)(_templateObject3(),clickedButton&&animation.st),ref:ref,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:buttonContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Text.A,{weight:"semiBold",css:explainText,children:"우리만의 공간이 필요하신가요?"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{variant:"primary",css:startTeamButton(),onClick:function(){return handleButtonClick("create")},"aria-label":"프로젝트 생성",children:"프로젝트 생성"})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:buttonContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Text.A,{weight:"semiBold",css:explainText,children:"초대코드가 있으신가요?"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{variant:"normal",css:startTeamButton(),onClick:function(){return handleButtonClick("join")},"aria-label":"프로젝트 참가",children:"프로젝트 참가"})]})]})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:titleWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Title.A,{})})]})},parameters:{docs:{description:{component:"프로젝트 생성/참가 고르는 페이지"}}}};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/components/common/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Button_Button});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  font-size: 16px;\n  line-height: 16px;\n  text-align: center;\n\n  border: none;\n  border-radius: 4px;\n\n  transition: all 0.2s ease-in;\n\n  cursor: pointer;\n\n  &:disabled {\n    opacity: 0.4;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var buttonStyling=(0,emotion_react_browser_esm.AH)(_templateObject());function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Button=function(props,ref){var size,_props_size=props.size,_props_variant=props.variant,variant=void 0===_props_variant?"normal":_props_variant,children=props.children,_props_type=props.type,attributes=_object_without_properties(props,["size","variant","children","type"]);return(0,emotion_react_jsx_runtime_browser_esm.Y)("button",_object_spread_props(_object_spread({css:[(size=void 0===_props_size?"md":_props_size,({lg:(0,emotion_react_browser_esm.AH)({padding:"".concat("plain"!==variant&&"14px 16px")}),md:(0,emotion_react_browser_esm.AH)({padding:"".concat("plain"!==variant&&"12px 16px")}),sm:(0,emotion_react_browser_esm.AH)({padding:"".concat("plain"!==variant&&"8px 12px")})})[size]),{primary:(0,emotion_react_browser_esm.AH)({backgroundColor:Theme.S.color.primary,color:Theme.S.color.white,"&:hover:enabled":{backgroundColor:Theme.S.color.primary500},"&:focus":{boxShadow:"0 0 0 3px ".concat(Theme.S.color.primary500)}}),normal:(0,emotion_react_browser_esm.AH)({backgroundColor:Theme.S.color.white,color:Theme.S.color.primary500,"&:hover:enabled":{backgroundColor:"".concat(Theme.S.color.gray200)},"&:focus":{boxShadow:"0 0 0 3px ".concat(Theme.S.color.gray200)}}),plain:(0,emotion_react_browser_esm.AH)({backgroundColor:"transparent",color:Theme.S.color.gray900,"&:focus":{boxShadow:"0 0 0 3px ".concat(Theme.S.color.gray200)}})}[variant],buttonStyling],ref:ref,type:void 0===_props_type?"button":_props_type},attributes),{children:children}))};let Button_Button=(0,react.forwardRef)(Button);try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"normal"'},{value:'"plain"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/common/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Title/Title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Title_Title});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n\n  width: fit-content;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  font-size: 50px;\n  font-weight: 800;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  font-size: 180px;\n  font-weight: 800;\n"]);return _templateObject2=function _templateObject(){return data},data}var titleContainer=(0,emotion_react_browser_esm.AH)(_templateObject()),explainText=(0,emotion_react_browser_esm.AH)(_templateObject1()),titleText=(0,emotion_react_browser_esm.AH)(_templateObject2());let Title_Title=function(){return(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:titleContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:explainText,children:"너와 나의 회의록"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:titleText,children:"마이록"})]})}}}]);