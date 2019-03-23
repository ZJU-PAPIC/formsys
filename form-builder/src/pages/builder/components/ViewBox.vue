<template>
  <div>
    <!-- <h1>Component:{{index}}</h1> -->  
      <p v-if="item.istextbox" v-once>{{index+1}}.<span v-once>{{NewRadioValue}}</span><input :type=item.type :placeholder=item.placeholder :name=item.name :value=item.value>
        <button @click='delitem'>Delete</button></p>
        <!-- <p>Age:<input type="text" v-model="student.age" placeholder="Please enter age"><button @click="deleteStudent">Delete</button></p> -->
      <p v-else-if="item.isselect" v-once>{{index+1}}.
        <select v-once>
        <option v-for='(op,index) in newops' :key='index'>{{op}}</option>
        </select>
      <button @click='delitem'>Delete</button></p>
      <p v-else-if="item.istext" v-once>{{index+1}}.
        <label v-once>{{newtextcontent}}</label>
        <button @click='delitem'>Delete</button>
      </p>
  </div>
</template>

<script>
export default {
  name: 'ViewBox',
  props: {
    item: Object,
    index: Number,
    newops:Array,
    newtextcontent:String,
    NewRadioValue:String
  },
  methods: {
    delitem: function () {
      this.$emit('delitem', this.index)
    },
  }
}
</script>
