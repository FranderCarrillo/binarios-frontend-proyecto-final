// src/pages/Dashboard/DashboardWrapper.tsx
import { Navigate, useRouteContext } from '@tanstack/react-router';
import Dashboard from './Dashboard';
import DashboardCompany from './DashboardCompany';

export default function DashboardWrapper() {
  const { role } = useRouteContext({ from: '/user/dashboard' });

  if (role === 'CANDIDATE') return <Dashboard />;
  if (role === 'COMPANY') return <DashboardCompany />;
  return <Navigate to="/" />;
}
