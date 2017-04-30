import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'
import rank from '../views/rank'
import sheet from '../views/sheet'
import singer from '../views/singer'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      component: index
    },{
      path:"/rank",
      component:rank
    }
    ,{
      path:"/sheet",
      component:sheet
    }
    ,{
      path:"/singer",
      component:singer
    }
  ]
})
