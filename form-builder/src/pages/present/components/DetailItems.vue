<template>
  <tr>
    <td v-for="(i,index) in item" :key="index"> {{i}}</td>
  </tr>
</template>

<script>
export default {
  name: 'DetailItems',
  props: {
    item: Object
  }
}
</script>
