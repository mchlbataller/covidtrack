_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{QnzB:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return n("t9tz")}])},t9tz:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return v}));var t=n("nKUr"),s=n("vJKn"),r=n.n(s),i=n("rg98"),c=n("jM59"),l=n("vDqi"),o=n.n(l),u=n("o0SM"),d=n("iae6"),m=n("Z3vd"),j=n("r9w1"),b=n("6f9l"),h=n.n(b),f=n("KYPV"),p=n("q1tI"),w=n("YFqc"),g=n.n(w),O=function(){var e=Object(p.useState)(!1),a=e[0],n=e[1],s=Object(p.useState)(!1),l=s[0],b=s[1],w=Object(p.useState)(!1),O=w[0],v=w[1],x=Object(f.c)({initialValues:{name:"",email:"",password:""},onSubmit:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),b(!1),n(!1),e.next=5,o.a.post("/api/register",{username:a.name,email:a.email,password:a.password}).then((function(e){v(!1),n(!0),b(!1)})).catch((function(e){v(!1),b(!0)}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()});return Object(t.jsx)(c.a,{children:Object(t.jsxs)(u.a,{children:[O&&Object(t.jsx)(d.a,{}),l&&Object(t.jsx)("p",{children:"An error has occurred with your registration."}),a&&Object(t.jsxs)("div",{className:"mb-10",children:[Object(t.jsxs)("p",{children:["Congratulations, your registration is successful!",Object(t.jsx)("br",{}),"You may now proceed to log in."]}),Object(t.jsx)(g.a,{href:"/auth/login",passHref:!0,children:Object(t.jsx)(m.a,{children:"Go to login page"})})]}),!O&&!a&&Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("form",{onSubmit:x.handleSubmit,children:[Object(t.jsx)(j.a,{variant:"filled",className:"mb-5",fullWidth:!0,color:"secondary",size:"small",name:"name",label:"Name",value:x.values.name,onChange:x.handleChange}),Object(t.jsx)(j.a,{variant:"filled",className:"mb-5",fullWidth:!0,color:"secondary",size:"small",name:"email",label:"Email",value:x.values.email,onChange:x.handleChange}),Object(t.jsx)(j.a,{variant:"filled",fullWidth:!0,size:"small",className:"mb-10",name:"password",color:"secondary",label:"Password",type:"password",value:x.values.password,onChange:x.handleChange}),Object(t.jsx)(m.a,{className:h.a.submit,type:"submit",children:"Register"})]}),Object(t.jsx)("p",{children:"Registering will require a verification from our system administrators. Please make sure to check your email after registering for further validation."})]})]})})};function v(){return Object(t.jsx)(O,{})}}},[["QnzB",0,2,1,3,7,12]]]);