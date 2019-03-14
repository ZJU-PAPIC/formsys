<template>
  <div>
    <FormItems  v-for='(item,index) in items'
      :key='index'
      :index='index'
      :item='item'
      ref='FormItems'>
    </FormItems>
    <input type="text" name="table" v-model="tables.table">
    <button @click='uploadinput'>提交</button>
  </div>
</template>

<script>
import FormItems from './components/FormItems.vue'
import present from '@/services/present.js'

export default {
  name: 'Present',
  components: {
    FormItems
  },
  data () {
    return {
      items: [],
      tables: {
      table: ''
      },
      result: []
    }
  },
  methods: {
    uploadinput: function () {
      self.location.href +='/'+ this.tables.table;
    }
  },
  created: function () {
    var thisx = this
    this.axios.get('http://localhost:3000/present',).then(function (res) {
      console.log(res.data)
      thisx.items = res.data
    })
  }
}
</script>
