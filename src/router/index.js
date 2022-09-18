import {createRouter, createWebHistory} from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import EventDetailView from '@/views/EventDetailView.vue'
import FormView from '@/views/FormView.vue'
import CustomEventListView from '@/views/CustomEventListView.vue'
import CustomEventDetailView from '@/views/CustomEventDetailView.vue'

const routes = [
    {
        path: '/',
        name: 'DataForm',
        component: FormView
    },
    {
        path: '/event-list',
        name: 'EventListView',
        component: EventListView
    },
    {
        path: '/event-detail',
        name: 'EventDetailView',
        component: EventDetailView
    },
    {
        path: `/event-list/:id`,
        name:`CustomEventListView`,
        component: CustomEventListView,
        props:(route) => ({...route.params,EventId: route.params.id})
    },
    {
        path: '/event-detail/:id',
        name:'CustomEventDetailView',
        component: CustomEventDetailView,
        props:(route) => ({...route.params,EventId: route.params.id})
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
