(this.webpackJsonpheavenx=this.webpackJsonpheavenx||[]).push([[15],{591:function(e,a,t){"use strict";t.r(a);var s=t(2),n=t(1),i=t.n(n),l=t(11),c=t.n(l),o=t(7),r=t(122),h=t(62),d=t(0);a.default=function(){var e=i.a.useState(!1),a=Object(s.a)(e,2),t=a[0],n=a[1],l=i.a.useState(""),j=Object(s.a)(l,2),u=j[0],g=j[1];return Object(d.jsxs)("div",{className:"verifyemail",children:[Object(d.jsx)(h.a,{Loading:t}),Object(d.jsx)("img",{className:"hotairballoon three",src:"/images/hotairballoon.svg",alt:"hotAirBalloon",width:"200px",height:"200px"}),Object(d.jsxs)("div",{className:"verifyemail-content",children:[Object(d.jsx)("h2",{children:"Please Enter your registered Email Id"}),Object(d.jsx)("input",{type:"text",placeholder:"Email Id",onChange:function(e){g(e.target.value)},style:{width:"27%"}}),Object(d.jsx)(r.a,{variant:"danger",onClick:function(){n(!0),c()({method:"post",url:o.j+"/api/auth/reverify",data:{email:u}}).then((function(e){console.log(e),e.data.success?(console.log(e.data),alert(e.data.message)):alert(e.data.message)})).catch((function(e){console.log(e)})),n(!1)},children:"Submit"})]}),Object(d.jsx)("img",{className:"plane1",src:"/images/plane.svg",alt:"Plane"})]})}}}]);
//# sourceMappingURL=15.db8f0d5b.chunk.js.map