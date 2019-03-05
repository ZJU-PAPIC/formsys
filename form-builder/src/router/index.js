import Vue from 'vue'
import Router from 'vue-router'
import MainForm from '@/components/MainForm'
import GetForm from '@/components/GetForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mainform',
      component: MainForm
    },
    {
      path: '/:fkey',
      name: 'GetForm',
      component: GetForm,
      props: true
    }
  ]
})
