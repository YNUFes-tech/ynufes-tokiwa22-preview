import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'DataForm',
    component: () => import(/* webpackChunkName: "test-formview" */ '../views/FormView.vue'),
  },
  {
    path: '/event-list',
    name: 'EventListView',
    component: () => import(/* webpackChunkName: "test-eventlistview" */ '../views/EventListView.vue'),
  },
  {
    path: '/event-detail',
    name: 'EventDetailView',
    component: () => import(/* webpackChunkName: "test-eventdetailview" */ '../views/EventDetailView.vue'),
  },
  {
    path: `/event-list/:id`,
    name: `CustomEventListView`,
    component: () => import(/* webpackChunkName: "customized-eventlistview" */ '../views/CustomEventListView.vue'),
    props: (route) => ({...route.params, EventId: route.params.id})
  },
  {
    path: '/event-detail/:id',
    name: 'CustomEventDetailView',
    component: () => import(/* webpackChunkName: "customized-eventdetailview" */ '../views/CustomEventDetailView.vue'),
    props: (route) => ({...route.params, EventId: route.params.id})
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
