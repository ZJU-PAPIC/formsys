<template>
  <div>
    <labal v-for='(item,index) in keys'
      :key='index'>
      {{item}}
    </labal>
    <DetailItems v-for='(item,index) in items'
      :key='index'
      :item='item'
      ref='DetailItems'>
    </DetailItems>
  </div>
</template>

<script>
import DetailItems from './components/DetailItems.vue'
import present from '@/services/present.js'

export default {
  name: 'GetForm',
  components: {
    DetailItems
  },
  props: {
    fkey: String
  },
  data () {
    return {
      items: [],
      keys: []
    }
  },
  created: function () {
    var thisx = this
    this.axios.post('http://localhost:3000/details', {
      params: {key: this.fkey}
    }).then(function (res) {
      thisx.items = res.data;
      thisx.keys = Object.keys(res.data[0]);
      console.log(thisx.items)
    })
  }
}
</script>