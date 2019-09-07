import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainLayout from '../components/layout/mainLayout'
import Home from '../components/home'
import FrontLearn from '../components/front/frontLearn'
import BackLearn from '../components/back/backLearn'
import zxyaily from '../components/aboutUs/zxyaily'
import ContentLayout from '../components/layout/contentLayout'
// import sideBar from '../components/reuse/sideBar'

// import header from '../components/reuse/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'zxyaily',
          name: 'contentLayout',
          component: ContentLayout,
          redirect: '/zxyaily/frontLearn',
          children: [
            {
              path: 'frontLearn',
              name: 'frontLearn',
              component: FrontLearn
            },
            {
              path: 'backLearn',
              name: 'backLearn',
              component: BackLearn
            },
            {
              path: 'zxyaily',
              name: 'zxyaily',
              component: zxyaily
            }
          ]
        }]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
