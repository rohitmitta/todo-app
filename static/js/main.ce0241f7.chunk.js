(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(8),r=n.n(o),c=(n(15),n(2)),s=n(3),l=n(5),u=n(4),h=n(1),d=n(6),m=(n(16),n(17),function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={items:[],text:""},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"ToDo List"),i.a.createElement(b,{items:this.state.items}),i.a.createElement("label",{htmlFor:"new-todo"},"What needs to be done?"),i.a.createElement("input",{id:"new-todo",onChange:this.handleChange,value:this.state.text}),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("button",null,"Add #",this.state.items.length+1)))}},{key:"handleChange",value:function(t){this.setState({text:t.target.value})}},{key:"handleSubmit",value:function(t){if(t.preventDefault(),this.state.text){var e={text:this.state.text,id:Date.now()};this.setState(function(t){return{items:t.items.concat(e),text:""}})}}}]),e}(i.a.Component)),b=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return this.props.items.map(function(t){return i.a.createElement("li",{key:t.id},t.text)})}}]),e}(i.a.Component),f=m;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.ce0241f7.chunk.js.map