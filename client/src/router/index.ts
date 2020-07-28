import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import AccountPage from '../views/AccountPage.vue'
import Dashboard from '../views/Dashboard.vue'
import DashboardMain from '../components/DashboardMain.vue'
import EntriesList from '../components/EntriesList.vue'
import Activities from '../components/Activities.vue'
import Statistics from '../components/Statistics.vue'
import ImportData from '../components/ImportData.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'Account-Page',
    component: AccountPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '/',
        name: 'Dashboard-Main',
        component: DashboardMain
      },
      {
        path: '/all-entries',
        name: 'All-Entries',
        component: EntriesList
      },
      {
        path: '/activities',
        name: 'Activities',
        component: Activities
      },
      {
        path: '/statistics',
        name: 'Statistics',
        component: Statistics
      },
      {
        path: '/import',
        name: 'ImportData',
        component: ImportData
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
