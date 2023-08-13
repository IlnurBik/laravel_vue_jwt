import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/users/login',
        component: () => import('./components/User/Login.vue'),
        name: 'user.login',
    },
    {
        path: '/users/registration',
        component: () => import('./components/User/Registrations.vue'),
        name: 'user.registration',
    },
    {
        path: '/users/person',
        component: () => import('./components/User/Person.vue'),
        name: 'user.person',
    },
    {
        path: '/cars',
        component: () => import('./components/Car/Index.vue'),
        name: 'cars.index'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'active',
})

export default router

