<template>
    <div class="audio-view" id="audio-view">
      <div class="audio-play" id="audio-play">
        <audio :src="audio.songUrl" autoplay  id="audioPlay" @ended="stopNext"></audio>
        <img :src="audio.imgUrl" class="player-img">
        <div class="player-status">
          <p class="firstText">{{audio.songName}}</p>
          <p class="twoText">{{audio.singerName}}</p>
        </div>
        <div class="player-controls">
          <i class="player-icon-play" id="player-play" @click="toggole()" :class="{'player-icon-play':!isToggole,'pause-icon-play':isToggole}"></i>
          <i class="player-icon-next" id="player-next" @click="stopNext()"></i>
        </div>
      </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return{
        isToggole:false
      }
    },

    computed:{
      ...mapGetters(['audio'])
    },
    methods:{
      toggole:function(){
        this.isToggole = !this.isToggole;
        var audios = document.querySelector("#audioPlay");
        if(!this.isToggole){
          audios.pause();
        }else if(this.isToggole){
          audios.play();
        }

      },
      stopNext:function(){
        document.querySelector("#player-play").className = "player-icon-play";
        this.$store.dispatch("next");

      }
    }

  }
</script>
<style>
  .audio-view{
    position: fixed;
    bottom: -64px;
    left: 0;
    width: 100%;
    z-index: 2000;
    transition: all 1s;
    height: 64px;
    overflow: hidden;

  }
  .audio-play{
    padding: 6px;
    height: 100%;
    background: rgba(0,0,0,0.8);
    width: 100%;
  }
  .player-img{
    height: 100%;
    border-radius:5px;
    float: left;
  }
  .player-status{
    width: 50%;
    margin-left: 3%;
    float: left;
    padding: 5px 0;
    height: 100%;
  }
  .player-status p.firstText{
    color: #ffffff;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    text-align: left;
  }
  .player-status p.twoText{
    color: #c4c4c4;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    font-size: 14px;
    padding-top: 2px;
  }
  .player-controls{
    float: right;
    width: 30%;
    height: 100%;
  }
  .player-icon-play{
    background: url("../assets/images/play_icon.png") no-repeat 50%;
    height: 100%;
    width: 50%;
    float: left;
    background-size: auto 70%;
  }
  .pause-icon-play{
    background: url("../assets/images/pause_icon.png") no-repeat 50%;
    height: 100%;
    width: 50%;
    float: left;
    background-size: auto 70%;
  }
  .player-icon-next{
    background: url("../assets/images/next_icon.png") no-repeat 50%;
    height: 100%;
    width: 50%;
    float: left;
    background-size: auto 70%;

  }
</style>
