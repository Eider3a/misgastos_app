webpackJsonp([1],{"+rkr":function(e,t,s){"use strict";var a=s("mtWM"),n=s.n(a),r={name:"UserBalance",data:function(){return{username:"",balance:0}},created:function(){this.username=this.$route.params.username,console.log("inside the userexpenses"+this.username),console.log("Se disparo el created de UserBalance");let e=this;n.a.get("https://mis-gastos-mintic.herokuapp.com/user/expenses/"+this.username).then(t=>{console.log(t),e.balance=t.data.expenses}).catch(e=>{console.log(e),alert("ERROR Servidor")})}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"UserBalance"}},[s("h2",[e._v(e._s(e.username))]),e._v(" "),s("h2",[e._v("Los gastos de este mes son: "),s("span",[e._v("  "+e._s(e.balance)+" COP ")])])])},staticRenderFns:[]};var i=s("VU/8")(r,o,!1,function(e){s("aZ1G")},null,null);t.a=i.exports},"3Ufk":function(e,t){},"9M+g":function(e,t){},"FJN/":function(e,t,s){"use strict";var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"Welcome"}},[t("h2",[this._v("Bienvenido "+this._s(this.username))]),this._v(" "),t("h3",[this._v("Con nuestra app tu puedes controlar los gastos de cada mes")])])},staticRenderFns:[]};var n=s("VU/8")({name:"Welcome",data:function(){return{username:"none"}},created:function(){this.username=this.$route.params.username}},a,!1,function(e){s("3Ufk")},null,null);t.a=n.exports},M93x:function(e,t,s){"use strict";var a={name:"App",components:{},data:function(){return{is_auth:localStorage.getItem("isAuth")||!1}},methods:{init:function(){if(console.log(this.$router),"user"!=this.$route.name){let e=localStorage.getItem("current_username");this.$router.push({name:"user",params:{username:e}})}},getBalance:function(){if(console.log(this.$router),"user_balance"!=this.$route.name){let e=localStorage.getItem("current_username");if(!e)return alert("Debes loguearte para ver el total de tus gastos");this.$router.push({name:"user_balance",params:{username:e}})}},loginSuccessful:function(){if(console.log(this.$router),"welcome"!=this.$route.name){let e=localStorage.getItem("current_username");this.$router.push({name:"welcome",params:{username:e}})}},logout:function(){if(console.log(this.$router),"user"!=this.$route.name){localStorage.removeItem("current_username");this.$router.push({name:"user"})}}},beforeCreate:function(){localStorage.setItem("current_username",""),localStorage.setItem("isAuth",!1),this.$router.push({name:"user"})}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"header"},[s("h1",[e._v("Mis gastos App")]),e._v(" "),s("nav",[e.is_auth?s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:e.getBalance}},[e._v("Gastos")]):e._e(),e._v(" "),e.is_auth?s("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:e.logout}},[e._v("CerrarSesión")]):e._e()])]),e._v(" "),s("div",{staticClass:"main-component"},[s("router-view")],1),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("p",{staticClass:"copyright-text"},[this._v("Copyright © MinTic 2020: Ciclo 3, Equipo24\n       ")])])}]};var r=s("VU/8")(a,n,!1,function(e){s("jUeh")},null,null);t.a=r.exports},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("u7Vc"),s("yNhk");var a=s("7+uW"),n=s("Tqaz");s("qb6w"),s("9M+g");a.default.use(n.a);var r=s("M93x"),o=s("/ocq"),i=s("cHtD");a.default.use(o.a),a.default.config.productionTip=!1,new a.default({router:i.a,el:"#app",components:{App:r.a},template:"<App/>"})},aZ1G:function(e,t){},cHtD:function(e,t,s){"use strict";(function(e){var a=s("/ocq"),n=s("jyJz"),r=s("+rkr"),o=s("M93x"),i=s("FJN/");const u=new a.a({mode:"history",base:e,routes:[{path:"/",name:"root",component:o.a},{path:"/user/welcome/:username",name:"welcome",component:i.a},{path:"/user",name:"user",component:n.a},{path:"/user/balance/:username",name:"user_balance",component:r.a}]});t.a=u}).call(t,"/")},jUeh:function(e,t){},jyJz:function(e,t,s){"use strict";var a=s("mtWM"),n=s.n(a);document.getElementById("username"),document.getElementById("password");var r={name:"User",data:function(){return{username:"none"}},methods:{login:function(){if(this.username=this.usernameField,console.log("Oprimio el boton de login"),console.log(!this.usernameField,!this.passwordField),!this.usernameField||!this.passwordField)return alert("Debes llenar los campos de usuario y contraseña");let e=this,t={username:this.usernameField,password:this.passwordField};n.a.post("https://mis-gastos-mintic.herokuapp.com",t).then(t=>{if(console.log(t),e.balance=t.data.Autenticado,e.auth=t.data.Autenticado,e.auth){if(alert("Usuario logeado correctamente"),localStorage.setItem("current_username",this.username),"welcome"!=this.$route.name){console.log("entro al cambio de ruta");let e=localStorage.getItem("current_username");this.$router.push({name:"welcome",params:{username:e}})}}else alert("Error: las credenciales son incorrectas")}).catch(e=>{console.log(e),alert("Error: las credenciales son incorrectas")})}},created:function(){}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"User"}},[s("div",{staticClass:"main"},[s("p",{staticClass:"sign",attrs:{align:"center"}},[e._v("Login")]),e._v(" "),e._m(0),e._v(" "),s("div",{staticClass:"form1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.usernameField,expression:"usernameField"}],staticClass:"un ",attrs:{id:"username",type:"text",align:"center",placeholder:"nombre de usuario"},domProps:{value:e.usernameField},on:{input:function(t){t.target.composing||(e.usernameField=t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordField,expression:"passwordField"}],staticClass:"pass",attrs:{id:"password",type:"password",align:"center",placeholder:"contraseña"},domProps:{value:e.passwordField},on:{input:function(t){t.target.composing||(e.passwordField=t.target.value)}}}),e._v(" "),s("button",{staticClass:"submit",attrs:{align:"center"},on:{click:e.login}},[e._v("Sign in")]),e._v(" "),e._m(1)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Usuarios en la DB ficticia:")]),this._v(" "),t("li",[this._v("username: camilo24, password: root")]),this._v(" "),t("li",[this._v("username: andres18, password: root")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"forgot",attrs:{align:"center"}},[t("a",{attrs:{href:"#"}},[this._v("Forgot Password?")])])}]};var i=s("VU/8")(r,o,!1,function(e){s("p6Bt")},null,null);t.a=i.exports},p6Bt:function(e,t){},qb6w:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.efeba25155a33b10ce33.js.map