webpackJsonp([1],{"+rkr":function(e,t,s){"use strict";var a=s("mtWM"),n=s.n(a),r={name:"UserBalance",data:function(){return{username:"",balance:0,expenses:[],count:0,totalExpenses:0}},created:function(){this.username=this.$route.params.username,console.log("inside the userexpenses"+this.username),console.log("Se disparo el created de UserBalance");let e=this;n.a.get("http://127.0.0.1:8000/user/expenses/"+this.username).then(t=>{console.log(t);let s=t.data.count;e.count=s,e.expenses=t.data.data,console.log(e.expenses[1].title);let a=0;e.expenses.forEach(e=>a+=parseFloat(e.value)),e.totalExpenses=a}).catch(e=>{console.log(e),alert("ERROR Servidor")})}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"UserBalance"}},[s("h2",[e._v("Bienvenido "),s("span",[e._v(" "+e._s(e.username)+" ")]),e._v(", tienes "+e._s(e.count)+" gastos este mes.")]),e._v(" "),s("h2",[e._v("Por un valor de: "),s("span",[e._v("  "+e._s(e.totalExpenses)+" COP ")])]),e._v(" "),s("div",{staticClass:"scrollit"},[s("table",{staticClass:"table table-striped"},[e._m(0),e._v(" "),s("tbody",e._l(e.expenses,function(t,a){return s("tr",{key:a},[s("td",[e._v(e._s(t.title))]),e._v(" "),s("td",[e._v(e._s(t.description))]),e._v(" "),s("td",[e._v(e._s(t.value))]),e._v(" "),s("td",[e._v(e._s(t.payment_type))])])}),0)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Titulo")]),this._v(" "),t("th",[this._v("Descripción")]),this._v(" "),t("th",[this._v("Valor")]),this._v(" "),t("th",[this._v("T. gasto")])])])}]};var o=s("VU/8")(r,i,!1,function(e){s("Bpvh")},null,null);t.a=o.exports},"3BPY":function(e,t){},"9M+g":function(e,t){},BNq9:function(e,t){},Bpvh:function(e,t){},D2aA:function(e,t){},"FJN/":function(e,t,s){"use strict";var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"Welcome"}},[t("h2",[this._v("Bienvenido "),t("span",[this._v(" "+this._s(this.username)+" ")])]),this._v(" "),t("br"),this._v(" "),t("h3",[this._v("Con nuestra app tu puedes controlar los gastos de cada mes")])])},staticRenderFns:[]};var n=s("VU/8")({name:"Welcome",data:function(){return{username:"none"}},created:function(){this.username=this.$route.params.username}},a,!1,function(e){s("r1FK")},null,null);t.a=n.exports},M93x:function(e,t,s){"use strict";var a={name:"App",components:{},data:function(){return{is_auth:localStorage.getItem("isAuth")||!1}},methods:{init:function(){if(console.log(this.$router),"user"!=this.$route.name){let e=localStorage.getItem("current_username");this.$router.push({name:"user",params:{username:e}})}},getBalance:function(){if(console.log(this.$router),"user_balance"!=this.$route.name){let e=localStorage.getItem("current_username");if(!e)return alert("Debes loguearte para ver el total de tus gastos");this.$router.push({name:"user_balance",params:{username:e}})}},loginSuccessful:function(){if(console.log(this.$router),"welcome"!=this.$route.name){let e=localStorage.getItem("current_username");this.$router.push({name:"welcome",params:{username:e}})}},logout:function(){if(console.log(this.$router),"user"!=this.$route.name){localStorage.removeItem("current_username");this.$router.push({name:"user"})}},addNewExpense:function(){if(console.log(this.$router),"new_expense"!=this.$route.name){let e=localStorage.getItem("current_username");if(!e)return alert("Debes loguearte para poder acceder a esta funcion");this.$router.push({name:"new_expense",params:{username:e}})}}},beforeCreate:function(){localStorage.setItem("current_username",""),localStorage.setItem("isAuth",!1),this.$router.push({name:"user"})}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"header"},[s("h1",[e._v("Mis gastos App")]),e._v(" "),s("nav",[e.is_auth?s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:e.getBalance}},[e._v("Gastos")]):e._e(),e._v(" "),e.is_auth?s("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:e.addNewExpense}},[e._v("Nuevo gasto")]):e._e(),e._v(" "),e.is_auth?s("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:e.logout}},[e._v("Cerrar Sesión")]):e._e()])]),e._v(" "),s("div",{staticClass:"main-component"},[s("router-view")],1),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("p",{staticClass:"copyright-text"},[this._v("Copyright © MinTic 2020: Ciclo 3, Equipo24\n       ")])])}]};var r=s("VU/8")(a,n,!1,function(e){s("D2aA")},null,null);t.a=r.exports},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("u7Vc"),s("yNhk");var a=s("7+uW"),n=s("Tqaz");s("qb6w"),s("9M+g");a.default.use(n.a);var r=s("M93x"),i=s("/ocq"),o=s("cHtD");a.default.use(i.a),a.default.config.productionTip=!1,new a.default({router:o.a,el:"#app",components:{App:r.a},template:"<App/>"})},cHtD:function(e,t,s){"use strict";(function(e){var a=s("/ocq"),n=s("jyJz"),r=s("+rkr"),i=s("M93x"),o=s("FJN/"),l=s("pbra");const u=new a.a({mode:"history",base:e,routes:[{path:"/",name:"root",component:i.a},{path:"/user/welcome/:username",name:"welcome",component:o.a},{path:"/user",name:"user",component:n.a},{path:"/user/balance/:username",name:"user_balance",component:r.a},{path:"/user/add_new_expense/:username",name:"new_expense",component:l.a}]});t.a=u}).call(t,"/")},jyJz:function(e,t,s){"use strict";var a=s("mtWM"),n=s.n(a);document.getElementById("username"),document.getElementById("password");var r={name:"User",data:function(){return{username:"none"}},methods:{login:function(){if(this.username=this.usernameField,console.log("Oprimio el boton de login"),console.log(!this.usernameField,!this.passwordField),!this.usernameField||!this.passwordField)return alert("Debes llenar los campos de usuario y contraseña");let e=this,t={username:this.usernameField,password:this.passwordField};n.a.post("http://127.0.0.1:8000/user/auth/",t).then(t=>{if(console.log(t),e.balance=t.data.Autenticado,e.auth=t.data.Autenticado,e.auth){if(alert("Usuario logeado correctamente"),localStorage.setItem("current_username",this.username),"welcome"!=this.$route.name){console.log("entro al cambio de ruta");let e=localStorage.getItem("current_username");this.$router.push({name:"welcome",params:{username:e}})}}else alert("Error: las credenciales son incorrectas")}).catch(e=>{console.log(e),alert("Error: las credenciales son incorrectas")})}},created:function(){}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"User"}},[s("div",{staticClass:"main"},[s("p",{staticClass:"sign",attrs:{align:"center"}},[e._v("Login")]),e._v(" "),e._m(0),e._v(" "),s("div",{staticClass:"form1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.usernameField,expression:"usernameField"}],staticClass:"un ",attrs:{id:"username",type:"text",align:"center",placeholder:"nombre de usuario"},domProps:{value:e.usernameField},on:{input:function(t){t.target.composing||(e.usernameField=t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordField,expression:"passwordField"}],staticClass:"pass",attrs:{id:"password",type:"password",align:"center",placeholder:"contraseña"},domProps:{value:e.passwordField},on:{input:function(t){t.target.composing||(e.passwordField=t.target.value)}}}),e._v(" "),s("button",{staticClass:"submit",attrs:{align:"center"},on:{click:e.login}},[e._v("Sign in")]),e._v(" "),e._m(1)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Usuarios en la DB ficticia:")]),this._v(" "),t("li",[this._v("username: camilo24, password: root")]),this._v(" "),t("li",[this._v("username: andres18, password: root")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"forgot",attrs:{align:"center"}},[t("a",{attrs:{href:"#"}},[this._v("Forgot Password?")])])}]};var o=s("VU/8")(r,i,!1,function(e){s("BNq9")},null,null);t.a=o.exports},pbra:function(e,t,s){"use strict";var a=s("mtWM"),n=s.n(a);document.getElementById("title");var r={name:"User",data:function(){return{username:"none"}},methods:{addExpense:function(){if(this.username=this.$route.params.username,console.log(this.titleField,this.valueField,this.descriptionField,this.paymentTypeField),!(this.titleField&&this.valueField&&this.descriptionField&&this.paymentTypeField))return alert("Debes llenar todos los campos");let e={username:this.username,title:this.titleField,value:this.valueField,description:this.descriptionField,payment_type:this.paymentTypeField};n.a.post("http://127.0.0.1:8000/user/add_expense/"+this.username,e).then(function(e){console.log(e),alert("El nuevo gasto se agrego correctamente")}).catch(e=>{console.log(e),alert("Error: no se pudo agregar el nuevo gasto")})}},created:function(){}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"Expense"}},[s("div",{staticClass:"main"},[s("p",{staticClass:"sign",attrs:{align:"center"}},[e._v("Agregar nuevo gasto")]),e._v(" "),s("div",{staticClass:"form1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.titleField,expression:"titleField"}],ref:"titleFieldRef",staticClass:"un ",attrs:{id:"title",type:"text",align:"center",placeholder:"Titulo",required:""},domProps:{value:e.titleField},on:{input:function(t){t.target.composing||(e.titleField=t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.valueField,expression:"valueField"}],staticClass:"pass",attrs:{id:"value",type:"number",align:"center",placeholder:"Valor",required:""},domProps:{value:e.valueField},on:{input:function(t){t.target.composing||(e.valueField=t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.descriptionField,expression:"descriptionField"}],staticClass:"un",attrs:{id:"description",type:"text",align:"center",placeholder:"Descripción",required:""},domProps:{value:e.descriptionField},on:{input:function(t){t.target.composing||(e.descriptionField=t.target.value)}}}),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.paymentTypeField,expression:"paymentTypeField"}],staticClass:"un",attrs:{id:"payment",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.paymentTypeField=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"Efectivo",selected:""}},[e._v("Efectivo")]),e._v(" "),s("option",{attrs:{value:"Tarjeta de credito"}},[e._v("Tarjeta de credito")]),e._v(" "),s("option",{attrs:{value:"Prestamo"}},[e._v("Prestamo")])]),e._v(" "),s("button",{staticClass:"submit",attrs:{align:"center"},on:{click:e.addExpense}},[e._v("Añadir gasto")])])])])},staticRenderFns:[]};var o=s("VU/8")(r,i,!1,function(e){s("3BPY")},null,null);t.a=o.exports},qb6w:function(e,t){},r1FK:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e9577f2971e8f93e2d8b.js.map