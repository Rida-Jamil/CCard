(this.webpackJsonpcontactlist=this.webpackJsonpcontactlist||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(9),s=n.n(a),r=(n(15),n(6)),j=(n(16),n(17),n(21)),o=n(22),l=n(0),u=function(t){var e=Object(c.useState)(!0),n=Object(r.a)(e,2),i=n[0],a=n[1];return Object(l.jsx)("div",{children:Object(l.jsxs)(j.a,{style:{width:"18rem"},children:[Object(l.jsx)(j.a.Img,{variant:"top",src:t.image}),Object(l.jsxs)(j.a.Body,{children:[Object(l.jsx)(j.a.Title,{children:"Contact Name"}),Object(l.jsxs)(j.a.Text,{children:[Object(l.jsxs)("p",{children:["Name:  ",t.name]}),Object(l.jsxs)("p",{children:["Email:",t.email," "]}),Object(l.jsxs)("p",{children:["Nationality:",t.nationality," "]}),i&&Object(l.jsxs)("p",{children:["Age: ",t.age]})]}),Object(l.jsx)(o.a,{variant:"primary",onClick:function(){return a(!i)},children:"Show Age"})]})]})})},b=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)((function(){fetch("https://randomuser.me/api/?results=5").then((function(t){return t.json()})).then((function(t){console.log(t),i(t.results)}))}),[]),Object(l.jsx)(l.Fragment,{children:n.map((function(t){return Object(l.jsx)(u,{image:t.picture.medium,name:t.name.first+""+t.name.last,email:t.email,nationality:t.nat,age:t.dob.age})}))})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),d()}},[[19,1,2]]]);
//# sourceMappingURL=main.21746edf.chunk.js.map