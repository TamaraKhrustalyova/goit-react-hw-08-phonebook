"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[901],{2901:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(9800),a=t(9439),s=t(2791),i=t(9434),o=t(6052),c=function(e){return e.contacts.items},l=function(e){var n=e.contacts,t=n.filter,r=n.items;if(console.log(t,r),!t)return r;var a=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return console.log("zzz",a),a},u=function(e){return e.contacts.filter},d=t(184),m={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},h=function(){var e=(0,s.useState)(""),n=(0,a.Z)(e,2),t=n[0],r=n[1],l=(0,s.useState)(""),u=(0,a.Z)(l,2),h=u[0],f=u[1],p=(0,i.v9)(c),b=(0,i.I0)(),x=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":r(a);break;case"number":f(a);break;default:return}},v=function(){r(""),f("")};return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),p&&p.find((function(e){return e.name===t||e.number.trim()===h.trim()})))return v(),alert("This contact already exists");b((0,o.uK)({name:t,number:h})),v()},style:m.form,children:[(0,d.jsxs)("label",{htmlFor:"",style:m.label,children:["Name",(0,d.jsx)("input",{type:"text",name:"name",value:t,onChange:x,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,d.jsxs)("label",{htmlFor:"",style:m.label,children:["Phone number",(0,d.jsx)("input",{type:"tel",name:"number",value:h,onChange:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,d.jsx)("button",{type:"submit",children:"Add contact"})]})})},f=t(1538),p={div:{width:320,marginTop:45},input:{marginTop:5}},b=function(){var e=(0,i.I0)(),n=(0,i.v9)(u);return console.log(n),(0,d.jsxs)("div",{style:p.div,children:[(0,d.jsx)("h2",{children:"Find contact by name"}),(0,d.jsx)("input",{style:p.input,type:"text",value:n,onChange:function(n){e((0,f.x)(n.currentTarget.value))}})]})},x=function(){var e=(0,i.I0)(),n=(0,i.v9)(l);return(0,d.jsxs)(r.W,{children:[(0,d.jsx)("h2",{children:"Contacts"}),n&&n.map((function(n){var t=n.id,r=n.name,a=n.number;return(0,d.jsxs)("li",{children:[r,": ",a,(0,d.jsx)("button",{type:"button",name:"delete",onClick:function(){return n=t,void e((0,o.GK)(n));var n},children:"Delete"})]},t)}))]})},v=t(1413),g=t(4925),j=t(5597),y=t(6516),k=t(2996),C=t(5113),w=t(6992),_=["className"],z=(0,j.G)((function(e,n){var t=(0,y.mq)("Heading",e),r=(0,k.Lr)(e),a=(r.className,(0,g.Z)(r,_));return(0,d.jsx)(C.m.h2,(0,v.Z)((0,v.Z)({ref:n,className:(0,w.cx)("chakra-heading",e.className)},a),{},{__css:t}))}));z.displayName="Heading";var Z=function(){var e=(0,i.I0)();return(0,s.useEffect)((function(){e((0,o.yF)())}),[e]),(0,d.jsxs)(r.W,{children:[(0,d.jsx)(z,{as:"h3",size:"lg",color:"lightsteelblue",children:"Phonebook"}),(0,d.jsx)(h,{}),(0,d.jsx)(b,{}),(0,d.jsx)(x,{})]})}}}]);
//# sourceMappingURL=901.dbf5d716.chunk.js.map