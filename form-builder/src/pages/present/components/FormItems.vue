<template>
  <div>
    <p>{{index+1}}.
      {{item.TABLE_NAME}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FormItems',
  props: {
    item: Object,
    index: Number
  }
}
</script>
