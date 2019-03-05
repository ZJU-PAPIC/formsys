<template>
  <div>
    <!-- <h1>Component:{{index}}</h1> -->
    <p>{{index+1}}.<input :type=item.type :placeholder=item.placeholder :name=item.name></p>
  </div>
</template>

<script>
export default {
  name: 'FormItems',
  props: {
    item: Object,
    index: Number
  },
  methods: {

  }
}
</script>
