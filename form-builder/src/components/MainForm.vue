<template>
  <div>
    <ViewBox v-for='(item,index) in items'
      :key='index'
      :index='index'
      :item='item'
      @delitem='delitem'>
    </ViewBox>
    <input type='text' placeholder='Input placeholer for textbox' v-model='newplaceholder'>
    <button @click='addtextbox'>insert textbox</button>
    <div><button @click='createform'>Create</button></div>
  </div>
</template>

<script>
import ViewBox from './ViewBox.vue'

export default {
  name: 'MainForm',
  components: {
    ViewBox
  },
  data () {
    return {
      items: [{type: 'text', placeholder: 'this is a textbox', name: 'text1'}],
      newplaceholder: ''
    }
  },
  methods: {
    delitem: function (index) {
      this.items.splice(index, 1)
    },
    addtextbox: function () {
      var newtextbox = {type: 'text', placeholder: this.newplaceholder, name: 'n' + Date.now()}
      this.items.push(newtextbox)
      this.newplaceholder = ''
    },
    createform: function () {
      var formkey = {key: 'f' + Date.now()}
      this.items.push(formkey)
      formkey = {}
      if (this.items.length > 1) {
        this.axios.post('http://localhost:3000', this.items)
          .then((res) => {
            console.log(res)
            if (res.data === 1) {
              alert('Success!')
            } else {
              alert('System Wrong!')
              // console.log(typeof res.data)
            }
          })
      }
      this.items = []
    }
  }
}
</script>
