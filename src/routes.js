import React from 'react';

const Home = React.lazy(() => import('./component/Home'));
const MainBoard = React.lazy(() => import('./component/MainBoard'));


const routes = [
  {path: '/', exact: true, name: 'Home', component: Home},
  {path: '/mainBoard', exact: true, name: 'MainBoard', component: MainBoard },
];

export default routes;