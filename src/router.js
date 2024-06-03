import { createRouter, createWebHistory } from 'vue-router'

import Formulario from './componentes/Formulario/index.vue'


const routes = [
    { path: '/', redirect: '/formulario' },

    { path: '/formulario', component: Formulario },
    { path: '/formulario/:id', component: Formulario },
    

    { path: '/:pathmatch(.*)*', redirect: '/formulario' },
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router