import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mobile from '../views/Mobile.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/m',
    name: 'Mobile',
    component: Mobile
  }]
  
  // 路由参数配置
  const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth'
        };
      }
      return { x: 0, y: 0 };
    }
  })
  
  // 导出默认值
  export default router