<template>
  <div class="rank-contain">
    <ul>
      <li v-for="item in rankList">
        <a href="#" class="panel-cell">
          <img :src="item.imgUrl" width="60" height="60" class="panel-img">
          <div class="panel-img-content">
            <p class="panel-img-content-first">{{item.title}}</p>
            <p class="panel-img-content-sub">
              <i class="icon_music"></i>
              <span class="panel-count">{{item.countPlay}}</span>
            </p>

          </div>
          <i class="panel-icon"></i>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  import { Cell } from 'mint-ui';
  export default {
    components:{ Cell },
    data(){
    return{
      rankList:[]
    }
  },
  mounted(){
    this.getRanks();
  },
  methods:{
    getRanks:function(){
      this.$http.get("../static/jsons/list_prist.json").then(function(res){
        this.rankList = res.body;
      })
    }
  }
  }
</script>
<style>
  .rank-contain{
    padding: 0 10px;
    width: 100%;
    overflow: hidden;
  }
  .panel-cell{
    margin-left: 10px;
    display: block;
    position: relative;
    min-height: 60px;
    box-sizing: border-box;
    overflow: hidden;
    border-bottom:1px solid #e5e5e5;
    text-align: left;
    padding: 10px 0px;
    min-height: 80px;
  }


  .panel-icon{
    border: 2px solid #c8c8cd;
    border-bottom-width: 0;
    border-left-width: 0;
    top: 50%;
    right: 20px;
    position: absolute;
    width: 10px;
    height: 10px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
  }
  .panel-img{
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -30px;
  }
  .panel-img-content{
    margin-left: 70px;
    width: 60%;
  }
  .panel-img-content-first{
    color: #000000;
    padding-top: 16px;
  }
  .panel-img-content-sub{
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .icon_music{
    background: url("../assets/images/icon_music.png") no-repeat;
    width: 10px;
    height: 10px;
    background-size:contain;
    position: absolute;
    top: 3px;
    left: 0;
    display: inline-block;
  }
  .panel-count{
    color: #9b9b9b;
    font-size: 12px;
    margin-left: 14px;
  }
</style>
