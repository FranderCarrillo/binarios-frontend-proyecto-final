// /src/router/private.tsx
import { createRoute, redirect } from '@tanstack/react-router';
import { rootRoute } from './__root';
import NavbarLayout from '../components/Layouts/NavbarLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Offers from '../pages/Offers/Offers';

const userLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'user',
  component: () => <NavbarLayout />,
  beforeLoad: () => {
    const token = localStorage.getItem('token');
    if (!token) throw redirect({ to: '/' });
  },
});

const dashboardRoute = createRoute({
  getParentRoute: () => userLayoutRoute,
  path: 'dashboard',
  component:() => <Dashboard/>,
});

const offersRoute = createRoute({
  getParentRoute: () => userLayoutRoute,
  path: 'offers',
  component: () => <Offers/>,
});


export const privateRoutes = [
  userLayoutRoute,
  dashboardRoute,
  offersRoute,    
];


