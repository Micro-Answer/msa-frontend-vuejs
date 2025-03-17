import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import QnAPage from '@/views/QnAPage.vue'
import WriteQuestionPage from '@/views/WriteQuestionPage.vue'
import QuestionDetailViewPage from '@/views/QuestionDetailViewPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUpPage
  },
  {
    path: '/qna',
    name: 'QnAPage',
    component: QnAPage
  },
  {
    path: '/qna/write',
    name: 'WriteQuestion',
    component: WriteQuestionPage
  },
  {
    path: '/qna/number',
    name: 'QuestionDetailViewPage',
    component: QuestionDetailViewPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
