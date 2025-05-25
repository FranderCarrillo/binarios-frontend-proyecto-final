import { Link, Outlet } from '@tanstack/react-router'
import { useLogoutMutation } from '../../services/Auth/AuthHooks';
import { useGetCandidateById } from '../../services/Candidate/CandidateHooks';

const NavbarLayout = () => {
    const candidateID = localStorage.getItem('ID');
      
    const { candidate } = useGetCandidateById(Number(candidateID));

    const logoutMutation = useLogoutMutation();

    const handleLogOut = () => {
      logoutMutation.mutateAsync()
      .then(console.log);
    }

  return (
    <>
        <div className="p-2 flex gap-4 bg-white shadow items-center">
            <Link to="/app/dashboard" className="[&.active]:font-bold text-blue-600">{candidate?.name}</Link>{' '}
            <Link to="/app/offers" className="[&.active]:font-bold text-blue-600">Offers</Link>{' '}
            <Link to="/app/skills" className="[&.active]:font-bold text-blue-600">Skills</Link>{' '}
            <Link
              to="/"
              onClick={handleLogOut}
              className="ml-auto text-red-500"
            >
              Logout
            </Link>
        </div>
        <hr />
        <Outlet />
      </>
  )
}

export default NavbarLayout