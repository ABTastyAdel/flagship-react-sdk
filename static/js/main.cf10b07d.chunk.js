(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{101:function(e,t,a){"use strict";var n=this&&this.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(56),r=o(a(55));t.useFlagship=function(){return n(i.useContext(r.default),[])},t.useFsActivate=function(e){var t=i.useContext(r.default).fsVisitor;if(!t)throw new Error("Error: flagship-react-sdk not correctly initialized... Make sure fsVisitor is ready.");return t.activateModifications(e.map((function(e){return{key:e}})))},t.useFsModifications=function(e,t){void 0===t&&(t=!1);var a=i.useContext(r.default).fsVisitor;if(!a)throw new Error("Error: flagship-react-sdk not correctly initialized... Make sure fsVisitor is ready.");i.useEffect((function(){a.getModifications(e,t)}),[])},t.useFsModificationsCache=function(e,t){void 0===t&&(t=!1);var a=i.useContext(r.default).fsVisitor;if(!a)throw new Error("Error: flagship-react-sdk not correctly initialized... Make sure fsVisitor is ready.");return a.getModificationsCache(e,t)}},16:function(e,t,a){"use strict";function n(e){for(var a in e)t.hasOwnProperty(a)||(t[a]=e[a])}Object.defineProperty(t,"__esModule",{value:!0}),n(a(55)),n(a(101))},218:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(22),r=a.n(i),l=(a(94),a(6)),c=a(24),s=(a(95),a(16)),u=a(224),d=a(223),f=a(81),m=a(28),h=a(13),v=a(228),p=a(225),g=a(82),b={envId:"bn1ab7m56qolupi5sa0g",sdkConfig:{fetchNow:!0,enableConsoleLogs:!0},visitorData:{id:"test-vid",context:{isAuth:!0,numberTransaction:12,isVip:!1}},sandbox:{envId:["bn1ab7m56qolupi5sa0g","bn1ab7m56qolupi5sa0g_1","bn1ab7m56qolupi5sa0g_2"],visitorId:["test-vid","test-vid_2","test-vid_3"]}},E=function(e){e.onSubmitNewSettings;var t="initialization",a=Object(l.a)({},b.visitorData.context),i=Object(n.useContext)(x),r=i.currentSettings,s=i.setSettings,u=o.a.useState(Object(l.a)({},r)),E=Object(c.a)(u,2),y=E[0],O=E[1],k=function(e){var t=JSON.parse(e.currentTarget.parentElement.innerText),a=Object(l.a)({},y);if(e.currentTarget.checked)O(Object(l.a)({},y,{visitorData:Object(l.a)({},y.visitorData,{context:Object(l.a)({},y.visitorData.context,{},t)})}));else{var n=Object.keys(t)[0];O(Object(l.a)({},y,{visitorData:Object(l.a)({},y.visitorData,{context:Object.entries(a.visitorData.context).reduce((function(e,t){var a=Object(c.a)(t,2),o=a[0],i=a[1];return o===n?e:Object(l.a)({},e,Object(m.a)({},o,i))}),{})})}))}};return o.a.createElement(d.a,null,o.a.createElement(f.a,null,o.a.createElement("a",{className:"fsAnchor",id:t}),o.a.createElement(v.a,{variant:"dark",className:"fs-alert demoHook"},o.a.createElement(v.a.Heading,null,t),o.a.createElement("p",null,"The ",o.a.createElement("b",null,t)," is proceed with"," ",o.a.createElement("b",null,"FlagshipProvider"),". In this demo app, it is plugged like so:"),o.a.createElement(h.a,{className:"mv3",codeString:"\n\nimport React from 'react';\nimport { FlagshipProvider } from \"@flagship.io/react-sdk\";\n\nconst App: React.FC = () => (\n  <>\n      <FlagshipProvider\n      envId={".concat(r.envId,"}\n      config={\n        ").concat(JSON.stringify(r.sdkConfig,null,2),"\n      }\n      visitorData={\n        ").concat(JSON.stringify(r.visitorData,null,2),'\n    }\n      onInitStart={() => {\n        console.log("init start");\n      }}\n      onInitDone={() => {\n        console.log("init done");\n      }}\n      loadingComponent={\n        <Container className="mt3">\n          <Row>\n            <Col xs={12}>Loading Flagship React SDK...</Col>\n          </Row>\n        </Container>\n      }\n    >\n      <Header />\n      <AppContainer />\n    </FlagshipProvider>\n  </>\n);\n          ')}),o.a.createElement("p",null,"To understand impact of each props, you can change some value dynamically here:"," "),o.a.createElement(p.a,null,o.a.createElement(p.a.Group,{controlId:"initForm.ControlSelect1"},o.a.createElement(p.a.Label,null,"envId"),o.a.createElement(p.a.Control,{as:"select",onChange:function(e){return O(Object(l.a)({},y,{envId:e.target.value}))}},b.sandbox.envId.map((function(e){return o.a.createElement("option",null,e)})))),o.a.createElement(p.a.Group,{controlId:"initForm.ControlSelect2"},o.a.createElement(p.a.Label,null,"visitorId"),o.a.createElement(p.a.Control,{as:"select",onChange:function(e){return O(Object(l.a)({},y,{visitorData:Object(l.a)({},y.visitorData,{id:e.target.value})}))}},b.sandbox.visitorId.map((function(e){return o.a.createElement("option",null,e)})))),o.a.createElement(p.a.Group,{controlId:"initForm.ControlSelect3"},o.a.createElement(p.a.Label,null,"visitor context"),Object.entries(a).map((function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];return o.a.createElement(p.a.Check,{key:a,type:"checkbox",id:"default-".concat(a),checked:y.visitorData.context.hasOwnProperty(a),onClick:k,label:JSON.stringify(Object(m.a)({},a,n))})})))),o.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement(g.a,{variant:"secondary",onClick:function(){return s(Object(l.a)({},y))}},"Apply change")),o.a.createElement("div",null,"Since we have set those settings:"),o.a.createElement(h.a,{className:"mv3",codeString:"".concat(JSON.stringify(r.sdkConfig,null,2))}),o.a.createElement("div",null,"When you change those values, you can notice the behavior of the SDK, on logs & network."),o.a.createElement("div",null,"It will impact the output of Flagship SDK Hooks as well, take a look below."))))},y=function(){Object(s.useFsModifications)([{key:"btnColor",defaultValue:"green",activate:!1}]);return o.a.createElement(d.a,null,o.a.createElement(f.a,null,o.a.createElement("a",{className:"fsAnchor",id:"useFsModifications"}),o.a.createElement(v.a,{variant:"dark",className:"fs-alert demoHook"},o.a.createElement(v.a.Heading,null,"useFsModifications"),o.a.createElement("p",null,"Use ",o.a.createElement("b",null,"useFsModifications")," hook to get the modifications:"),o.a.createElement(h.a,{className:"mv3",codeString:"const todo = 'todo';"}))))},O=function(){var e=Object(s.useFsModificationsCache)([{key:"btnColor",defaultValue:"green",activate:!1}]);return o.a.createElement(d.a,null,o.a.createElement(f.a,null,o.a.createElement("a",{className:"fsAnchor",id:"useFsModificationsCache"}),o.a.createElement(v.a,{variant:"dark",className:"fs-alert demoHook"},o.a.createElement(v.a.Heading,null,"useFsModificationsCache"),o.a.createElement("p",null,"Use ",o.a.createElement("b",null,"useFsModificationsCache")," hook to get the modifications:"),o.a.createElement(h.a,{className:"mv3",codeString:"import { useFsModificationsCache } from '@flagship.io/react-sdk';\nconst fsModifications = useFsModificationsCache([\n  {\n      key: 'btnColor',\n      defaultValue: 'green',\n      activate: false\n  }\n]);              "}),o.a.createElement("p",null,"Output: "),o.a.createElement("div",null,o.a.createElement("button",{style:{backgroundColor:e.btnColor}},"I'm a button customized with Flagship")),o.a.createElement(h.a,{className:"mv3",codeString:"<div>\n    <button style={{ backgroundColor: ".concat(e.btnColor," }}>\n        I'm a button customized with Flagship\n    </button>\n</div>              ")}))))},k=function(){Object(s.useFsActivate)(["btnColor","otherKey1","otherKey2"]);return o.a.createElement(d.a,null,o.a.createElement(f.a,null,o.a.createElement("a",{className:"fsAnchor",id:"useFsActivate"}),o.a.createElement(v.a,{variant:"dark",className:"fs-alert demoHook"},o.a.createElement(v.a.Heading,null,"useFsActivate"),o.a.createElement("p",null,"Use ",o.a.createElement("b",null,"useFsActivate")," hook to trigger activation of a modification:"),o.a.createElement(h.a,{className:"mv3",codeString:"useFsActivate([\n    'btnColor',\n    'otherKey1',\n    'otherKey2'\n]);                        "}),o.a.createElement("div",null,"In this example, keys"," ",o.a.createElement("i",null,"btnColor, otherKey1, otherKey2"),' have been activated. You can check on networks, a http request "activate" for each key specified in the array.'))))},C=function(e){var t=e.onSubmitNewSettings;return o.a.createElement(u.a,{className:"mt3"},o.a.createElement(E,{onSubmitNewSettings:t}),o.a.createElement(y,null),o.a.createElement(O,null),o.a.createElement(k,null))},j=a(227),w=a(229),F=a(226),S=a(83),I=a.n(S),M=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j.a,{className:"fsNavbar",fixed:"top"},o.a.createElement(j.a.Brand,{href:"https://github.com/abtasty/flagship-js-sdk",className:"flex item-center"},o.a.createElement("img",{alt:"Logo Flagship",src:I.a,className:"d-inline-block align-top logoAdjust"}),"REACT SDK (Dev demo)"),o.a.createElement(w.a,{className:"mr-auto fsNav"},o.a.createElement(w.a.Link,{href:"#initialization"},"Initialization"),o.a.createElement(F.a,{title:"Fs Hooks",id:"nav-dropdown"},o.a.createElement(F.a.Item,{eventKey:"4.1",href:"#useFsModifications"},"useFsModifications"),o.a.createElement(F.a.Item,{eventKey:"4.2",href:"#useFsModificationsCache"},"useFsModificationsCache"),o.a.createElement(F.a.Item,{eventKey:"4.3",href:"#useFsActivate"},"useFsActivate"))),o.a.createElement(p.a,{inline:!0},o.a.createElement(w.a.Link,{href:"https://github.com/abtasty/flagship-react-sdk"},"Github"),o.a.createElement(w.a.Link,{href:"https://www.abtasty.com/solutions-product-teams/"},"What is Flagship ?"))))},x=Object(n.createContext)(null),N=function(){var e=o.a.useState({envId:b.envId,sdkConfig:Object(l.a)({},b.sdkConfig),visitorData:Object(l.a)({},b.visitorData)}),t=Object(c.a)(e,2),a=t[0],n=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(x.Provider,{value:{currentSettings:a,setSettings:n}},o.a.createElement(s.FlagshipProvider,{envId:a.envId,config:a.sdkConfig,visitorData:a.visitorData,onInitStart:function(){console.log("init start")},onInitDone:function(){console.log("init done")},loadingComponent:o.a.createElement(u.a,{className:"mt3"},o.a.createElement(d.a,null,o.a.createElement(f.a,{xs:12,style:{color:"white",height:"100vh",fontSize:"5vw"}},"Loading Flagship React SDK...")))},o.a.createElement(M,null),o.a.createElement(C,{onSubmitNewSettings:function(e){return n(Object(l.a)({},a,{},e))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(217);r.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,t,a){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a},i=this&&this.__spreadArrays||function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<a;t++)for(var i=arguments[t],r=0,l=i.length;r<l;r++,o++)n[o]=i[r];return n},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=r(a(56)),s=l(a(98)),u={fsVisitor:null,fsModifications:null},d=c.default.createContext(n({},u));t.FlagshipProvider=function(e){var t=e.children,a=e.envId,r=e.config,l=e.visitorData,f=e.loadingComponent,m=e.modifications,h=e.onInitStart,v=e.onInitDone,p=l.id,g=l.context,b=c.useState(n(n({},u),{loading:!0})),E=b[0],y=b[1],O=E.loading,k=o(E,["loading"]);return c.useEffect((function(){var e=s.default.initSdk(a,r).newVisitor(p,g);h(),e.on("ready",(function(){m&&(e.fetchedModifications=n({},m)),y(n(n({},E),{loading:!1,fsVisitor:e,fsModifications:e.fetchedModifications&&e.fetchedModifications.campaigns||null}))}))}),i([a,p],Object.values(g))),c.useEffect((function(){E.loading||v({fsVisitor:E.fsVisitor,fsModifications:E.fsModifications})}),[E]),c.default.createElement(d.Provider,{value:n({},k)},O?f:t)},t.FlagshipProvider.defaultProps={config:{},loadingComponent:null,modifications:void 0,onInitStart:function(){},onInitDone:function(){}},t.FlagshipConsumer=d.Consumer,t.default=d},83:function(e,t,a){e.exports=a.p+"static/media/Flagship-horizontal-product-white.6e8b90f3.png"},89:function(e,t,a){e.exports=a(218)},94:function(e,t,a){},95:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.cf10b07d.chunk.js.map