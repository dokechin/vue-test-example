import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import DataTable from '@/components/DataTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/datatable',
      name: 'DataTable',
      component: DataTable
    }
  ]
})
