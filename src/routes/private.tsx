// /src/router/private.tsx
import { createRoute, redirect } from '@tanstack/react-router';
import { rootRoute } from './__root';
import Dashboard from '../pages/dashboard';
import ListSkills from '../pages/Skills/ListSkills';
import ListOffers from '../pages/Offers/ListOffers';
import NavbarLayout from '../components/Layouts/NavbarLayout';

const appLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'app',
  component: () => <NavbarLayout />,
  beforeLoad: () => {
    const token = localStorage.getItem('token');
    if (!token) throw redirect({ to: '/' });
  },
});

const dashboardRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: 'dashboard',
  component: Dashboard,
});

const offersRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: 'offers',
  component: () => <ListOffers />,
});

const skillsRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: 'skills',
  component: () => <ListSkills />,
});



export const privateRoutes = [
  appLayoutRoute,
  dashboardRoute,
  offersRoute,   
  skillsRoute,    
];


