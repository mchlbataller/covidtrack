_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"5gxk":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return d}));var r=t("nKUr"),c=t("cpVT"),a=t("ofer"),o=t("r9w1"),i=t("Z3vd"),u=t("hlFM"),s=t("m6V+"),l=t("KYPV"),b=t("vDqi"),j=t.n(b),m=t("20a2"),O=t("VtrM");function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function f(n){var e=Object(O.a)("/api/announcement",(function(n){return j.a.get(n).then((function(n){return n.data}))})),t=e.data,b=e.error,f=(Object(m.useRouter)(),Object(l.c)({initialValues:{announcement:""},onSubmit:function(n){j.a.post("/api/announcement",function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){Object(c.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},n)).then((function(n){return console.log(n)})).catch((function(n){return console.error(n)}))}}));return b?Object(r.jsx)(s.a,{children:"Error fetching announcements.."}):t?Object(r.jsxs)(s.a,{title:"Announcements",children:[Object(r.jsx)(a.a,{variant:"h4",gutterBottom:!0,children:"Make an announcement"}),Object(r.jsxs)("form",{onSubmit:f.handleSubmit,className:"flex flex-col lg:w-1/3 mt-5",children:[Object(r.jsx)(o.a,{label:"Announcement",name:"announcement",variant:"filled",value:f.values.announcement,onChange:f.handleChange,className:"mb-5",multiline:!0}),Object(r.jsx)(i.a,{type:"submit",variant:"contained",children:"Submit"})]}),Object(r.jsxs)("section",{className:"mt-10",children:[Object(r.jsx)(a.a,{variant:"h6",gutterBottom:!0,children:"Preview"}),Object(r.jsx)(u.a,{className:"px-5 bg-blue-900 border-gray-400 py-2 whitespace-pre-wrap",children:Object(r.jsx)(a.a,{variant:"body1",children:t.announcement[0].announcement})})]})]}):Object(r.jsx)(s.a,{children:"Loading"})}function d(){return Object(r.jsx)(f,{})}},a5tn:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/announcements",function(){return t("5gxk")}])}},[["a5tn",0,2,1,3,4,5,6,7,8]]]);