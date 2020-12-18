<template>
    <div id="UserBalance">
        <h2>{{username}}</h2>
        <h2>Los gastos de este mes son: <span>  {{balance}} COP </span> </h2>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UserBalance',
    data: function (){
        return {
            username: "",
            balance: 0
        }
    },
    created: function(){
        this.username = this.$route.params.username

        console.log('inside the userexpenses'+this.username);

        console.log('Se disparo el created de UserBalance');

        let self = this
        // axios.get("http://127.0.0.1:8000/user/expenses/" + this.username)
        axios.get("https://mis-gastos-mintic.herokuapp.com/user/expenses/" + this.username)
            .then((result) => {
                // self.balance = result.data.balance
                console.log(result);
                self.balance = result.data.expenses
            })
            .catch((error) => {
                console.log(error);
                alert("ERROR Servidor");
            });
            
    }
}
</script>


<style>
    #UserBalance{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
    }
    #UserBalance h2{
        font-size: 50px;
        color: #283747;
    }
    #UserBalance span{
        color: crimson;
        font-weight: bold;
    }
</style>