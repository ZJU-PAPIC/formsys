import Vue from 'vue'
import Router from 'vue-router'
// import MainForm from '@/pages/builder/MainForm'
import GetForm from '@/pages/form/GetForm'
// import ControlPanel from '@/pages/controlpanel/ControlPanel'
// import Present from '@/pages/present/Present'
// import Detials from '@/pages/present/Details'
import Authority from '@/pages/authority/Authority'

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
      name: 'Authority',
      component: Authority
    }
    // {
    //   path: '/controlpanel',
    //   name: 'ControlPanel',
    //   component: ControlPanel
    // },
    // {
    //   path: '/controlpanel/builder',
    //   name: 'MainForm',
    //   component: MainForm
    // },
    // {
    //   path: '/controlpanel/Present',
    //   name: 'Present',
    //   component: Present
    // },
    // {
    //   path: '/controlpanel/Present/:fkey',
    //   name: 'Details',
    //   component: Detials,
    //   props: true
    // }
  ]
})
