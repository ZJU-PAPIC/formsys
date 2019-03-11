<template>
  <div>
    <p>this is panel</p>
    <button @click='tobuilder'>to builder</button>
  </div>
</template>

<script>
export default {
  name: 'ControlPanel',
  methods: {
    tobuilder: function () {
      self.location.href += '/builder'
    }
  }
}
</script>
