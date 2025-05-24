// /src/router/private.tsx
import { createRoute, Outlet, redirect, Link } from '@tanstack/react-router';
import { rootRoute } from './__root';
import Dashboard from '../pages/dashboard';

const appLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'app',
  component: () => (
    <>
      <div className="p-2 flex gap-4 bg-white shadow items-center">
        <Link to="/app/dashboard" className="[&.active]:font-bold text-blue-600">Dashboard</Link>
        <Link to="/app/offers" className="[&.active]:font-bold text-blue-600">Offers</Link>
        <Link to="/app/skills" className="[&.active]:font-bold text-blue-600">Skills</Link>
        <Link
          to="/auth/login"
          onClick={() => localStorage.removeItem('token')}
          className="ml-auto text-red-500"
        >
          Logout
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
  beforeLoad: () => {
    const token = localStorage.getItem('token');
    if (!token) throw redirect({ to: '/auth/login' });
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
  component: () => <div>📦 Lista de ofertas disponibles</div>,
});

const skillsRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: 'skills',
  component: () => <div>🛠️ Habilidades del usuario</div>,
});



export const privateRoutes = [
  appLayoutRoute,
  dashboardRoute,
  offersRoute,    // 👈 Asegúrate que estén aquí
  skillsRoute,    // 👈 También esta
];


