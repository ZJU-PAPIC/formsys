import Vue from 'vue'
import Router from 'vue-router'
import MainForm from '@/components/MainForm'
import GetForm from '@/components/GetForm'
import ControlPanel from '@/components/ControlPanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/form/:fkey',
      name: 'GetForm',
      component: GetForm,
      props: true
    },
    {
      path: '/controlpanel',
      name: 'ControlPanel',
      component: ControlPanel
    },
    {
      path: '/controlpanel/builder',
      name: 'Mainform',
      component: MainForm
    }
  ]
})
