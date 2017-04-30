<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../assets/banner1.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/banner2.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/banner3.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/banner4.jpg"></mt-swipe-item>
    </mt-swipe>
   <ul class="panel-songslist">
      <li v-for="(songs,index) in songList"  class="panel-songslist-item" @click="playSong(index)"><span>{{songs.singerName}}&nbsp;-&nbsp;{{songs.songName}}</span><i></i></li>
    </ul>
</div>
</template>
<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  export default {
    data(){
      return{
        songList:[]
      }
    },
    components:{ Swipe, SwipeItem },
    mounted(){
      this.getSongs();
    },
    methods:{
      getSongs:function(){
        this.$http.get("../static/jsons/list_index.json").then(function(res){
          this.songList = res.body;
          console.log(res.body);
        })
       // this.tops = 35;
      },
      playSong:function(index){
         this.$store.dispatch("getSong",index);

      }


    }
  }
</script>
<style>
  .mint-swipe {
    height: 39vw !important;
  }
  .panel-songslist{
    margin-left: 10px;
  }
  .panel-songslist-item{
    text-align: left;
    position: relative;
    height: 60px;
    width:100%;
    display: table;
    border-bottom: 1px solid #e5e5e5;
  }
  .panel-songslist-item span{
    display: table-cell;
    padding-right:30px;
    vertical-align:middle;
    font-size: 14px;
  }
  .panel-songslist-item i{
    background: url("../assets/images/download_icon.png") no-repeat;
    width:14px;
    height: 16px;
    position: absolute;
    top: 50%;
    right: 10px;
    background-size: contain;
    margin-top: -8px;
  }
</style>
