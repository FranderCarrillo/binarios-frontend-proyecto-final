import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import ListOffers from './pages/Offers/ListOffers';
import ListSkills from './pages/Skills/ListSkills';
import { createRootRoute, createRoute, createRouter, Link, Outlet, RouterProvider } from '@tanstack/react-router';
import Home from './pages/Home/Home';

const queryClient = new QueryClient();

function App() {

  const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2 menu">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/offers" className="[&.active]:font-bold">
          Offers
        </Link>{' '}
        <Link to="/skills" className="[&.active]:font-bold">
          Skills
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
  })

  const createHomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component:() => <Home />
  })

  const createProductRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/offers',
    component:() => <ListOffers />
  })

  const listProductsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/skills',
    component:() => <ListSkills />
  })

  const routeTree = rootRoute.addChildren(
  [
    createHomeRoute,
    createProductRoute,
    listProductsRoute
  ])

  const router = createRouter({ routeTree })
  
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
