// /src/App.tsx
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { rootRoute } from './routes/__root';
import { privateRoutes } from './routes/private';
import { authRoutes } from './routes/auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const routeTree = rootRoute.addChildren([
  ...authRoutes,
  ...privateRoutes,
]);



const router = createRouter({ routeTree });
const queryClient = new QueryClient();

export function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
