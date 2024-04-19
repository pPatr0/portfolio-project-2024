import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioDetailView from '../views/PortfolioDetailView.vue'
/* import getPortfolio from '@/modules/getPortfolio'
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Home"
      }
    },
    {
      path: '/portfoliodetail/:id',
      name: 'portfoliodetail',
      component: PortfolioDetailView,
      meta: {
        title: "portfoliodetail"
      }
    }
  ]
})

document.title = `Patrik Sevcik`;

/* router.beforeEach((to, from, next) => {
  if(to.meta.dynamicTitle){
    const portfolioItem = getPortfolio()
    .portfolioItems.value
    .find(item => item.id == to.params.id)
    if(portfolioItem){
      document.title = `Portfolio | ${portfolioItem.title}`
    }
  }else {
    document.title = `Portfolio | ${to.meta.title}`
  }
  next()
}) */
/*router.beforeEach((to, from, next) => {
  document.title = `Portfolio | ${to.meta.title}`
  next()
})*/

export default router
