"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[917],{917:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(725),a=t(439),i=t(791),o=t(434),s=t(52),u=function(e){return e.contacts.items},c=function(e){return e.contacts.filter},l=t(184),d={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},h=function(){var e=(0,i.useState)(""),n=(0,a.Z)(e,2),t=n[0],r=n[1],c=(0,i.useState)(""),h=(0,a.Z)(c,2),m=h[0],f=h[1],b=(0,o.v9)(u),p=(0,o.I0)(),x=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":r(a);break;case"number":f(a);break;default:return}},v=function(){r(""),f("")};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),b&&b.find((function(e){return e.name===t})))return alert("Contact ".concat(t," already exists"));p((0,s.uK)({name:t,number:m})),v()},style:d.form,children:[(0,l.jsxs)("lable",{htmlFor:"",style:d.label,children:["Name",(0,l.jsx)("input",{type:"text",name:"name",value:t,onChange:x,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,l.jsxs)("lable",{htmlFor:"",style:d.label,children:["Phone number",(0,l.jsx)("input",{type:"tel",name:"number",value:m,onChange:x,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,l.jsx)("button",{type:"submit",children:"Add contact"})]})})},m=t(538),f={div:{width:320,marginTop:45},input:{marginTop:5}},b=function(){var e=(0,o.I0)(),n=(0,o.v9)(c);return(0,l.jsxs)("div",{style:f.div,children:[(0,l.jsx)("tytle",{children:"Find contact by name"}),(0,l.jsx)("input",{style:f.input,type:"text",value:n,onChange:function(n){e((0,m.x)(n.currentTarget.value))}})]})},p=function(){var e=(0,o.I0)(),n=(0,o.v9)(u),t=(0,o.v9)(c);return(0,l.jsxs)(r.W,{children:[(0,l.jsx)("h2",{children:"Contacts"}),n&&n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(n){var t=n.id,r=n.name,a=n.number;return(0,l.jsxs)("li",{children:[r,": ",a,(0,l.jsx)("button",{type:"button",name:"delete",onClick:function(){return n=t,void e((0,s.GK)(n));var n},children:"Delete"})]},t)}))]})},x=function(){var e=(0,o.I0)();return(0,i.useEffect)((function(){e((0,s.yF)())}),[e]),(0,l.jsxs)(r.W,{children:[(0,l.jsx)("h2",{children:"Phonebook"}),(0,l.jsx)(h,{}),(0,l.jsx)(b,{}),(0,l.jsx)(p,{})]})}}}]);
//# sourceMappingURL=917.65475dba.chunk.js.map