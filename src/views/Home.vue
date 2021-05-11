<template>
  <div class="home">
    <p class=" text-red-500  text-xs">将敬酒杯莫停</p>
    <p>{{name}}</p>
    <HelloWorld msg="张" />
    <div v-if="showBox" class=" w-10 h-10 bg-red-500 m-auto " :class="{active:isActive }"></div>
    <div v-else>消失了</div>
    <roo-button @click="tigger">控制显示隐藏</roo-button>
    <roo-button @click="changStyle">控制样式</roo-button>
    <h1 v-show='ok'>v-show</h1>
    <hr>
    <h1>v-for，能遍历数组，（item,index）, (value,name,index)</h1>
    <div v-for="(item,index) in books" :key="index">
      {{ item.name}}-{{item.money}}
    </div>
    <hr>
    <h1>双向绑定</h1>
    <div>
      <input class=" bg-gray-200 h-8 p-4 rounded-sm border-4 border-gray-100 " v-model="inputdata" type="text"
        placeholder="请输入" />
      <p>输入的值：==》{{inputdata}}</p>
      <hr>
      <input type="checkbox" value="jack1" id="jack" v-model="checksname">
      <label for="jack">jack</label>
      <input type="checkbox" value="puxiaoshuai1" id="puxiaoshuai" v-model="checksname">
      <label for="puxiaoshuai">puxiaoshuai</label>
      <p>选中的是{{checksname}}</p>
      <!-- 单选框  v-modal值是字符串。多选框 v-modal的值地定义的是数组 -->
      <MyComponent class=" text-red-500" name="今天是个好天气"  age="23"/>
      <ul>
        <!-- 这里的books-item   BookItem 两种名称都是可以的   多个参数的时候，可以使用对象进行传递 -->
         <books-item v-on:add="sonadd" v-for="item in booklist" :title="item.title" :id="item.id" :key="item.id">
           <!-- 子组件给父组件传值，v-on还是要写全 -->
         </books-item>
      </ul>
    </div>
    <hr>
   <SoltItem>我是插槽内容 
     <!-- 注意这里是v-slot:header -->
    <template v-slot:header>
      <h1>我是具名插槽的内容，头部</h1>
    </template>
   </SoltItem>
   <hr>
   <p>作用域插槽======================</p>
   <pre>slot v-bind:user="user">slot</pre>
    <ZySlot>
      <template v-slot:default="slotProps">
        <h2 class=" text-red-500 text-lg"> {{slotProps.user.name}}</h2>
      </template>
    </ZySlot>
    <p>简写法：v-slot:"a",注意这里是写了引号的，具名插槽是没得引号的，</p>
    <p>解构插槽Prop,v-slot="{{user}}"进行解构处理</p>
    <hr>
  </div>
</template>

<script>
  import MyComponent from '../components/MyComponent.vue'
  import BooksItem from '../components/BooksList.vue'
  import HelloWorld from '../components/HelloWorld.vue'
  import SoltItem from '../components/SoltItem.vue'
  import ZySlot from '../components/ZySlot.vue'
  export default {
    name: 'Home',
    components: {
      MyComponent,
      BooksItem,
      HelloWorld,
      SoltItem,
      ZySlot
    },
    
    data() {
      
      return {
        name: "蒲小帅",
        showBox: true,
        isActive: false,
        ok: true,
        inputdata: "",
        books: [
          {
            "name": "三国演义",
            "money": 2323
          }, {
            "name": "税务号",
            "money": 12
          },
          {
            "name": "五一节",
            "money": 24
          }
        ],
        booklist: [
          {
            "title": "三国演义",
            "id": 2323
          }, {
            "title": "税务号",
            "id": 12
          },
          {
            "title": "五一节",
            "id": 24
          }
        ],
        checksname: []
      }
    },
    methods: {
      tigger() {
        this.showBox = !this.showBox
        console.log(this.showBox);
      },
      changStyle() {
        if (!this.showBox) {
          alert("方块隐藏了，没法控制样式啦")
          return
        }
        this.isActive = !this.isActive
      },
      sonadd(){
        alert("子组件emit")
      }
    },
   
    

  }
</script>
<style scoped>
  .active {
    background-color: aqua;
  }
</style>