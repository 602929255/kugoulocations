<template>
  <div class="head-logo-contain">
    <div class="head-logo">
      <a href="#"><img src="http://m.kugou.com/v3/static/images/index/logo.png"></a>
    </div>
    <div class="head-download">
      <a href="http://pan.baidu.com/s/1eSMb7e6">下载酷狗</a>
    </div>
    <div class="head-search">
      <a><img src="http://m.kugou.com/v3/static/images/index/search.png"></a>
    </div>
  </div>
</template>


<style>
  .head-logo-contain{
    background-color:#2ca2f9;
    height: 51px;
    position:fixed;
    top:0;
    left: 0;
    z-index: 1000;
    width: 100%;
    padding: 10px;
    overflow: hidden;
  }
  .head-logo,.head-logo img,.head-search img{
    height: 100%;
  }
  .head-logo{
    float:left;
  }
  .head-download{
    width: 25%;
    float:left;
    margin-left: 4%;
    height: 31px;
    line-height: 31px;
  }
  .head-download a{
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    width: 100%;
    display: block;
    height: 100%;
    text-align: center;
  }
  .head-search{
    float: right;
    height: 31px;
    padding: 5px 0px;
  }
</style>
