// /src/router/private.tsx
import { createRoute, redirect } from '@tanstack/react-router';
import { rootRoute } from './__root';
import NavbarLayout from '../components/Layouts/NavbarLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Offers from '../pages/Offers/Offers';
import CandidateOffer from '../pages/Offers/CandidateOffer';
import { getLoggedIn } from '../utils/auth';
import DashboardCompany from '../pages/Dashboard/DashboardCompany';
import DashboardWrapper from '../pages/Dashboard/DashboardWrapper';

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
  beforeLoad: () => {
    const token = localStorage.getItem('token');
    if (!token) throw redirect({ to: '/' });

    const tokenDecode = getLoggedIn(); // decodifica el token
    if (!tokenDecode?.role) throw redirect({ to: '/' });

    return {
      role: tokenDecode.role,
    };
  },
  component: DashboardWrapper,
});


const offersRoute = createRoute({
  getParentRoute: () => userLayoutRoute,
  path: 'offers',
  component: () => <Offers/>,
});

const offersPostulationsRoute = createRoute({
  getParentRoute: () => userLayoutRoute,
  path: 'candidateOffer',
  component: () => <CandidateOffer/>,
});


export const privateRoutes = [
  userLayoutRoute,
  dashboardRoute,
  offersRoute, 
  offersPostulationsRoute   
];


