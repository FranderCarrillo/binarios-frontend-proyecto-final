// /src/router/__root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Outlet /> {/* Aquí se renderiza el layout hijo: AuthLayout o AppLayout */}
    </div>
  ),
});
