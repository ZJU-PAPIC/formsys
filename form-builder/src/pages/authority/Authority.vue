<template>
  <div>
    <input type="password" v-model="authcode" v-if="custom">
    <button @click="checkauth" v-if="custom">Login</button>
    <!-- <div v-if="auth"> -->
    <ControlPanel v-if="auth"/>
    <!-- </div> -->
  </div>
</template>

<script>
import router from '@/router/index.js'
import MainForm from '@/pages/builder/MainForm'
import ControlPanel from '@/pages/controlpanel/ControlPanel'
import Present from '@/pages/present/Present'
import Detials from '@/pages/present/Details'
// import Router from 'vue-router'
// import Vue from 'vue'

export default {
  name: 'Authority',
  components: {
    ControlPanel
  },
  data: function () {
    return {
      authcode: '',
      authroute: [
        {
          path: '/controlpanel/builder',
          name: 'MainForm',
          component: MainForm
        },
        {
          path: '/controlpanel/Present',
          name: 'Present',
          component: Present
        },
        {
          path: '/controlpanel/Present/:fkey',
          name: 'Details',
          component: Detials,
          props: true
        }
      ],
      auth: false,
      custom: true
    }
  },
  methods: {
    checkauth: function () {
      if (this.authcode === 'QC') {
        this.auth = true
        this.custom = false
        router.addRoutes(this.authroute)
      } else {
        alert('Wrong Code')
      }
    }
  }
}
</script>
