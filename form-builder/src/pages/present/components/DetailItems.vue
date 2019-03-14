<template>
  <div>
    <label style="display: inline" v-for="i in item" :key="i"> {{i}}</label>
  </div>
</template>

<script>
export default {
  name: 'DetailItems',
  props: {
    item: Object
  }
}
</script>