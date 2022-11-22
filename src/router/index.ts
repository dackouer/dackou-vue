import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from '@/view/Home.vue'
import Main from '@/view/Main.vue'
import Login from '@/view/Login.vue'
import Error from '@/view/Error.vue'

function getChildrenRoute(){
    const routes = [{path:'/',name:'main',component:Main}] as RouteRecordRaw []
    const view = import.meta.glob('../view/controller/**/*.vue')

    Object.keys(view).forEach((key)=>{
        const name = key.split('controller/').pop()?.split('.').shift()?.toLocaleLowerCase().replace('/index','')!
        const route = {
            path: `/${name}`,
            name,
            meta: {auth: true},
            component: view[key]
        } as RouteRecordRaw

        routes.push(route)
    })

    return routes
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'name',
            meta: {auth: true},
            component: Home,
            children: getChildrenRoute()
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/:any(.*)',
            name: 'error',
            component: Error
        },
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.meta.auth){
        const uid = localStorage.getItem('uid')!
        const token = localStorage.getItem('token')!

        if(!uid){
            next({name:'login'})
        }else{
            next()
        }
    }else{
        next()
    }
})

router.beforeResolve((to,from)=>{
    // console.log('beforeResolve')
})

router.afterEach((to,from,fail)=>{
    // console.log('afterEach')
})

export default router