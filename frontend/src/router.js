import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/HelloWorld",
      name: "Hello",
      component: () => import("./components/HelloWorld")
    },
    {
      path: "/Mlr",
      alias: "/Mlr",
      name: "Mlr",
      component: () => import("./components/Mlr")
    },
    {
      path: "/charts",
      alias: "/charts",
      name: "charts",
      component: ()=> import("./components/charts.vue")
    },
    {
      path: "/Svr",
      alias: "/Svr",
      name: "svr",
      component: ()=> import("./components/Svr.vue")
    }
  ]
});