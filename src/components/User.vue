<template>
    <div id="User">
        <!-- <h2>Hola  <span> {{username}}, </span>  ¡Bienvenido!</h2>
        <br> -->
        <div class="main">
          <p class="sign" align="center">Login</p>
          <ul>
            <li>Usuarios en la DB ficticia:</li>
            <li>username: camilo24, password: root</li>
            <li>username: andres18, password: root</li>
          </ul>
          <div class="form1">

            <input class="un " v-model="usernameField" id="username" type="text" align="center" placeholder="nombre de usuario">
            <input class="pass" v-model="passwordField" id="password" type="password" align="center" placeholder="contraseña">
            
            <!-- <a class="submit" align="center">Sign in</a> -->
            <!-- <input type="submit" class="submit" align="center" value="Sign in"> -->
            <button v-on:click="login"  class="submit" align="center">Sign in</button>
            <p class="forgot" align="center"><a href="#">Forgot Password?</p>
            
          </div> 

        </div>
    </div>
</template>



<script>
    import axios from 'axios';

    let usernameField = document.getElementById('username');
    let passwordField = document.getElementById('password');

    export default {
        name: "User",
        data:function(){
            return {
                username: "none"
            }
        },
        methods: {
          login: function(){

            // this.username = this.$route.params.username
            this.username = this.usernameField;

            console.log('Oprimio el boton de login');

            console.log(!this.usernameField, !this.passwordField);

            if(!this.usernameField || !this.passwordField){
              return alert('Debes llenar los campos de usuario y contraseña');
            }

            
            let self = this;
            let data = {
              username: this.usernameField,
              password: this.passwordField
            }
            axios.post("http://127.0.0.1:8000/user/auth/", data )
            // axios.post("https://mis-gastos-mintic.herokuapp.com/user/auth", data )
                .then((result) => {
                    // self.balance = result.data.balance
                    console.log(result);

                    self.balance = result.data.Autenticado
                    self.auth = result.data.Autenticado

                    if (self.auth) {// Logeado correctamente
                      alert('Usuario logeado correctamente');

                      //Guardo en el localStorage el usuario que se logueo.
                      localStorage.setItem('current_username', this.username);

                      if(this.$route.name != "welcome"){
                        console.log('entro al cambio de ruta');
                        let username = localStorage.getItem("current_username")
                        this.$router.push({name: "welcome", params:{ username: username }})
                      }

                    } else {
                      alert('Error: las credenciales son incorrectas');
                    }
                })
                .catch((error) => {
                    console.log(error);
                    // alert("ERROR Servidor");
                    alert('Error: las credenciales son incorrectas');
                });

            // console.log(this.$router );
            
          },
        },
        created: function(){

            // this.username = this.$route.params.username
        }
    }
</script>


<style>
    #User{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;    
        align-items: center;
    }
    #User h2{
        font-size: 50px;
        color: #283747;
    }
    #User span{
        color: crimson;
        font-weight: bold;
    }

    .main {
        background-color: #FFFFFF;
        width: 400px;
        height: 400px;
        margin: 7em auto;
        border-radius: 1.5em;
        box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    }

    .sign {
        padding-top: 40px;
        color: #8C55AA;
        font-family: 'Ubuntu', sans-serif;
        font-weight: bold;
        font-size: 23px;
    }
    
    .un {
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: center;
    margin-bottom: 27px;
    font-family: 'Ubuntu', sans-serif;
    }
    
    form.form1 {
        padding-top: 40px;
    }
    
    .submit {
      cursor: pointer;
      border-radius: 5em;
      color: #fff;
      background: linear-gradient(to right, #9C27B0, #E040FB);
      border: 0;
      padding-left: 40px;
      padding-right: 40px;
      padding-bottom: 10px;
      padding-top: 10px;
      font-family: 'Ubuntu', sans-serif;
      margin-left: 35%;
      font-size: 13px;
      box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
    }

    .pass {
            width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: center;
    margin-bottom: 27px;
    font-family: 'Ubuntu', sans-serif;
    }
</style>