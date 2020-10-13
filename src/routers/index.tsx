import { lazy } from 'react';
const Home = lazy(() => import('../pages/home'));

const routes = [
  {
    path: '/home',
    component: Home,
  },
  // {
  //   path: "/",
  //   component: Test,
  //   routes: [
  //     {
  //       path: "/Other",
  //       component: Other
  //     }
  //   ]
  // }
];

export default routes;
