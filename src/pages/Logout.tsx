// /src/router/auth.tsx
import { createRoute, Outlet } from '@tanstack/react-router';
import { rootRoute } from '../routes/__root';
import SignUp from '../componets/SigIn/SignUp';

const logoutLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/logout',
  component: () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <SignUp />
      <Outlet />
    </div>
  ),
});
export const logoutRoutes = [logoutLayoutRoute];
