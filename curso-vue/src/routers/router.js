import Vue from "vue";
import VueRouter from "vue-router";



Vue.use(VueRouter);



const routes = [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
        path: "/Clase8",
        name: "Clase8",
        component: () => import("../views/Clase8/Clase8"),
    },
    {
        path: "/Clase9",
        name: "Clase9",
        component: () => import("../views/Clase9/Clase9"),
    },
    {
        path: "/Clase10",
        name: "Clase10",
        component: () => import("../views/Clase10/Clase10.vue")
    },
    {
        path: "/Clase9/:id",
        name: "TestRoutDinamico",
        component: () => import("../views/Clase9/TestRoutDinamico.vue")
    },
];


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
