<template>
  <div id="app">
    <kHead></kHead>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <player></player>
  </div>
</template>

<script>
import kHead from './components/header/header'
import player from './components/player'
export default {
  name: 'app',
  components: {kHead,player}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main{
  margin-top:100px;
}
</style>
