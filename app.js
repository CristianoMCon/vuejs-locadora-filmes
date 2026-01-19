const routes = [
  { path: '/', component: home },
  { path: '/customer', component: customer },
  { path: '/item', component: item },
  { path: '/test', component: test },
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
