import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import IndexView from '../views/IndexView.vue'
import EssayEditView from '../views/EssayEditView.vue'
import FinEconView from '../views/FinEconView.vue'
import EntView from '../views/EntView.vue'
import UserDetailView from '../views/UserDetailView.vue'
import EssayListView from '../views/EssayListView.vue'
import SerachPageView from '../views/SerachPageView.vue'
import NewsView from '../views/NewsView.vue'
import Test from '../components/ECharts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'null',
      component: IndexView,
      meta: {title: '嘉闻主页'}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {title: '嘉闻登录页面'}
    },
    {
      path: '/index',
      name: 'index',
      component: IndexView,
      meta: {title: '嘉闻主页'}
    },
    {
      path: '/essayEdit',
      name: 'essayEdit',
      component: EssayEditView,
      meta: {title: '编辑文章'}
    },
    {
      path: '/finEcon',
      name: 'finEcon',
      component: FinEconView,
      meta: {title: '财经文章'}
    },
    {
      path: '/ent',
      name: 'ent',
      component: EntView,
      meta: {title: '娱乐文章'}
    },
    {
      path: '/userDetail',
      name: 'userDetail',
      component: UserDetailView,
      meta: {title: '个人信息'}
    },
    {
      path: '/essayList',
      name: 'essayList',
      component: EssayListView,
      meta: {title: '文章信息'}
    },
    {
      path: '/serachPage',
      name: 'serachPage',
      component: SerachPageView,
      meta: {title: '搜索结果'}
    },
    {
      path: '/essay/:id',
      name: 'essay',
      component: NewsView,
      meta: {title: '新闻浏览'}
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta: {title: '测试'}
    }
  ]
})

router.beforeEach((to,from,next) => {
  window.document.title = to.meta.title
  next()
})

export default router
