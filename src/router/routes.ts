import { proccessMenu } from 'src/helpers/menu_helper';

const routes: Route[] = [
  {
    path: '',
    redirect: '/home',
    name: 'main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'menu_home',
        icon: 'home',
        path: '/home',
        status: StatusMenu.ENABLE,
        visible: VisibleMenu.YES,
        component: () => import('src/pages/Home.vue'),
      },
      {
        name: 'menu_bible',
        icon: 'menu_book',
        path: '/bible',
        status: StatusMenu.ENABLE,
        visible: VisibleMenu.YES,
        component: () => import('src/pages/Bible.vue'),
      },
      {
        name: 'menu_reading',
        icon: 'auto_stories',
        path: '/reading',
        status: StatusMenu.ENABLE,
        visible: VisibleMenu.YES,
        component: () => import('src/pages/Reading.vue'),
      },
      {
        name: 'menu_bookmarks',
        icon: 'bookmark',
        path: '/bookmarks',
        status: StatusMenu.ENABLE,
        visible: VisibleMenu.YES,
        component: () => import('src/pages/Bookmarks.vue'),
      },
      {
        name: 'menu_hyms',
        icon: 'music_note',
        path: '/hyms',
        status: StatusMenu.DISABLE,
        visible: VisibleMenu.YES,
        component: () => import('src/pages/Hyms.vue'),
      },
      {
        name: 'menu_quit',
        icon: 'logout',
        path: '/quit',
        status: StatusMenu.ENABLE,
        visible: VisibleMenu.ONLY_ELECTRON,
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    name: 'error404',
    component: () => import('pages/Error404.vue'),
  },
];

export default proccessMenu(routes);
