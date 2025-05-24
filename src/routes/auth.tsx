// /src/router/auth.tsx
import { createRoute, Outlet } from '@tanstack/react-router';
import { rootRoute } from './__root';
import Login from '../pages/Login';
import ListSkills from '../pages/Skills/ListSkills';

const authLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'auth',
  component: () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-xl mb-4">Zona pública</h2>
      <ListSkills />
      <Outlet />
    </div>
  ),
});

const loginRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: 'login',
  component: Login,
});

export const authRoutes = [authLayoutRoute, loginRoute];
