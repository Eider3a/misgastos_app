<template>
  <div id="app">
    <div class="header">
      <h1>Mis gastos App</h1>
      <nav>
        <!-- <button v-on:click="init" v-if="is_auth">Inicio</button> -->
        <!-- <button v-if="is_auth" v-on:click="init"  type="button" class="btn btn-primary"  >Login</button> -->
        <!-- <button v-if="is_auth" v-on:click="loginSuccessful"  type="button" class="btn btn-info"  >Welcome</button> -->
        <button v-on:click="getBalance" v-if="is_auth" type="button" class="btn btn-danger" >Gastos</button>
        <button v-on:click="logout" v-if="is_auth" type="button" class="btn btn-warning" >CerrarSesión</button>
      </nav>
    </div>
    
    <div class="main-component">
      <router-view></router-view>
    </div>
    
    <div class="footer">
      <p class="copyright-text">Copyright &copy; MinTic 2020: Ciclo 3, Equipo24
         <!-- <a href="#">Equipo24</a> -->
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  components:{},
  
  data:function() {
    return {
      is_auth:localStorage.getItem('isAuth') || false
    }
  },
  
  methods: {
    init: function(){
      console.log(this.$router );
      if(this.$route.name != "user"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user", params:{ username: username }})
      }
    },
    getBalance: function(){
      console.log(this.$router );
      if(this.$route.name != "user_balance"){
        let username = localStorage.getItem("current_username")
        // console.log('Dentro de getBalance '+username);
        if (!username) {
          return alert('Debes loguearte para ver el total de tus gastos');
        }
        this.$router.push({name: "user_balance", params:{ username: username }})
      }
    },
    loginSuccessful: function(){
      console.log(this.$router );
      if(this.$route.name != "welcome"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "welcome", params:{ username: username }})
      }
    },
    logout: function(){
      console.log(this.$router );
      if(this.$route.name != "user"){
        let username = localStorage.removeItem("current_username")
        this.$router.push({name: "user"})
      }
    },
  },

  beforeCreate:function() {
    // localStorage.setItem('current_username','camilo24')
    // localStorage.setItem('isAuth',true)
    localStorage.setItem('current_username','')
    localStorage.setItem('isAuth',false)

    // this.$router.push({name: "user", params:{ username: 'camilo24' }})  
    this.$router.push({name: "user"})  
    // console.log('Se llamo el beforeCreate');
    // console.log(this.$router);
  }
}
</script>

<style>
  body {
    margin: 0 0 0 0;
  }

  button{
    margin-left: 10px;
  }
  
  .header {
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #440d4b;
    color: #E5E7E9;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1 {
    width: 20%;
    text-align: center;
  }
  
  .header nav{
    height: 100%;
    width: 45%;
    display: flex;
    padding-left: 10px;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
  }

  .header  nav {
    color: #E5E7E9;
    background: #440d4b;
    /* border: 1px solid #E5E7E9; */
    border-radius: 5px;
    padding: 10px 20px;
  }
  
  .headernavbutton:hover {
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }

  .main-component {
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #FDFEFE;
  }
  
  .footer {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #440d4b;
    color: #E5E7E9;
  }

  .footer h2 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>