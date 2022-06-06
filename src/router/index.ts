import routes from 'src/router/routes';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const createHistory = process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory;

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createHistory(process.env.VUE_ROUTER_BASE),
  routes,
});

export default router;
