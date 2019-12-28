import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainLayout from '../views/mainLayout'
import Home from '../views/home1'
import FrontLearn from '../components/front/frontLearn'
import BackLearn from '../components/back/backLearn'
import zxyaily from '../components/aboutUs/zxyaily'
import ContentLayout from '../views/contentLayout'
// import develop from '../components/develop/develop'
import content from '../components/reuse/content'
// import sideBar from '../components/reuse/sideBar'
// import header from '../components/reuse/header'
import test from '../views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'content',
      component: test
    },
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
          redirect: '/zxyaily/content',
          children: [
            {
              path: 'content',
              name: 'content',
              component: content
            },
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
