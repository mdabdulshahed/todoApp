(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),o=c(22),s=c.n(o),l=(c(27),c(8)),i=c(2),d=(c(28),c(3)),r=c(6),j=c.n(r),b="https://mynotionapp.herokuapp.com/todo",u=c(7),O=c(9),m=c(1),h=function(e){var t=e._id,c=e.closeHandler,a=e.updateHandler,o=Object(n.useState)({title:"",desciption:""}),s=Object(d.a)(o,2),l=s[0],i=s[1],r=function(e){i((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(u.a)({},e.target.name,e.target.value))}))};return Object(m.jsxs)("form",{className:"form-container",onSubmit:function(e){!function(e){e.preventDefault(),j.a.put("".concat(b,"/updateTodo/").concat(t),l).then((function(e){i({title:"",description:""})})).catch((function(e){console.error(e)}))}(e),a(),c()},children:[Object(m.jsx)("label",{htmlFor:"title",className:"label",children:"Todo Title"}),Object(m.jsx)("input",{type:"text",name:"title",className:"input",onChange:r}),Object(m.jsx)("label",{htmlFor:"description",className:"label",children:"Todo Description"}),Object(m.jsx)("input",{type:"textarea",name:"description",className:"input",onChange:r}),Object(m.jsx)("button",{type:"submit",className:"todo-btn",children:"Add"})]})},p=function(e){e.key;var t=e.data,c=e.editHandler,n=e.deleteHandler;console.log(t);var a=t._id,o=t.title,s=t.description;return Object(m.jsxs)("li",{children:[Object(m.jsxs)("div",{className:"list",children:[Object(m.jsx)("h3",{children:o}),Object(m.jsx)("p",{children:s})]}),Object(m.jsxs)("div",{className:"btns",children:[Object(m.jsx)("button",{className:"add-btn",name:a,onClick:c,children:"Edit"}),Object(m.jsx)("button",{className:"delete-btn",name:a,onClick:n,children:"Delete"})]})]},a)},x=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)(!1),s=Object(d.a)(o,2),i=s[0],r=s[1],u=Object(n.useState)(""),O=Object(d.a)(u,2),x=O[0],f=O[1],N=Object(n.useState)(!1),g=Object(d.a)(N,2),v=g[0],T=g[1];Object(n.useEffect)((function(){j.a.get("".concat(b,"/getToDos")).then((function(e){console.log("res data",e),a(e.data.data),console.log(c)})).catch((function(e){console.log(e)}))}));var D=function(e){f(e.target.name),T(!0)},k=function(){f(""),T(!1)},y=function(e){j.a.delete("".concat(b,"/deleteToDo").concat(e.target.name)),a((function(t){return t.filter((function(t){return t._id!==e.target.name}))}))};return Object(m.jsxs)("section",{className:"todo-container",children:[Object(m.jsx)(l.b,{to:"/add-todo",className:"todo-btn-link",children:Object(m.jsx)("button",{className:"todo-btn",children:"Add ToDo"})}),Object(m.jsx)("button",{className:"todo-btn",children:"Add New ToDo"}),Object(m.jsxs)("section",{className:"todo-data",children:[Object(m.jsx)("h1",{children:"ToDo's"}),Object(m.jsxs)("ul",{className:"todo-list",children:[Object(m.jsx)(p,{data:c[0],editHandler:D,deletehandler:y},0),Object.keys(c).forEach((function(e,t){console.log(c[e]),c[e]}))]})]}),v?Object(m.jsx)("section",{className:"update-todo",children:Object(m.jsxs)("div",{className:"update",children:[Object(m.jsx)("p",{onClick:k,className:"close",children:"\xd7"}),Object(m.jsx)(h,{_id:x,closeHandler:k,updateHandler:function(){r(!i)}})]})}):""]})},f=function(){var e=Object(n.useState)({title:"",description:""}),t=Object(d.a)(e,2),c=t[0],a=t[1];function o(e){a((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(u.a)({},e.target.name,e.target.value))}))}return Object(m.jsxs)("section",{className:"container",children:[Object(m.jsx)(l.b,{to:"/",children:Object(m.jsx)("button",{type:"button",className:"todo-btn todo-btn-back",children:Object(m.jsx)("span",{children:" back "})})}),Object(m.jsx)("section",{className:"todo-data",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.a.post("".concat(b,"/addToDo"),c).then((function(e){a({title:"",description:""}),console.log(e.data.message)})).catch((function(e){console.log("Error couldn't create TODO"),console.log(e.message)}))},className:"form-container",noValidate:!0,children:[Object(m.jsx)("label",{className:"label",htmlFor:"title",children:"Todo Title"}),Object(m.jsx)("input",{type:"text",name:"title",value:c.title,onChange:o,className:"input"}),Object(m.jsx)("label",{className:"label",htmlFor:"description",children:"Describe it !"}),Object(m.jsx)("input",{type:"textarea",name:"description",value:c.description,onChange:o,className:"input"}),Object(m.jsx)("button",{type:"submit",className:"todo-btn",children:"Save Todo"})]})})]})};var N=function(){return Object(m.jsx)("div",{className:"todo-container-parent",children:Object(m.jsx)(l.a,{children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{exact:!0,path:"/",element:Object(m.jsx)(x,{})}),Object(m.jsx)(i.a,{path:"/add-todo",element:Object(m.jsx)(f,{})})]})})})};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.cd160629.chunk.js.map