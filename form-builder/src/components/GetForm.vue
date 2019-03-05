<template>
  <div>
    <FormItems v-for='(item,index) in items'
      :key='index'
      :index='index'
      :item='item'>
    </FormItems>
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
      items: []
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
}
</script>
