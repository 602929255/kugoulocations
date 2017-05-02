<template>
  <div class="header-nav">
    <ul class="ulText header-nav-bar">
      <li v-for="(item,index) in text" @click="goTab(index+1)" :class="{ 'actives': index == (selected-1)}">{{item.txt}}</li>
    </ul>
  </div>
</template>
<script>
  import { Navbar, TabItem } from 'mint-ui'
  export default {
    data(){
      return{
        selected:null,
        text:[
          {txt:'新歌'},
          {txt:'排行'},
          {txt:'歌单'},
          {txt:'歌手'}
        ]

      }
    },
    mounted(){
      console.log("挂载完成");
      this.selected = 1;
    },
    components:{ Navbar, TabItem },
    methods:{
      goTab:function(index){
        switch(index){
          case 1:
            this.$router.push({path:"/index"});
            break;
          case 2:
            this.$router.push({ path:"/rank"});
            break;
          case 3:
            this.$router.push({path:"/sheet"});
            break;
          case 4:
            this.$router.push({ path:"/singer"});
            break;
        }
          this.selected=index;


      }
    }

  }

</script>
<style>
  .header-nav{
    position: fixed;
    z-index: 1000;
    top:51px;
    left: 0;
    width: 100%;
    border-bottom: 3px solid #f4f4f4;
  }
  .header-nav-bar{
    padding: 0 10px;
    width: 100%;
    overflow: hidden;
  }
  .mint-tab-item-label{
    font-size:16px!important;
  }


  .ulText{
    background-color: #fff;
    text-align: center;
    display: flex;
  }
  .ulText li{
    flex: 1;
    -webkit-box-flex: 1;
    display: block;
    padding: 15px 0;
    font-size:16px;
  }
  .actives{
    border-bottom: 3px solid #26a2ff;
    color: #26a2ff;

  }
</style>
