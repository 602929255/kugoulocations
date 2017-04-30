<template>
  <div class="bd">
    <ul class="singer-class-list">
      <li><a><i class="singer-list-arrow"></i>热门歌手</a></li>
    </ul>
    <ul class="singer-class-list">
      <li><a><i class="singer-list-arrow"></i>华语男歌手</a></li>
      <li><a><i class="singer-list-arrow"></i>华语女歌手</a></li>
      <li><a><i class="singer-list-arrow"></i>华语组合</a></li>
    </ul>
    <ul class="singer-class-list">
      <li><a><i class="singer-list-arrow"></i>日韩男歌手</a></li>
      <li><a><i class="singer-list-arrow"></i>日韩女歌手</a></li>
      <li><a><i class="singer-list-arrow"></i>日韩组合</a></li>
    </ul>
    <ul class="singer-class-list">
      <li><a><i class="singer-list-arrow"></i>欧美男歌手</a></li>
      <li><a><i class="singer-list-arrow"></i>欧美女歌手</a></li>
      <li><a><i class="singer-list-arrow"></i>欧美组合</a></li>
    </ul>
  </div>
</template>
<style>
  .bd{
    width: 100%;
    padding-top: 10px;
  }
  .singer-class-list{
    margin:8px 10px 20px 10px;
    background: #fbfbfb;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
  }
  .singer-class-list li:first-child{
    border-top:none!important;
  }
  .singer-class-list li{
    border-top:1px solid #e4e4e4;
  }
  .singer-class-list a{
    padding: 10px;
    display: block;
    font-size: 14px;
    color: #333;
    text-align: left;
  }
  .singer-list-arrow{
    float: right;
    background: url("../assets/images/arrow_icon.png") no-repeat;
    width: 8px;
    height: 14px;
    background-size:contain;
    margin-top: 1px;
  }
</style>
