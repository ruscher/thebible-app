import { RouteRecordRaw } from 'vue-router';

// Define in Router
export enum Status { DISABLE, ENABLE }

// Define in Menu
export enum Visible { NO, YES, ONLY_ELECTRON }

// Type Route
// type route

const routes: RouteRecordRaw[] = [
  {
    path: '',
    redirect: '/home',
    name: 'main',
    component: () => import('layouts/MainLayout.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    name: 'error404',
    component: () => import('pages/Error404.vue'),
  },
];

export const links = {
  main: [
    {
      name: 'menu_home',
      icon: 'home',
      path: '/home',
      status: Status.ENABLE,
      visible: Visible.YES,
      component: () => import('src/pages/Home.vue'),
    },
    {
      name: 'menu_bible',
      icon: 'menu_book',
      path: '/bible',
      status: Status.ENABLE,
      visible: Visible.YES,
      component: () => import('src/pages/Bible.vue'),
    },
    {
      name: 'menu_reading',
      icon: 'auto_stories',
      path: '/reading',
      status: Status.ENABLE,
      visible: Visible.YES,
      component: () => import('src/pages/Reading.vue'),
    },
    {
      name: 'menu_bookmarks',
      icon: 'bookmark',
      path: '/bookmarks',
      status: Status.ENABLE,
      visible: Visible.YES,
      component: () => import('src/pages/Bookmarks.vue'),
    },
    {
      name: 'menu_hyms',
      icon: 'music_note',
      path: '/hyms',
      status: Status.DISABLE,
      visible: Visible.YES,
      component: () => import('src/pages/Hyms.vue'),
    },
    {
      name: 'menu_quit',
      icon: 'logout',
      path: '/quit',
      status: Status.ENABLE,
      visible: Visible.ONLY_ELECTRON,
    },
  ],
};

// Add dynamic routes
routes[0].children = [];
links.main.forEach((item) => {
  if (item.status === Status.ENABLE) {
    const route = <RouteRecordRaw>{
      name: item.name,
      path: item.path,
    };
    if (item.component !== undefined) {
      route.component = item.component;
    }
    routes[0].children?.push(route);
  }
});

export default routes;
