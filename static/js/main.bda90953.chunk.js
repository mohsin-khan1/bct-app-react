(this["webpackJsonpbcd-assesment-app"]=this["webpackJsonpbcd-assesment-app"]||[]).push([[0],{112:function(e,a,t){},271:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t.n(c),n=t(102),r=t.n(n),o=(t(112),t(2)),l=t(9),d=t(27),i=t(1);var j=function(){var e=Object(c.useState)([]),a=Object(l.a)(e,2),t=a[0],s=a[1];return Object(c.useEffect)((function(){var e=!0;return fetch("https://api.bluecitytechnology.com/s/smp/").then((function(e){return e.json()})).then((function(a){console.log("res",a);var t=a.plot.x,c=a.plot.y,n=a.data,r=["#FF4069","#059BFF","#22CFCF","#5f27cd","#222f3e"],l={};c.forEach((function(e,a){l[e]={label:e,data:[],backgroundColor:r[a]}})),console.log("plotYDataObj",l),t.forEach((function(e,a){var t,s=Object(o.a)(c);try{for(s.s();!(t=s.n()).done;){var r=t.value;n[e].hasOwnProperty(r)?l[r].data.push(n[e][r]):l[r].data.push(0)}}catch(d){s.e(d)}finally{s.f()}}));var d=Object.values(l);console.log("plotYDataset",d),e&&s({labels:t,datasets:d})})),function(){return e=!1}}),[]),Object(i.jsxs)("div",{className:"container-fluid data-container p-lg-5 mt-3",children:[Object(i.jsx)("h2",{children:"Api Data"}),Object(i.jsx)(d.a,{data:t,options:{indexAxis:"y",elements:{bar:{borderWidth:2}},responsive:!0,grouped:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},b=t(105),h=t.n(b),p=t(106),u=t.n(p);var O=function(){var e=Object(c.useState)({}),a=Object(l.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)({}),r=Object(l.a)(n,2),o=r[0],j=r[1],b=Object(c.useState)({}),p=Object(l.a)(b,2),O=p[0],m=p[1],x=Object(c.useState)(!0),v=Object(l.a)(x,2),f=v[0],g=v[1],N=h()("http://54.89.37.132:8000");return Object(c.useEffect)((function(){var e=!0;return N.on("data",(function(a){g(!1),console.log("Socket data",a);var t=[{label:"Memory",data:[a.lidar.memory.available,a.lidar.memory.total],backgroundColor:["#4BC0C0","#36A2EB"],borderColor:["#10ac84","#0abde3"],borderWidth:1}],c=[{label:"CPU",data:[a.lidar.cpu[1],a.lidar.cpu[2]],backgroundColor:["#FFCD56","#36A2EB"],borderColor:["#feca57","#0abde3"],borderWidth:1}];e&&(j({labels:["Available","Total"],datasets:t}),s({labels:["1","2"],datasets:c}),m({motorRpm:a.sensor.motor_rpm,output:a.sensor.output}))})),function(){return e=!1}}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container vh-100 p-lg-5 mt-3",children:Object(i.jsxs)("div",{className:"container",children:[f&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{className:"mb-5",children:"Socket Data"}),Object(i.jsx)(u.a,{type:"Oval",color:"#00BFFF",height:300,width:300})]}),!f&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-md-6",children:[Object(i.jsx)(d.b,{data:t}),Object(i.jsx)("h4",{className:"text-center mt-2",children:"CPU"})]}),Object(i.jsxs)("div",{className:"col-md-6 mt-3",children:[Object(i.jsx)(d.c,{data:o}),Object(i.jsx)("h4",{className:"text-center mt-2",children:"Memory"})]})]}),Object(i.jsxs)("div",{className:"row mt-5",children:[Object(i.jsx)("div",{className:"c-dashboardInfo col-lg-3 col-md-6",children:Object(i.jsxs)("div",{className:"wrap",children:[Object(i.jsxs)("h4",{className:"heading heading5 hind-font medium-font-weight c-dashboardInfo__title",children:["Motor RPM",Object(i.jsxs)("svg",{className:"MuiSvgIcon-root-19",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation",children:[Object(i.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})]})]}),Object(i.jsx)("span",{className:"hind-font caption-12 c-dashboardInfo__count",children:O.motorRpm})]})}),Object(i.jsx)("div",{className:"c-dashboardInfo col-lg-3 col-md-6",children:Object(i.jsxs)("div",{className:"wrap",children:[Object(i.jsxs)("h4",{className:"heading heading5 hind-font medium-font-weight c-dashboardInfo__title",children:["Output",Object(i.jsxs)("svg",{className:"MuiSvgIcon-root-19",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation",children:[Object(i.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})]})]}),Object(i.jsx)("span",{className:"hind-font caption-12 c-dashboardInfo__count",children:O.output})]})})]})]})]})})})},m=t(19);var x=function(){var e=Object(c.useState)([]),a=Object(l.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)([]),r=Object(l.a)(n,2),o=r[0],d=r[1];return Object(c.useEffect)((function(){var e=!0;return fetch("https://api.bluecitytechnology.com/s/smp/").then((function(e){return e.json()})).then((function(a){console.log("res",a);var t=a.data,c=[];for(var n in t)c.push(Object(m.a)(Object(m.a)({},t[n]),{},{date:n}));console.log("dataArr",c),e&&(s(c),d(a.plot.y))})),function(){return e=!1}}),[]),Object(i.jsxs)("div",{className:"container-fluid p-lg-5 mt-3",children:[Object(i.jsx)("h2",{children:"Api Data"}),Object(i.jsx)("div",{className:"table-responsive-sm",children:Object(i.jsxs)("table",{className:"table table-bordered mt-4",children:[Object(i.jsx)("thead",{className:"thead",children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"Date"}),o.map((function(e,a){return Object(i.jsx)("th",{scope:"col",children:e},a)}))]})}),Object(i.jsx)("tbody",{children:t.map((function(e,a){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.date}),o.map((function(a,t){return Object(i.jsx)("td",{children:e.hasOwnProperty(a)?e[a]:"0"},t)}))]},a)}))})]})})]})},v=t(28),f=t(4);var g=function(){return Object(i.jsxs)(v.a,{children:[Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary navbar-static-top",id:"sideNav",children:[Object(i.jsx)("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top",children:Object(i.jsx)("span",{className:"d-block d-lg-none",children:"BCT"})}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(v.b,{className:"nav-link js-scroll-trigger",to:"/socket-data",children:"Socket Data"})}),Object(i.jsxs)("li",{className:"nav-item dropdown",children:[Object(i.jsx)(v.b,{className:"nav-link dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Api Data"}),Object(i.jsxs)("div",{className:"dropdown-menu text-center","aria-labelledby":"navbarDropdown",children:[Object(i.jsx)(v.b,{className:"dropdown-item",to:"/api-data",children:"Visual"}),Object(i.jsx)(v.b,{className:"dropdown-item",to:"/api-data-tabular",children:"Tabular"})]})]})]})})]}),Object(i.jsxs)(f.c,{children:[Object(i.jsx)(f.a,{path:"/api-data",children:Object(i.jsx)(j,{})}),Object(i.jsx)(f.a,{path:"/socket-data",children:Object(i.jsx)(O,{})}),Object(i.jsx)(f.a,{path:"/api-data-tabular",children:Object(i.jsx)(x,{})}),Object(i.jsx)(f.a,{path:"/",children:Object(i.jsx)(j,{})})]})]})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[271,1,2]]]);
//# sourceMappingURL=main.bda90953.chunk.js.map