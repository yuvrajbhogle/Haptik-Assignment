(this.webpackJsonpstarter=this.webpackJsonpstarter||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){e.exports=a(24)},24:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(12),r=a.n(l),i=(a(11),a(4)),o=a(2),s=a(3),u=a(5),m=a(13),d=function(){var e=Object(n.useState)([{itemName:"Mike",id:1,isSelected:!0},{itemName:"Eleven",id:2,isSelected:!1},{itemName:"Will",id:3,isSelected:!1}]),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(a),d=Object(o.a)(r,2),b=d[0],E=d[1],f=Object(n.useState)(""),v=Object(o.a)(f,2),j=v[0],N=v[1],O=Object(n.useState)(""),h=Object(o.a)(O,2),S=h[0],p=h[1],g=Object(n.useState)(!1),y=Object(o.a)(g,2),k=y[0],C=y[1],w=Object(n.useState)(0),x=Object(o.a)(w,2),L=x[0],J=x[1],M=Object(n.useState)(4),q=Object(o.a)(M,2),B=q[0],D=q[1],F=Object(n.useState)(1),I=Object(o.a)(F,2),K=I[0],T=I[1],W=function(e){var t=Object(i.a)(e),a=t.filter((function(e){return e.isSelected})),n=t.filter((function(e){return!e.isSelected}));return t=[].concat(Object(i.a)(a),Object(i.a)(n)),S?t=t.filter((function(e){var t=e.itemName.toLowerCase(),a=S.toLowerCase();return-1!==t.search(a)})):C(!0),t},Y=function(e,t,a,n){return a>b.length&&D(b.length),console.log(t+"  "+a),console.log(e),e=e.slice(t,a+1),console.log(e),e};return c.a.createElement("div",{className:"app-background"},c.a.createElement("div",{className:"main-container"},c.a.createElement("h1",null,"Friend List"),c.a.createElement("div",{className:k?"search-box active":"search-box"},c.a.createElement("input",{className:"search-txt",type:"text",value:S,onChange:function(e){p(e.target.value),W(b)},placeholder:"Type your query and click icon"}),c.a.createElement("button",{className:"search-btn",onClick:function(){return l(Y(W(b),L,B))}},c.a.createElement(s.a,{icon:u.c}))),c.a.createElement("div",{className:"add-item-box"},c.a.createElement("input",{value:j,onChange:function(e){return N(e.target.value)},onKeyDown:function(e){if("Enter"===e.key&&j){var t={itemName:j,id:b.length+1,isSelected:!1},a=[].concat(Object(i.a)(b),[t]);E(a),N(""),l(Y(W(a),L,B))}},className:"add-item-input",placeholder:"Enter Your friends name"})),c.a.createElement("div",{className:"item-list"},a.map((function(e,t){return c.a.createElement("div",{className:"item-container"},c.a.createElement("div",{className:"item-name"},c.a.createElement("h6",null,t+1+")"," ",e.itemName),c.a.createElement("small",null,"is your friend")),c.a.createElement("div",{className:"two-buttons"},c.a.createElement("button",{className:"mybutton",onClick:function(){return function(e){var t=Object(i.a)(b);for(var a in t)t[a].id==e&&(t[a].isSelected=!t[a].isSelected);E(t),l(Y(W(t),L,B))}(e.id)}},e.isSelected?c.a.createElement(s.a,{icon:u.d}):c.a.createElement(s.a,{icon:m.a})),c.a.createElement("button",{className:"mybutton",onClick:function(){return function(e){var t=Object(i.a)(b);t=t.filter((function(t){return t.id!==e})),E(t),l(Y(W(t),L,B))}(e.id)}},c.a.createElement(s.a,{icon:u.e}))))}))),c.a.createElement("div",{className:"footer"},c.a.createElement("button",{className:"mybutton",onClick:function(){return console.log(L),void(L>=4&&(J(L-4),D(L-1),T(K-1),l(Y(W(b),L-4,L-1))))},disabled:0==L},c.a.createElement(s.a,{icon:u.a})),K,c.a.createElement("button",{className:"mybutton",onClick:function(){B<b.length&&(J(L+4),D(B+4),T(K+1),l(Y(W(b),L+4,B+4)))},disabled:B+1>b.length},c.a.createElement(s.a,{icon:u.b})))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a02bf8a8.chunk.js.map