/**
 * Created by admin on 2017/4/21.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const store = new Vuex.Store({
  state:{
    audio:{
      singerName:'',//歌手名字
      songName:'', //歌曲名字
      songUrl:"", //歌曲文件(mp3格式)路劲
      imgUrl:"http://m.kugou.com/v3/static/images/index/logo_kugou.png"
    },
    songIndex:0
  },
  getters:{
    audio:state=>state.audio
  },
  mutations:{
    setAudio(state, audio){
      state.audio = audio;
    }
  },
  actions:{
    getSong({commit,state},index){
      Vue.http.get("../static/jsons/list_index.json").then(function(res){
        var singerName = res.body[index].singerName,
            songName = res.body[index].songName,
            songUrl = res.body[index].songUrl,
            imgUrl = res.body[index].imgUrl;
        var audio = {singerName,songName,songUrl,imgUrl};
        state.songIndex = index;
        commit('setAudio',audio);
        document.querySelector(".main").style.marginBottom="64px"
        document.querySelector("#player-play").className="pause-icon-play";
        var audio_view=document.querySelector("#audio-view");
        audio_view.style.bottom="0";
      })
    },
    next({dispatch,state}){
      if(state.songIndex == document.querySelectorAll(".panel-songslist-item").length-1){
        state.songIndex = 0;
      }else{
        state.songIndex++;
      }
      var index = state.songIndex;
      dispatch("getSong",index);
    }
  }


})

export default store
