(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{27:function(t,e,c){},28:function(t,e,c){},48:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),o=c(22),s=c.n(o),l=(c(27),c(8)),i=c(2),r=(c(28),c(3)),d=c(6),j=c.n(d),b="http://localhost:4000/todo",u=c(7),O=c(9),h=c(1),m=function(t){var e=t._id,c=t.closeHandler,a=t.updateHandler,o=Object(n.useState)({title:"",desciption:""}),s=Object(r.a)(o,2),l=s[0],i=s[1],d=function(t){i((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(u.a)({},t.target.name,t.target.value))}))};return Object(h.jsxs)("form",{className:"form-container",onSubmit:function(t){!function(t){t.preventDefault(),j.a.put("".concat(b,"/updateTodo/").concat(e),l).then((function(t){i({title:"",description:""})})).catch((function(t){console.error(t)}))}(t),a(),c()},children:[Object(h.jsx)("label",{htmlFor:"title",className:"label",children:"Todo Title"}),Object(h.jsx)("input",{type:"text",name:"title",className:"input",onChange:d}),Object(h.jsx)("label",{htmlFor:"description",className:"label",children:"Todo Description"}),Object(h.jsx)("input",{type:"textarea",name:"description",className:"input",onChange:d}),Object(h.jsx)("button",{type:"submit",className:"todo-btn",children:"Add"})]})},p=function(){var t=Object(n.useState)([]),e=Object(r.a)(t,2),c=e[0],a=e[1],o=Object(n.useState)(!1),s=Object(r.a)(o,2),i=s[0],d=s[1],u=Object(n.useState)(""),O=Object(r.a)(u,2),p=O[0],x=O[1],f=Object(n.useState)(!1),N=Object(r.a)(f,2),g=N[0],v=N[1];Object(n.useEffect)((function(){j.a.get("".concat(b,"/getToDos")).then((function(t){console.log("res data",t),a(t.data.data)})).catch((function(t){console.log(t)}))}),[]);var T=function(){x(""),v(!1)};return Object.keys(c).forEach((function(t,e){})),Object(h.jsxs)("section",{className:"todo-container",children:[Object(h.jsx)(l.b,{to:"/add-todo",className:"todo-btn-link",children:Object(h.jsx)("button",{className:"todo-btn",children:"Add ToDo"})}),Object(h.jsx)("button",{className:"todo-btn",children:"Add New ToDo"}),Object(h.jsxs)("section",{className:"todo-data",children:[Object(h.jsx)("h1",{children:"ToDo's"}),Object(h.jsx)("ul",{className:"todo-list",children:Object.keys(c).forEach((function(t,e){console.log(c[t]),c[t]}))})]}),g?Object(h.jsx)("section",{className:"update-todo",children:Object(h.jsxs)("div",{className:"update",children:[Object(h.jsx)("p",{onClick:T,className:"close",children:"\xd7"}),Object(h.jsx)(m,{_id:p,closeHandler:T,updateHandler:function(){d(!i)}})]})}):""]})},x=function(){var t=Object(n.useState)({title:"",description:""}),e=Object(r.a)(t,2),c=e[0],a=e[1];function o(t){a((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(u.a)({},t.target.name,t.target.value))}))}return Object(h.jsxs)("section",{className:"container",children:[Object(h.jsx)(l.b,{to:"/",children:Object(h.jsx)("button",{type:"button",className:"todo-btn todo-btn-back",children:Object(h.jsx)("span",{children:" back "})})}),Object(h.jsx)("section",{className:"todo-data",children:Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j.a.post("".concat(b,"/addToDo"),c).then((function(t){a({title:"",description:""}),console.log(t.data.message)})).catch((function(t){console.log("Error couldn't create TODO"),console.log(t.message)}))},className:"form-container",noValidate:!0,children:[Object(h.jsx)("label",{className:"label",htmlFor:"title",children:"Todo Title"}),Object(h.jsx)("input",{type:"text",name:"title",value:c.title,onChange:o,className:"input"}),Object(h.jsx)("label",{className:"label",htmlFor:"description",children:"Describe it !"}),Object(h.jsx)("input",{type:"textarea",name:"description",value:c.description,onChange:o,className:"input"}),Object(h.jsx)("button",{type:"submit",className:"todo-btn",children:"Save Todo"})]})})]})};var f=function(){return Object(h.jsx)("div",{className:"todo-container-parent",children:Object(h.jsx)(l.a,{children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/",element:Object(h.jsx)(p,{})}),Object(h.jsx)(i.a,{path:"/add-todo",element:Object(h.jsx)(x,{})})]})})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.dd4b5a94.chunk.js.map