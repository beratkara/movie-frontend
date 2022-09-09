import { createRouter, createWebHistory } from "vue-router"
import error404 from "@/components/Error404";
import MovieLayout from "@/layouts/MovieLayout";
import MovieIndex from "@/views/guests/home/index";
import MovieShow from "@/views/guests/home/show";

const routes = [
    {
        path: '',
        component: MovieLayout,
        children: [
            {
                path:'',
                name:'movie.home',
                component: MovieIndex
            },
            {
                path:'/show/:id',
                name:'movie.show',
                component: MovieShow
            },
        ]
    },

    {
        path: '/:catchAll(.*)',
        name: '404',
        component: error404
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;
