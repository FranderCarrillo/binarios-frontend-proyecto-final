// /src/router/auth.tsx
import { createRoute, Outlet } from '@tanstack/react-router';
import { rootRoute } from './__root';
import Login from '../pages/Login';

const authLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <div style={{ display: 'flex', alignItems: 'center', height: '100vh', width: '100%'}}>
      <Login />
      <Outlet />
    </div>
  ),
});

// const logoutRoute = createRoute({
//   getParentRoute: () => authLayoutRoute,
//   path: 'logout',
//   component: Logout,
// });

export const authRoutes = [authLayoutRoute];
