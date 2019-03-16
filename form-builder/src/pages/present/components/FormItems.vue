<template>
  <div>
    <p @click="godetails">{{index+1}}.
      {{item.formname}}
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
  methods: {
    godetails: function () {
      self.location.href += ('/' + this.item.formkey)
    }
  }
}
</script>
