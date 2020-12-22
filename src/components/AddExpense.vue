<template>
    <div id="Expense">
        <!-- <h2>Hola  <span> {{username}}, </span>  ¡Bienvenido!</h2>
        <br> -->
        <div class="main">
          <p class="sign" align="center">Agregar nuevo gasto</p>
          
          <div class="form1">

            <input class="un " v-model="titleField" ref="titleFieldRef" id="title" type="text" align="center" placeholder="Titulo" required>
            <input class="pass" v-model="valueField" id="value" type="number" align="center" placeholder="Valor" required>
            <input class="un" v-model="descriptionField" id="description" type="text" align="center" placeholder="Descripción" required>
            <select class="un" id="payment" v-model="paymentTypeField" required>
              <option value="Efectivo" selected>Efectivo</option>
              <option value="Tarjeta de credito">Tarjeta de credito</option>
              <option value="Prestamo">Prestamo</option>
            </select>
                      
            <button v-on:click="addExpense"  class="submit" align="center">Añadir gasto</button>
            
          </div> 

        </div>
    </div>
</template>



<script>
    import axios from 'axios';

    let usernameField = document.getElementById('title');
    // let passwordField = document.getElementById('password');

    export default {
        name: "User",
        data:function(){
            return {
                username: "none"
            }
        },
        methods: {
          addExpense: function(){

            // El usuario viene en los parametros cuando se hizo el cambio de ruta
            this.username = this.$route.params.username;
            

            console.log(this.titleField, this.valueField, this.descriptionField, this.paymentTypeField);

            if(!this.titleField || !this.valueField || !this.descriptionField || !this.paymentTypeField){
              return alert('Debes llenar todos los campos');
            }

            
            let self = this;

            let data = {
              username: this.username,
              title: this.titleField,
              value: this.valueField,
              description: this.descriptionField,
              payment_type: this.paymentTypeField,
            }


            // axios.post("http://127.0.0.1:8000/user/add_expense/" + this.username, data )
            axios.post("https://mis-gastos-mintic.herokuapp.com/user/add_expense/" this.username, data )
                .then(function(result){
                    
                    
                    console.log(result);
                    // this.$refs['titleFieldRef'].value = "";

                    // Le indico que el gasto se agrego correctamente
                    alert('El nuevo gasto se agrego correctamente');

                    //Guardo en el localStorage el usuario que se logueo.
                    //localStorage.setItem('current_username', this.username);

                    // if(this.$route.name != "welcome"){
                    //   console.log('entro al cambio de ruta');
                    //   let username = localStorage.getItem("current_username")
                    //   this.$router.push({name: "welcome", params:{ username: username }})
                    // }

                })
                .catch((error) => {
                    console.log(error);
                    // alert("ERROR Servidor");
                    alert('Error: no se pudo agregar el nuevo gasto');
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