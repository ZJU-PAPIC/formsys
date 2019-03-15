<template>
  <div>
    <span v-for='(item,index) in keys'
      :key='index'>
      {{item}}
    </span>
    <DetailItems v-for='(item,index) in items'
      :key= "'info2' + index"
      :item='item'
      ref='DetailItems'>
    </DetailItems>
  </div>
</template>

<script>
import DetailItems from './components/DetailItems.vue'
import present from '@/services/present.js'

export default {
  name: 'Details',
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
    // var thisx = this
    // this.axios.post('http://localhost:3000/details', {
    //   params: {key: this.fkey}
    // }).then(function (res) {
    //   thisx.items = res.data
    //   thisx.keys = Object.keys(res.data[0])
    //   console.log(thisx.items)
    // })
    present.getdetails('http://localhost:3000/details', this)
    // console.log(this.keys)
  }
}
</script>
