// /src/router/auth.tsx
import { createRoute, Outlet } from '@tanstack/react-router';
import { rootRoute } from '../routes/__root';

const logoutLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/logout',
  component: () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-xl mb-4">Logout</h2>
      
      <Outlet />
    </div>
  ),
});
export const logoutRoutes = [logoutLayoutRoute];
