// /src/router/auth.tsx
import { createRoute, Outlet } from '@tanstack/react-router';
import { rootRoute } from '../routes/__root';
import SignUp from '../componets/SignUp/SignUp';


const SignUptRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/logout',
  component: () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <SignUp />
      <Outlet />
    </div>
  ),
});
export const guestRoute = [SignUptRoute];
