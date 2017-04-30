<template>
  <div class="rank-contain">
    <ul>
      <li v-for="item in rankList">
        <a href="#" class="rank-cell">
            <img :src="item.rankImgSrc" width="60" height="60">
            <span class="rank-cell-txt">{{item.rankName}}</span>
            <i class="rank-icon"></i>
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
        this.$http.get("../static/jsons/list_rank.json").then(function(res){
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
  .rank-cell{
    margin-left: 10px;
    display: block;
    position: relative;
    min-height: 60px;
    box-sizing: border-box;
    overflow: hidden;
    border-bottom:1px solid #e5e5e5;
    text-align: left;
    padding: 10px 0px;
  }


  .rank-cell-txt{
    font-size:16px;
    color:#000000;
    margin-left:10px;
    line-height: 60px;
  }
  .rank-icon{
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
</style>
