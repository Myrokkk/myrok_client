"use strict";(self.webpackChunkmyrok_client=self.webpackChunkmyrok_client||[]).push([[412],{"./node_modules/@tanstack/react-query/build/modern/useMutation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>useMutation});var react=__webpack_require__("./node_modules/react/index.js"),mutation=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/mutation.js"),notifyManager=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/notifyManager.js"),subscribable=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/subscribable.js"),utils=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/utils.js"),MutationObserver=class extends subscribable.Q{#client;#currentResult=void 0;#currentMutation;#mutateOptions;constructor(client,options){super(),this.#client=client,this.setOptions(options),this.bindMethods(),this.#updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(options){let prevOptions=this.options;this.options=this.#client.defaultMutationOptions(options),(0,utils.f8)(this.options,prevOptions)||this.#client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#currentMutation,observer:this}),prevOptions?.mutationKey&&this.options.mutationKey&&(0,utils.EN)(prevOptions.mutationKey)!==(0,utils.EN)(this.options.mutationKey)?this.reset():this.#currentMutation?.state.status==="pending"&&this.#currentMutation.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#currentMutation?.removeObserver(this)}onMutationUpdate(action){this.#updateResult(),this.#notify(action)}getCurrentResult(){return this.#currentResult}reset(){this.#currentMutation?.removeObserver(this),this.#currentMutation=void 0,this.#updateResult(),this.#notify()}mutate(variables,options){return this.#mutateOptions=options,this.#currentMutation?.removeObserver(this),this.#currentMutation=this.#client.getMutationCache().build(this.#client,this.options),this.#currentMutation.addObserver(this),this.#currentMutation.execute(variables)}#updateResult(){let state=this.#currentMutation?.state??(0,mutation.$)();this.#currentResult={...state,isPending:"pending"===state.status,isSuccess:"success"===state.status,isError:"error"===state.status,isIdle:"idle"===state.status,mutate:this.mutate,reset:this.reset}}#notify(action){notifyManager.j.batch(()=>{if(this.#mutateOptions&&this.hasListeners()){let variables=this.#currentResult.variables,context=this.#currentResult.context;action?.type==="success"?(this.#mutateOptions.onSuccess?.(action.data,variables,context),this.#mutateOptions.onSettled?.(action.data,null,variables,context)):action?.type==="error"&&(this.#mutateOptions.onError?.(action.error,variables,context),this.#mutateOptions.onSettled?.(void 0,action.error,variables,context))}this.listeners.forEach(listener=>{listener(this.#currentResult)})})}},QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),modern_utils=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/utils.js");function useMutation(options,queryClient){let client=(0,QueryClientProvider.jE)(queryClient),[observer]=react.useState(()=>new MutationObserver(client,options));react.useEffect(()=>{observer.setOptions(options)},[observer,options]);let result=react.useSyncExternalStore(react.useCallback(onStoreChange=>observer.subscribe(notifyManager.j.batchCalls(onStoreChange)),[observer]),()=>observer.getCurrentResult(),()=>observer.getCurrentResult()),mutate=react.useCallback((variables,mutateOptions)=>{observer.mutate(variables,mutateOptions).catch(modern_utils.l)},[observer]);if(result.error&&(0,modern_utils.G)(observer.options.throwOnError,[result.error]))throw result.error;return{...result,mutate,mutateAsync:result.mutate}}},"./node_modules/react-router-dom/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k2:()=>NavLink});var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache,react_dom__WEBPACK_IMPORTED_MODULE_1___namespace_cache,DataRouterHook,DataRouterStateHook,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),_remix_run_router__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@remix-run/router/dist/router.js");/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends(){return(_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}let defaultEncType="application/x-www-form-urlencoded";function isHtmlElement(object){return null!=object&&"string"==typeof object.tagName}function isButtonElement(object){return isHtmlElement(object)&&"button"===object.tagName.toLowerCase()}function isFormElement(object){return isHtmlElement(object)&&"form"===object.tagName.toLowerCase()}function isInputElement(object){return isHtmlElement(object)&&"input"===object.tagName.toLowerCase()}function isModifiedEvent(event){return!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey)}function shouldProcessLinkClick(event,target){return 0===event.button&&(!target||"_self"===target)&&!isModifiedEvent(event)}let _formDataSupportsSubmitter=null;function isFormDataSubmitterSupported(){if(null===_formDataSupportsSubmitter)try{new FormData(document.createElement("form"),0),_formDataSupportsSubmitter=!1}catch(e){_formDataSupportsSubmitter=!0}return _formDataSupportsSubmitter}let supportedFormEncTypes=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function getFormEncType(encType){return null==encType||supportedFormEncTypes.has(encType)?encType:null}let _excluded=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],_excluded2=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];try{window.__reactRouterVersion="6"}catch(e){}let ViewTransitionContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({isTransitioning:!1});(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).startTransition,(react_dom__WEBPACK_IMPORTED_MODULE_1___namespace_cache||(react_dom__WEBPACK_IMPORTED_MODULE_1___namespace_cache=__webpack_require__.t(react_dom__WEBPACK_IMPORTED_MODULE_1__,2))).flushSync,(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useId;let isBrowser="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,ABSOLUTE_URL_REGEX=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Link=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function LinkWithRef(_ref7,ref){let absoluteHref,{onClick,relative,reloadDocument,replace,state,target,to,preventScrollReset,unstable_viewTransition}=_ref7,rest=_objectWithoutPropertiesLoose(_ref7,_excluded),{basename}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.jb),isExternal=!1;if("string"==typeof to&&ABSOLUTE_URL_REGEX.test(to)&&(absoluteHref=to,isBrowser))try{let currentUrl=new URL(window.location.href),targetUrl=new URL(to.startsWith("//")?currentUrl.protocol+to:to),path=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_3__.pb)(targetUrl.pathname,basename);targetUrl.origin===currentUrl.origin&&null!=path?to=path+targetUrl.search+targetUrl.hash:isExternal=!0}catch(e){}let href=(0,react_router__WEBPACK_IMPORTED_MODULE_2__.$P)(to,{relative}),internalOnClick=useLinkClickHandler(to,{replace,state,target,preventScrollReset,relative,unstable_viewTransition});function handleClick(event){onClick&&onClick(event),event.defaultPrevented||internalOnClick(event)}return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",_extends({},rest,{href:absoluteHref||href,onClick:isExternal||reloadDocument?onClick:handleClick,ref:ref,target:target}))}),NavLink=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function NavLinkWithRef(_ref8,ref){let className,{"aria-current":ariaCurrentProp="page",caseSensitive=!1,className:classNameProp="",end=!1,style:styleProp,to,unstable_viewTransition,children}=_ref8,rest=_objectWithoutPropertiesLoose(_ref8,_excluded2),path=(0,react_router__WEBPACK_IMPORTED_MODULE_2__.x$)(to,{relative:rest.relative}),location=(0,react_router__WEBPACK_IMPORTED_MODULE_2__.zy)(),routerState=react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.Rq),{navigator,basename}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.jb),isTransitioning=null!=routerState&&useViewTransitionState(path)&&!0===unstable_viewTransition,toPathname=navigator.encodeLocation?navigator.encodeLocation(path).pathname:path.pathname,locationPathname=location.pathname,nextLocationPathname=routerState&&routerState.navigation&&routerState.navigation.location?routerState.navigation.location.pathname:null;caseSensitive||(locationPathname=locationPathname.toLowerCase(),nextLocationPathname=nextLocationPathname?nextLocationPathname.toLowerCase():null,toPathname=toPathname.toLowerCase()),nextLocationPathname&&basename&&(nextLocationPathname=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_3__.pb)(nextLocationPathname,basename)||nextLocationPathname);let endSlashPosition="/"!==toPathname&&toPathname.endsWith("/")?toPathname.length-1:toPathname.length,isActive=locationPathname===toPathname||!end&&locationPathname.startsWith(toPathname)&&"/"===locationPathname.charAt(endSlashPosition),isPending=null!=nextLocationPathname&&(nextLocationPathname===toPathname||!end&&nextLocationPathname.startsWith(toPathname)&&"/"===nextLocationPathname.charAt(toPathname.length)),renderProps={isActive,isPending,isTransitioning},ariaCurrent=isActive?ariaCurrentProp:void 0;className="function"==typeof classNameProp?classNameProp(renderProps):[classNameProp,isActive?"active":null,isPending?"pending":null,isTransitioning?"transitioning":null].filter(Boolean).join(" ");let style="function"==typeof styleProp?styleProp(renderProps):styleProp;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link,_extends({},rest,{"aria-current":ariaCurrent,className:className,ref:ref,style:style,to:to,unstable_viewTransition:unstable_viewTransition}),"function"==typeof children?children(renderProps):children)});function useDataRouterContext(hookName){let ctx=react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.sp);return ctx||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_3__.Oi)(!1),ctx}function useLinkClickHandler(to,_temp){let{target,replace:replaceProp,state,preventScrollReset,relative,unstable_viewTransition}=void 0===_temp?{}:_temp,navigate=(0,react_router__WEBPACK_IMPORTED_MODULE_2__.Zp)(),location=(0,react_router__WEBPACK_IMPORTED_MODULE_2__.zy)(),path=(0,react_router__WEBPACK_IMPORTED_MODULE_2__.x$)(to,{relative});return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(event=>{shouldProcessLinkClick(event,target)&&(event.preventDefault(),navigate(to,{replace:void 0!==replaceProp?replaceProp:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_3__.AO)(location)===(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_3__.AO)(path),state,preventScrollReset,relative,unstable_viewTransition}))},[location,navigate,path,replaceProp,state,target,to,preventScrollReset,relative,unstable_viewTransition])}!function(DataRouterHook){DataRouterHook.UseScrollRestoration="useScrollRestoration",DataRouterHook.UseSubmit="useSubmit",DataRouterHook.UseSubmitFetcher="useSubmitFetcher",DataRouterHook.UseFetcher="useFetcher",DataRouterHook.useViewTransitionState="useViewTransitionState"}(DataRouterHook||(DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseFetcher="useFetcher",DataRouterStateHook.UseFetchers="useFetchers",DataRouterStateHook.UseScrollRestoration="useScrollRestoration"}(DataRouterStateHook||(DataRouterStateHook={}));let fetcherId=0;function useViewTransitionState(to,opts){void 0===opts&&(opts={});let vtContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(ViewTransitionContext);null!=vtContext||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_3__.Oi)(!1);let{basename}=useDataRouterContext(DataRouterHook.useViewTransitionState),path=(0,react_router__WEBPACK_IMPORTED_MODULE_2__.x$)(to,{relative:opts.relative});if(!vtContext.isTransitioning)return!1;let currentPath=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_3__.pb)(vtContext.currentLocation.pathname,basename)||vtContext.currentLocation.pathname,nextPath=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_3__.pb)(vtContext.nextLocation.pathname,basename)||vtContext.nextLocation.pathname;return null!=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_3__.B6)(path.pathname,nextPath)||null!=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_3__.B6)(path.pathname,currentPath)}}}]);
//# sourceMappingURL=412.ae03c4ad.iframe.bundle.js.map