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
        path: '/',
        component: () => import('./components/Car/Index.vue'),
        name: 'cars.index'
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('./components/404.vue'),
        name: '404'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'active',
});

router.beforeEach((to, from, next)=>{
    const token = localStorage.getItem('access_token');

    if(token){
        if(to.name === 'user.login' || to.name === 'user.registration'){
            return next({name: 'user.person'})
        }
    }
    if(!token){
        if(to.name === 'user.person' || to.name === 'cars.index'){
            return next({name: 'user.login'});
        }
    }

    return next();

})

export default router

