(this["webpackJsonpmy-app2"]=this["webpackJsonpmy-app2"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),j=n(7),i=n.n(j),s=(n(16),n(2)),u=(n(6),n(0));var a=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],j=Object(c.useState)(0),i=Object(s.a)(j,2),a=i[0],o=i[1],b=Object(c.useReducer)((function(e,t){switch(t.type){case"increment":return{counter:e.counter+1};case"decrement":return{counter:e.counter-1};default:throw new Error}}),{counter:0}),l=Object(s.a)(b,2),O=l[0],d=l[1],x=Object(c.useRef)(0),h=Object(c.useRef)();return console.log("I rendered"),Object(c.useEffect)((function(){document.title="You clicked ".concat(a," times")})),Object(c.useEffect)((function(){h.current.focus()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("p",{children:"App Component"}),Object(u.jsx)("a",{href:"##",onClick:function(){r(!n)},children:"Want tttto buy new Car"}),n&&Object(u.jsx)("p",{children:"Call us- 456 666 777"}),Object(u.jsx)("button",{onClick:function(){o(a+1)},children:"Click for effect"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(){x.current++,console.log("clicked ".concat(x.current," times"))},children:"Click me ref"}),Object(u.jsx)("input",{ref:h,type:"text",name:"username",onClick:function(){}}),Object(u.jsx)("br",{}),O.counter,Object(u.jsx)("button",{onClick:function(){return d({type:"increment"})},children:"Increment"}),Object(u.jsx)("button",{onClick:function(){return d({type:"decrement"})},children:"Decrement"})]})},o=n(3),b=n(4),l=function(){var e=function(e){j({type:"handle_input_text",field:e.target.name,payload:e.target.value})},t=Object(c.useReducer)((function(e,t){switch(t.type){case"handle_input_text":return Object(b.a)(Object(b.a)({},e),{},Object(o.a)({},t.field,t.payload));default:return e}}),{username:"",email:"",password:""}),n=Object(s.a)(t,2),r=n[0],j=n[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("p",{children:"This is from Reducer1 Component"}),Object(u.jsxs)("form",{children:["Username : ",Object(u.jsx)("input",{type:"text",name:"username",value:r.username,onChange:function(t){return e(t)}}),r.username,Object(u.jsx)("br",{}),"Email : ",Object(u.jsx)("input",{type:"text",name:"email",value:r.email,onChange:function(t){return e(t)}}),r.email,Object(u.jsx)("br",{}),"Password : ",Object(u.jsx)("input",{type:"text",name:"password",value:r.password,onChange:function(t){return e(t)}}),r.password,Object(u.jsx)("br",{})]})]})},O=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],j=Object(c.useState)(!1),i=Object(s.a)(j,2),a=i[0],o=i[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("p",{children:"State practice"}),Object(u.jsx)("div",{children:n}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){r(n+1)},children:"Increment"})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){r(n-1)},children:"Decrement"})}),Object(u.jsx)("a",{href:"##",onClick:function(){o(!a)},children:"Click Link"}),a&&Object(u.jsx)("p",{children:"Here is my COntact Number:99 99 99 99 99"})]})},d=function(){var e=function(e){j({type:"input_text_alter",field:e.target.name,payload:e.target.value})},t=Object(c.useReducer)((function(e,t){switch(t.type){case"input_text_alter":return Object(b.a)(Object(b.a)({},e),{},Object(o.a)({},t.field,t.payload));default:return e}}),{name:"",email:"",password:""}),n=Object(s.a)(t,2),r=n[0],j=n[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("p",{children:"useReducer Practice"}),Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",name:"username",value:r.username,onChange:function(t){return e(t)}}),r.username]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"email",name:"email",value:r.email,onChange:function(t){return e(t)}}),r.email]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"password",name:"password",value:r.password,onChange:function(t){return e(t)}}),r.password]})]})]})},x=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("p",{children:"UseEffect Practice"})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,j=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),j(e),i(e)}))},f=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("p",{children:"Practice Session"})]})};var p=r.a.memo((function(e){var t=e.name;return console.log("Rendered"),Object(u.jsxs)("p",{children:["My name is: ",t]})}));function m(e){for(var t=0;t<2e8;)t++;return e<0?-1:0===e?1:e*m(e-1)}var v=function(){var e=Object(c.useState)(1),t=Object(s.a)(e,2),n=t[0],r=t[1],j=Object(c.useMemo)((function(){return m(n)}),[n]),i=Object(c.useState)(""),a=Object(s.a)(i,2),o=a[0],b=a[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{children:["Factorial of",n," is : ",j," "]}),Object(u.jsx)("button",{onClick:function(){return r(n+1)},children:"Increment"}),Object(u.jsx)("button",{onClick:function(){return r(n-1)},children:"Decrement"})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Enter Name :"}),Object(u.jsx)("input",{type:"text",value:o,placeholder:"enter name",onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("hr",{}),Object(u.jsx)(p,{name:o})]})]})},C=n(8),y=n(9),g=n(11),k=n(10),w=function(e){Object(g.a)(n,e);var t=Object(k.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{children:"I am from class component"})}}]),n}(c.Component);i.a.render(Object(u.jsxs)(r.a.StrictMode,{children:[Object(u.jsx)(a,{}),Object(u.jsx)(w,{}),Object(u.jsx)(l,{}),Object(u.jsx)(f,{}),Object(u.jsx)(v,{}),Object(u.jsx)(O,{}),Object(u.jsx)(d,{}),Object(u.jsx)(x,{})]}),document.getElementById("root")),h()},6:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.2f7d0519.chunk.js.map