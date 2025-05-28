// /src/router/auth.tsx
import { createRoute, Outlet } from '@tanstack/react-router';
import { rootRoute } from '../../routes/__root';
import Login from '../Login/Login';

const authLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <div>
      <Login />
      <Outlet />
    </div>
  ),
});

export const authRoutes = [authLayoutRoute];
