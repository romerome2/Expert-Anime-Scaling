import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import Aboutpage from './views/About.vue'
import Scalepage from './views/Scale.vue'
import DebatePage from './views/Debate.vue'
const routes = [
   {
      path: '/',
      name: 'Home',
      component: HomePage
   },
   {
      path: '/About',
      name:'About',
      component: Aboutpage
   },
   {
      path: '/Debate',
      component: DebatePage
   },


 

{
   path:'/Scale',
   name:'Scale',
   component: Scalepage
}

]


const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router