(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(3),r=n.n(c),i=(n(13),n(4)),s=n(5),o=n(6),l=n(8),u=n(7),j=(n(14),n(15),n(0)),b=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)("div",{className:"FeedbackOptions",children:t.map((function(e){return Object(j.jsx)("button",{name:e,type:"button",onClick:n,children:e},e)}))})},d=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(j.jsxs)(j.Fragment,{children:[" ",Object(j.jsxs)("p",{children:["Good: ",t]}),Object(j.jsxs)("p",{children:["Neutral: ",n]}),Object(j.jsxs)("p",{children:["Bad: ",a]}),Object(j.jsxs)("p",{children:["Total: ",c]}),Object(j.jsxs)("p",{children:["Positive feedback: ",r,"%"]})," "]})},h=function(e){var t=e.title,n=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:t}),n]})},p=function(e){var t=e.title;return Object(j.jsx)("h3",{children:t})},O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:e.props.initialValue,neutral:e.props.initialValue,bad:e.props.initialValue},e.handleIncrement=function(t){e.setState((function(e){return Object(i.a)({},t.target.name,e[t.target.name]+1)}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=function(){return t+n+a},r=Object.keys(this.state);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{title:"Please leave feedback",children:Object(j.jsx)(b,{options:r,onLeaveFeedback:this.handleIncrement})}),Object(j.jsx)(h,{title:"Statistics",children:Object.values(this.state).some((function(e){return 0!==e}))?Object(j.jsx)(d,{good:t,neutral:n,bad:a,total:c(),positivePercentage:0===c()?"":t/c()*100}):Object(j.jsx)(p,{message:"No feedback given"})})]})}}]),n}(a.Component);O.defaultProps={initialValue:0};var f=O;r.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.af409d5f.chunk.js.map