(this["webpackJsonpreact-dev-demo"]=this["webpackJsonpreact-dev-demo"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(21),l=a.n(i),c=(a(70),a(6)),r=a(15),s=(a(71),a(10)),m=a(120),u=a(119),d=a(57),h=a(25),f=a(126),g=a(54),p=a(118);f.a.registerLanguage("jsx",g.a);var v=function(e){var t=e.className,a=e.codeString;return o.a.createElement("div",{className:t},o.a.createElement(f.a,{language:"javascript",style:p.a,showLineNumbers:!0},a))},E=a(124),b=a(121),y=a(58),k={envId:"bn1ab7m56qolupi5sa0g",sdkConfig:{fetchNow:!0,enableConsoleLogs:!0,nodeEnv:"development"},visitorData:{id:"test-vid",context:{isAuth:!0,numberTransaction:12,isVip:!1}},sandbox:{envId:["bn1ab7m56qolupi5sa0g","bn1ab7m56qolupi5sa0g_1","bn1ab7m56qolupi5sa0g_2"],nodeEnv:["development","production"],visitorId:["test-vid","test-vid_2","test-vid_3"]}},C=function(){var e="initialization",t=Object(c.a)({},k.visitorData.context),a=Object(n.useContext)(H),i=a.currentSettings,l=a.setSettings,s=o.a.useState(Object(c.a)({},i)),m=Object(r.a)(s,2),f=m[0],g=m[1],p=function(e){var t=JSON.parse(e.currentTarget.parentElement.innerText),a=Object(c.a)({},f);if(e.currentTarget.checked)g(Object(c.a)({},f,{visitorData:Object(c.a)({},f.visitorData,{context:Object(c.a)({},f.visitorData.context,{},t)})}));else{var n=Object.keys(t)[0];g(Object(c.a)({},f,{visitorData:Object(c.a)({},f.visitorData,{context:Object.entries(a.visitorData.context).reduce((function(e,t){var a=Object(r.a)(t,2),o=a[0],i=a[1];return o===n?e:Object(c.a)({},e,Object(h.a)({},o,i))}),{})})}))}};return o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("div",{className:"fsAnchor",id:e}),o.a.createElement(E.a,{variant:"dark",className:"fs-alert demoHook"},o.a.createElement(E.a.Heading,null,e),o.a.createElement("p",null,"The ",o.a.createElement("b",null,e)," is proceed with"," ",o.a.createElement("b",null,"FlagshipProvider"),". In this demo app, it is plugged like so:"),o.a.createElement(v,{className:"mv3",codeString:"import React from 'react';\nimport { FlagshipProvider } from \"@flagship.io/react-sdk\";\n\nconst App: React.FC = () => (\n  <>\n      <FlagshipProvider\n      envId={".concat(i.envId,"}\n      config={\n        ").concat(JSON.stringify(i.sdkConfig,null,2),"\n      }\n      visitorData={\n        ").concat(JSON.stringify(i.visitorData,null,2),'\n    }\n      onInitStart={() => {\n        console.log("init start");\n      }}\n      onInitDone={() => {\n        console.log("init done");\n      }}\n      onUpdate={() => {\n          console.log(\'React SDK updated\');\n      }}\n      onSavingModificationsInCache={() => {\n          console.log(\'React SDK saving modifications in cache\');\n      }}\n      loadingComponent={\n        <Container className="mt3">\n          <Row>\n            <Col xs={12}>Loading Flagship React SDK...</Col>\n          </Row>\n        </Container>\n      }\n    >\n      <Header />\n      <AppContainer />\n    </FlagshipProvider>\n  </>\n);          ')}),o.a.createElement("p",null,"To understand impact of each props, you can change some value dynamically here:"," "),o.a.createElement("h3",{style:{borderBottom:"1px solid grey",marginBottom:"16px",paddingBottom:"8px"}},"1 - Playing with ",o.a.createElement("i",null,"config")),o.a.createElement(b.a,null,o.a.createElement(b.a.Group,{controlId:"initForm.Control1.1",style:{display:"flex",alignItems:"center",marginLeft:"16px"}},o.a.createElement("div",null,"envId: "),o.a.createElement(b.a.Control,{as:"select",onChange:function(e){return g(Object(c.a)({},f,{envId:e.target.value}))}},k.sandbox.envId.map((function(e){return o.a.createElement("option",{key:e},e)})))),o.a.createElement(b.a.Group,{controlId:"initForm.Control1.11",style:{display:"flex",alignItems:"center",marginLeft:"16px"}},o.a.createElement("div",null,"nodeEnv: "),o.a.createElement(b.a.Control,{as:"select",onChange:function(e){return g(Object(c.a)({},f,{sdkConfig:Object(c.a)({},f.sdkConfig,{nodeEnv:e.target.value})}))}},k.sandbox.nodeEnv.map((function(e){return o.a.createElement("option",{key:e},e)})))),o.a.createElement(b.a.Group,{controlId:"initForm.Control1.2"},o.a.createElement(b.a.Check,{type:"checkbox",checked:f.sdkConfig.fetchNow,onChange:function(e){return g(Object(c.a)({},f,{sdkConfig:Object(c.a)({},f.sdkConfig,{fetchNow:e.currentTarget.checked})}))},label:"fetchNow=".concat(f.sdkConfig.fetchNow)})),o.a.createElement(b.a.Group,{controlId:"initForm.Control1.3"},o.a.createElement(b.a.Check,{type:"checkbox",checked:f.sdkConfig.enableConsoleLogs,onChange:function(e){return g(Object(c.a)({},f,{sdkConfig:Object(c.a)({},f.sdkConfig,{enableConsoleLogs:e.currentTarget.checked})}))},label:"enableConsoleLogs=".concat(f.sdkConfig.enableConsoleLogs)}))),o.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement(y.a,{variant:"secondary",onClick:function(){return l(Object(c.a)({},f))}},"Apply change")),o.a.createElement("h3",null,"2 - Playing with ",o.a.createElement("i",null,"visitorData")),o.a.createElement(b.a,null,o.a.createElement(b.a.Group,{controlId:"initForm.ControlSelect2"},o.a.createElement(b.a.Label,null,"visitorId"),o.a.createElement(b.a.Control,{as:"select",onChange:function(e){return g(Object(c.a)({},f,{visitorData:Object(c.a)({},f.visitorData,{id:e.target.value})}))}},k.sandbox.visitorId.map((function(e){return o.a.createElement("option",{key:e},e)})))),o.a.createElement(b.a.Group,{controlId:"initForm.ControlSelect3"},o.a.createElement(b.a.Label,null,"visitor context"),Object.entries(t).map((function(e){var t=Object(r.a)(e,2),a=t[0],n=t[1];return o.a.createElement(b.a.Check,{key:a,type:"checkbox",id:"default-".concat(a),checked:f.visitorData.context.hasOwnProperty(a),onChange:p,label:JSON.stringify(Object(h.a)({},a,n))})})))),o.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement(y.a,{variant:"secondary",onClick:function(){return l(Object(c.a)({},f))}},"Apply change")),o.a.createElement("div",null,"Since we have set those settings:"),o.a.createElement(v,{className:"mv3",codeString:"".concat(JSON.stringify(i.sdkConfig,null,2))}),o.a.createElement("div",null,"When you change those values, you can notice the behavior of the SDK, on logs & network."),o.a.createElement("div",null,"It will impact the output of Flagship SDK Hooks as well, take a look below."))))},F=function(){Object(s.useFsActivate)(["btnColor","otherKey1","otherKey2"]);return o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("div",{className:"fsAnchor",id:"useFsActivate"}),o.a.createElement(E.a,{variant:"dark",className:"fs-alert demoHook"},o.a.createElement(E.a.Heading,null,"useFsActivate"),o.a.createElement("p",null,"Use ",o.a.createElement("b",null,"useFsActivate")," hook to trigger activation of a modification:"),o.a.createElement(v,{className:"mv3",codeString:"useFsActivate([\n    'btnColor',\n    'otherKey1',\n    'otherKey2'\n]);                        "}),o.a.createElement("div",null,"In this example, keys"," ",o.a.createElement("i",null,"btnColor, otherKey1, otherKey2"),' have been activated. You can check on networks, a http request "activate" for each key specified in the array.'))))},S=function(){var e=Object(s.useFsModifications)([{key:"btnColor",defaultValue:"green",activate:!1}]);return o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("div",{className:"fsAnchor",id:"useFsModifications"}),o.a.createElement(E.a,{variant:"dark",className:"fs-alert demoHook"},o.a.createElement(E.a.Heading,null,"useFsModifications"),o.a.createElement("p",null,"Use ",o.a.createElement("b",null,"useFsModifications")," hook to get the modifications:"),o.a.createElement(v,{className:"mv3",codeString:"import { useFsModifications } from '@flagship.io/react-sdk';\nconst fsModifications = useFsModifications([\n  {\n      key: 'btnColor',\n      defaultValue: 'green',\n      activate: false\n  }\n]);              "}),o.a.createElement("p",null,"Output: "),o.a.createElement("div",null,o.a.createElement("button",{style:{backgroundColor:e.btnColor}},"I'm a button customized with Flagship")),o.a.createElement(v,{className:"mv3",codeString:"<div>\n    <button style={{ backgroundColor: ".concat(e.btnColor," }}>\n        I'm a button customized with Flagship\n    </button>\n</div>              ")}))))},O=function(){var e=o.a.useState(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],i=o.a.useState(!1),l=Object(r.a)(i,2),c=l[0],m=l[1];Object(s.useFsSynchronize)([a],c);return o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("div",{className:"fsAnchor",id:"useFsSynchronize"}),o.a.createElement(E.a,{variant:"dark",className:"fs-alert demoHook"},o.a.createElement(E.a.Heading,null,"useFsSynchronize"),o.a.createElement("p",null,"Use ",o.a.createElement("b",null,"useFsSynchronize")," hook to trigger activation of a modification:"),o.a.createElement(v,{className:"mv3",codeString:"useFsActivate([listenedValue], activateAllModifications);"}),o.a.createElement(b.a,null,o.a.createElement(b.a.Group,{controlId:"demoFsSynchronize.ControlSelect1"},o.a.createElement(b.a.Label,null,"listenedValue"),o.a.createElement(b.a.Check,{type:"checkbox",checked:a,onChange:function(e){return n(e.currentTarget.checked)},label:"listenedValue=".concat(a)})),o.a.createElement(b.a.Group,{controlId:"demoFsSynchronize.ControlSelect2"},o.a.createElement(b.a.Label,null,"listenedValue"),o.a.createElement(b.a.Check,{type:"checkbox",checked:c,onChange:function(e){return m(e.currentTarget.checked)},label:"activateAllModifications=".concat(c)}))),o.a.createElement("div",null,"Switch value of ",o.a.createElement("b",null,"listenedValue")," will trigger a synchronize as it is set in the first argument of"," ",o.a.createElement("b",null,"useFsActivate"),"."),o.a.createElement("div",null,"You can also notice that enabling"," ",o.a.createElement("b",null,"activateAllModifications")," to true will modify the payload sent to the Flagship API and thus trigger an activate."))))},I=function(){var e=Object(s.useFlagship)({modifications:{requested:[{key:"btnColor",defaultValue:"green",activate:!1}]}}),t=e.modifications,a=e.status,n=e.hit;return o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("div",{className:"fsAnchor",id:"useFlagship"}),o.a.createElement(E.a,{variant:"dark",className:"fs-alert demoHook"},o.a.createElement(E.a.Heading,null,"useFlagship"),o.a.createElement("p",null,"Use ",o.a.createElement("b",null,"useFlagship")," hook to get access to further stuff such as ",o.a.createElement("i",null,"modifications"),", ",o.a.createElement("i",null,"sdk status"),","," ",o.a.createElement("i",null,"hits")," :"),o.a.createElement(v,{className:"mv3",codeString:"import { useFlagship } from '@flagship.io/react-sdk';\nconst fsParams = {\n    modifications: {\n        requested: [\n            {\n                key: 'btnColor',\n                defaultValue: 'green',\n                activate: false\n            }\n        ]\n    }\n}\nconst {\n    modifications: fsModifications,\n    status: fsStatus,\n    hit: fsHit,\n} = useFlagship(fsParams);"}),o.a.createElement("h3",null,"1 - Playing with ",o.a.createElement("i",null,"fsModifications")),o.a.createElement("p",null,"demo: "),o.a.createElement("div",null,o.a.createElement("button",{style:{backgroundColor:t.btnColor}},"I'm a button customized with Flagship")),o.a.createElement(v,{className:"mv3",codeString:"<div>\n    <button style={{ backgroundColor: ".concat(t.btnColor," }}>\n        I'm a button customized with Flagship\n    </button>\n</div>              ")}),o.a.createElement("h3",null,"2 - Playing with ",o.a.createElement("i",null,"fsStatus")),o.a.createElement("div",{style:{marginBottom:16}},"If you're not familiar with the payload that you should a provide to the hit you want to send, you'll have all details available in the"," ",o.a.createElement("a",{href:"https://github.com/abtasty/flagship-js-sdk/blob/master/README.md#shape-of-possible-hits-to-send-1"},"SDK JS Hit documentation"),"."),o.a.createElement("p",null,"demo with Transaction Hit: "),o.a.createElement(v,{className:"mv3",codeString:"\nfsStatus=".concat(JSON.stringify(a,null,2),";\n                        ")}),o.a.createElement("h3",null,"3 - Playing with ",o.a.createElement("i",null,"hits")),o.a.createElement("p",null,"demo: "),o.a.createElement(v,{className:"mv3",codeString:"<Button\n    onClick={() => {\n        const mockHit = {\n            type: 'Transaction',\n            data: {\n                transactionId: '12451342423',\n                affiliation: 'myAffiliation',\n                totalRevenue: 999,\n                shippingCost: 888,\n                shippingMethod: 'myShippingMethod',\n                currency: 'myCurrency',\n                taxes: 1234444,\n                paymentMethod: 'myPaymentMethod',\n                itemCount: 2,\n                couponCode: 'myCOUPON',\n                documentLocation:\n                    'http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F',\n                pageTitle: 'myScreen'\n            }\n        };\n        fsHit.send(mockHit);\n    }}\n>\n    Send a transaction hit\n</Button>"}),o.a.createElement("div",null,o.a.createElement(y.a,{variant:"secondary",onClick:function(){n.send({type:"Transaction",data:{transactionId:"12451342423",affiliation:"myAffiliation",totalRevenue:999,shippingCost:888,shippingMethod:"myShippingMethod",currency:"myCurrency",taxes:1234444,paymentMethod:"myPaymentMethod",itemCount:2,couponCode:"myCOUPON",documentLocation:"http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F",pageTitle:"myScreen"}})}},"Send a transaction hit")),o.a.createElement(v,{className:"mv3",codeString:"<Button\n    onClick={() => {\n        const mockHit1 = {\n            type: 'Transaction',\n            data: {\n                transactionId: '12451342423',\n                affiliation: 'myAffiliation',\n                totalRevenue: 999,\n                shippingCost: 888,\n                shippingMethod: 'myShippingMethod',\n                currency: 'myCurrency',\n                taxes: 1234444,\n                paymentMethod: 'myPaymentMethod',\n                itemCount: 2,\n                couponCode: 'myCOUPON',\n                documentLocation:\n                    'http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F',\n                pageTitle: 'myScreen'\n            }\n        };\n        const mockHit2 = { ...mockHit1 };\n        mockHit2.data.transactionId = '999';\n        fsHit.sendMultiple([mockHit1, mockHit2]);\n    }}\n>\n    Send multiple transaction hits\n</Button>"}),o.a.createElement("div",null,o.a.createElement(y.a,{variant:"secondary",onClick:function(){var e={type:"Transaction",data:{transactionId:"12451342423",affiliation:"myAffiliation",totalRevenue:999,shippingCost:888,shippingMethod:"myShippingMethod",currency:"myCurrency",taxes:1234444,paymentMethod:"myPaymentMethod",itemCount:2,couponCode:"myCOUPON",documentLocation:"http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F",pageTitle:"myScreen"}},t=Object(c.a)({},e);t.data.transactionId="999",n.sendMultiple([e,t])}},"Send multiple transaction hits")))))},N=function(){return o.a.createElement(m.a,{className:"mt3"},o.a.createElement(C,null),o.a.createElement(I,null),o.a.createElement(S,null),o.a.createElement(F,null),o.a.createElement(O,null))},j=a(123),w=a(125),x=a(122),A=a(59),M=a.n(A),D=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j.a,{className:"fsNavbar",fixed:"top"},o.a.createElement(j.a.Brand,{href:"https://github.com/abtasty/flagship-js-sdk",className:"flex item-center"},o.a.createElement("img",{alt:"Logo Flagship",src:M.a,className:"d-inline-block align-top logoAdjust"}),"REACT SDK (Dev demo)"),o.a.createElement(w.a,{className:"mr-auto fsNav"},o.a.createElement(w.a.Link,{href:"#initialization"},"Initialization"),o.a.createElement(x.a,{title:"Fs Hooks",id:"nav-dropdown"},o.a.createElement(x.a.Item,{eventKey:"4.0",href:"#useFlagship"},"useFlagship"),o.a.createElement(x.a.Item,{eventKey:"4.1",href:"#useFsModifications"},"useFsModifications"),o.a.createElement(x.a.Item,{eventKey:"4.2",href:"#useFsActivate"},"useFsActivate"),o.a.createElement(x.a.Item,{eventKey:"4.3",href:"#useFsSynchronize"},"useFsSynchronize")),o.a.createElement(x.a,{title:"Features",id:"nav-dropdown"},o.a.createElement(x.a.Item,{eventKey:"4.0",href:"#useFlagship"},"Get modification(s)"),o.a.createElement(x.a.Item,{eventKey:"4.1",href:"#useFsActivate"},"Activate modification(s)"),o.a.createElement(x.a.Item,{eventKey:"4.2",href:"#sendHits"},"Send Hit(s)"))),o.a.createElement(b.a,{inline:!0},o.a.createElement(w.a.Link,{href:"https://github.com/abtasty/flagship-react-sdk"},"Github"),o.a.createElement(w.a.Link,{href:"https://www.abtasty.com/solutions-product-teams/"},"What is Flagship ?"))))},H=Object(n.createContext)(null),K=function(){var e=o.a.useState({envId:k.envId,sdkConfig:Object(c.a)({},k.sdkConfig),visitorData:Object(c.a)({},k.visitorData)}),t=Object(r.a)(e,2),a=t[0],n=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(H.Provider,{value:{currentSettings:a,setSettings:n}},o.a.createElement(s.FlagshipProvider,{envId:a.envId,config:a.sdkConfig,visitorData:a.visitorData,onInitStart:function(){console.log("React SDK init start")},onInitDone:function(){console.log("React SDK init done")},onUpdate:function(){console.log("React SDK updated")},onSavingModificationsInCache:function(){return console.log("React SDK saved modifications in cache")},loadingComponent:o.a.createElement(m.a,{className:"mt3"},o.a.createElement(u.a,null,o.a.createElement(d.a,{xs:12,style:{color:"white",height:"100vh",fontSize:"5vw"}},"Loading Flagship React SDK...")))},o.a.createElement(D,null),o.a.createElement(N,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(110);l.a.render(o.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,t,a){e.exports=a.p+"static/media/Flagship-horizontal-product-white.6e8b90f3.png"},65:function(e,t,a){e.exports=a(111)},70:function(e,t,a){},71:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.a43b9bb6.chunk.js.map