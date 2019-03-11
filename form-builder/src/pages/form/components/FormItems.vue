<template>
  <div>
    <!-- <h1>Component:{{index}}</h1> -->
    <p>{{index+1}}.
      <input
        :type=item.type
        :placeholder=item.placeholder
        :name=item.name
        v-model="formvalue.value">
    </p>
  </div>
</template>

<script>
export default {
  name: 'FormItems',
  props: {
    item: Object,
    index: Number
  },
  data: function () {
    return {
      formvalue: {
        value: '',
        name: ''
      }
    }
  },
  methods: {

  },
  created () {
    this.formvalue.name = this.item.name
    // console.log(this.formvalue)
  }
}
</script>
