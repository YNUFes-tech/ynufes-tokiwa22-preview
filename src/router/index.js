import {createRouter, createWebHistory} from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import EventDetailView from '@/views/EventDetailView.vue'
import FormView from '@/views/FormView.vue'

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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
