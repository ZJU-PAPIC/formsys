<template>
  <div>
    <FormItems v-for='(item,index) in items'
      :key='index'
      :index='index'
      :item='item'
      ref='FormItems'>
    </FormItems>
    <button @click='uploadinput'>提交</button>
  </div>
</template>

<script>
import FormItems from './FormItems.vue'

export default {
  name: 'GetForm',
  components: {
    FormItems
  },
  props: {
    fkey: String
  },
  data () {
    return {
      items: [],
      values: []
    }
  },
  methods: {
    uploadinput: function () {
      for (var i = 0; i < this.items.length; i++) {
        this.values.push(this.$refs.FormItems[i].formvalue)
      }
      var key = {key: this.fkey}
      this.values.push(key)
      console.log(this.values)
      this.axios.post('http://localhost:3000/formpost', this.values)
    }
  },
  created: function () {
    var thisx = this
    this.axios.get('http://localhost:3000', {
      params: {key: this.fkey}
    }).then(function (res) {
      // console.log(res.data)
      thisx.items = res.data
      // console.log(thisx.items)
    })
  }
//   mounted: function () {
//     this.values.push(this.$refs.FormItems.formvalue)
//   }
}
</script>
