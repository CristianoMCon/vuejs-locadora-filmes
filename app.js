const routes = [
  {   path: '/', 
      //name: "Home",
      component: home 
    },
  { path: '/novo', component: customer },
  { path: '/reservados', component: item },  
  { path: '/info/:id', name: "Info", component: info, props: true },  
];

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  //abaixo forma de tirar a cerquilha da url mas gera bug nas rotas pois assume configuracao de virtual host
  //history: VueRouter.createWebHistory(), 
  routes, // short for `routes: routes`
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
