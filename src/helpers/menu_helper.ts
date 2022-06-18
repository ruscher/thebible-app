/* eslint-disable dot-notation */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { RouteRecordRaw } from 'vue-router';

export const proccessMenu = (routes: RouteRecordRaw[]): RouteRecordRaw[] => {
  // Add dynamic routes
  // routes[0].children = [];

  // links['main'].forEach((item) => {
  //   if (item.status === Status.ENABLE) {
  //     const route = <RouteRecordRaw>{
  //       name: item.name,
  //       path: item.path,
  //     };
  //     if (item.component !== undefined) {
  //       route.component = item.component;
  //     }
  //     routes[0].children?.push(route);
  //   }
  // });

  console.log(routes);

  return routes;
};
