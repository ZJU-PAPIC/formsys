<template>
  <div>
    <ViewBox v-for='(item,index) in items'
      :key='index'
      :index='index'
      :item='item'
      :newops='newops'
      :newtextcontent='newtextcontent'
      :NewRadioValue='NewRadioValue'
      @delitem='delitem'>
    </ViewBox>
    <input type='text' placeholder='Input placeholer for textbox' v-model='newplaceholder'>
    <button @click='addtextbox'>insert textbox</button>
    <br>
    <!-- 数量:
    <input v-model='RadioNumber'> -->
    <input v-model='RadioValue'>
    <input type='radio' name='radio'>
    <button @click='addradio'>insert radio</button>
    <br>
    <input type='checkbox'>
    <button @click='addcheckbox'>insert checkbox</button>
    <br>
    <!-- 文件格式:
    <input v-model='FileAccept'> -->
    <input type='file'>
    <button @click='addfile'>insert file</button>
    <br>
    <input v-model="ops">
    <button @click='addselect'>insert select(选项用","分割)</button>
    <br>
    <input v-model='textcontent'>
    <button @click='addtext'>insert text</button>

    <div>
      <input type='text' placeholder='Input form name' v-model='formname'>
      <button @click='createform'>Create</button>
    </div>
    <div>
      <!-- <p>{{'This form\'s key is: ' + fkey}}</p> -->
      <a v-if='fkey' @click="gotoform">This form's key is: {{fkey}}</a>
    </div>
  </div>
</template>

<script>
import ViewBox from './components/ViewBox.vue'
import builder from '@/services/builder.js'

export default {
  name: 'MainForm',
  components: {
    ViewBox
  },
  data () {
    return {
      // items: [{type: 'text', placeholder: 'this is a textbox', name: 'text1'}],
      items: [],
      newplaceholder: '',
      fkey: '',
      formname: '',
      textcontent:'',
      newtextcontent:'',
      ops:[],
      newops:[],
      RadioValue:'',
      NewRadioValue:'',
      // FileAccept:'',
      RadioNumber:1
    }
  },
  methods: {
    delitem: function (index) {
      this.items.splice(index, 1)
    },
    addtextbox: function () {
      this.NewRadioValue = ''
      var newtextbox = {type: 'text', placeholder: this.newplaceholder, name: 'n' + Date.now(),istextbox:true}
      this.items.push(newtextbox)
      this.newplaceholder = ''
    },
    addtext:function(){
      var newtext={name:'n'+Date.now(),istext:true}
      this.items.push(newtext)
      this.newtextcontent = this.textcontent
      this.textcontent = ''
    },
    addselect:function(){
      var newselect={name:'n'+Date.now(),isselect:true}
      this.items.push(newselect)
      this.newops = this.ops
      this.newops = this.newops.split(',');
      this.ops = []
    },
    addradio:function(){
      this.NewRadioValue=this.RadioValue
      var newradio={type:'radio', name:this.NewRadioValue, value:this.NewRadioValue,istextbox:true}
      this.items.push(newradio)
      this.RadioValue = ''
    },
    // addnumber:function(){
    //   for(var i=1;i<=this.RadioNumber;i++){
    //   this.addradio()
    //   // this.RadioNumber = ''
    //   }
    // },
    addcheckbox:function(){
      this.NewRadioValue = ''
      var newcheckbox={type:'checkbox', name:'n'+Date.now(),istextbox:true}
      this.items.push(newcheckbox)
    },
    addfile:function(){
      this.NewRadioValue = ''
      var newfile={type:'file',name:'n'+Date.now(),istextbox:true}
      this.items.push(newfile)
      // this.FileAccept = ''
    },
    createform: function () {
      var formkey = {key: 'f' + Date.now(), formname: this.formname}
      this.items.push(formkey)
      this.fkey = formkey.key
      formkey = {}
      if (this.items.length > 1 && this.formname !== '') {
        // this.axios.post('http://localhost:3000', this.items)
        //   .then((res) => {
        //     console.log(res)
        //     if (res.data === 1) {
        //       alert('Success!')
        //     } else {
        //       alert('System Wrong!')
        //       console.log(typeof res.data)
        //     }
        //   })
        builder.sendformdata('http://localhost:3000/create', this)
      } else {
        alert('!')
        this.items.splice(0, 1)
        // console.log(this.items)
        this.fkey = ''
        this.formname = ''
      }
      this.items = []
    },
    gotoform: function () {
      self.location.href = ('http://localhost:8080/#/form/' + this.fkey)
    }
  }
}
</script>
