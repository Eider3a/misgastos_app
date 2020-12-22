import vueRouter from 'vue-router'

import User from './components/User'
import UserBalance from './components/UserBalance'
import App from './App'
import Welcome from './components/Welcome'
import AddExpense from './components/AddExpense'

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: "root",
      component: App
    },
    {
      path: '/user/welcome/:username',
      name: "welcome",
      component: Welcome
    },
    {
      path: '/user',
      name: "user",
      component: User
    },
    {
      path: '/user/balance/:username',
      name: "user_balance",
      component: UserBalance
    },
    {
      path: '/user/add_new_expense/:username',
      name: "new_expense",
      component: AddExpense
    },
  ]
})

export default router;