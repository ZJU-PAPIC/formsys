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
      this.axios.post('http://localhost:3000', this.items)
    }
  }
}
</script>
