<template>
    <div id="UserBalance">
        <h2>Bienvenido <span> {{username}} </span>, tienes {{count}} gastos este mes.</h2>
        <h2>Por un valor de: <span>  {{totalExpenses}} COP </span> </h2>

        <div class="scrollit">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Descripción</th>
                <th>Valor</th>
                <th>T. gasto</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(expense,i) in expenses" :key="i">
                
                <td>{{ expense.title }}</td> 
                <td>{{ expense.description }}</td> 
                <td>{{ expense.value }}</td> 
                <td>{{ expense.payment_type }}</td> 
                
              </tr>
            </tbody>
          </table>
        
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UserBalance',
    data: function (){
        return {
            username: "",
            balance: 0,
            expenses: [],
            count: 0,
            totalExpenses : 0,
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
                let countExpenses = result.data.count;
                self.count = countExpenses;
                //alert(`Tienes ${count} gastos`);
                self.expenses = result.data.data;
                // self.balance = 3000;
                console.log(self.expenses[1].title);
                let total = 0;
                self.expenses.forEach(e => total += parseFloat( e.value ));
                self.totalExpenses = total;
                
            })
            .catch((error) => {
                console.log(error);
                alert("ERROR Servidor");
            });
            
    }
}
</script>


<style>
    .scrollit {
        overflow:scroll;
        height:500px;
    }
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