(this.webpackJsonpheavenx=this.webpackJsonpheavenx||[]).push([[14],{594:function(e,a,t){"use strict";t.r(a);var s=t(2),n=t(11),c=t.n(n),o=t(1),i=t.n(o),r=t(45),l=t(8),h=t(122),d=t(62),j=t(0);a.default=function(){var e=i.a.useState(!1),a=Object(s.a)(e,2),t=a[0],n=a[1],o=i.a.useState(""),p=Object(s.a)(o,2),u=p[0],g=p[1],b=i.a.useState(""),m=Object(s.a)(b,2),O=m[0],v=m[1],x=Object(r.i)().token,f=Object(r.g)();return Object(j.jsxs)("div",{className:"verifyemail",children:[Object(j.jsx)(d.a,{Loading:t}),Object(j.jsx)("img",{className:"hotairballoon three",src:"/images/hotairballoon.svg",alt:"hotAirBalloon",width:"200px",height:"200px"}),Object(j.jsxs)("div",{className:"verifyemail-content",children:[Object(j.jsx)("h2",{children:"Change Your Password"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"password",placeholder:"New Password",onChange:function(e){g(e.target.value)}}),Object(j.jsx)("input",{type:"password",placeholder:"Confirm Password",onChange:function(e){v(e.target.value)}}),Object(j.jsx)(h.a,{variant:"danger",onClick:function(){O===u?(n(!0),c()({method:"post",url:l.j+"/api/auth/resetpassword/".concat(x),data:{password:u}}).then((function(e){e.data.success?(alert(e.data.message),f.push("/login")):alert(e.data.message)})).catch((function(e){console.log(e)}))):alert("Confirm and password not match")},children:"Change"})]})]}),Object(j.jsx)("img",{className:"plane1",src:"/images/plane.svg",alt:"Plane"})]})}}}]);
//# sourceMappingURL=14.2ba331b1.chunk.js.map