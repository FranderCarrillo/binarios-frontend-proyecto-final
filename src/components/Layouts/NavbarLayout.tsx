import { Link, Outlet } from '@tanstack/react-router';
import { useGetCandidateById } from '../../services/Candidate/CandidateHooks';

const NavbarLayout = () => {
  const candidateID = localStorage.getItem('ID');
  const { candidate } = useGetCandidateById(Number(candidateID));

  return (
    <>
      <nav className="bg-[#16425B] text-white px-6 py-4 shadow-md flex items-center">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <Link
              to="/user/dashboard"
              className="font-medium hover:text-[#81C3D7] transition"
            >
              {candidate?.name || 'Perfil'}
            </Link>
            <Link
              to="/user/offers"
              className="font-medium hover:text-[#81C3D7] transition"
            >
              Offers
            </Link>
          </div>
        </div>
      </nav>

      <main className="bg-[#D9DCD6] min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default NavbarLayout;
