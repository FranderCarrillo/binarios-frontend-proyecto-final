import { Link, Outlet } from '@tanstack/react-router'
import { useGetCandidateById } from '../../services/Candidate/CandidateHooks';
import './css/NavbarLayout.css'

const NavbarLayout = () => {
    const candidateID = localStorage.getItem('ID');
      
    const { candidate } = useGetCandidateById(Number(candidateID));
  return (
    <>
      <nav className="navbar-layout">
        <div className="navbar-links">
          <Link to="/app/dashboard" className="nav-link">{candidate?.name}</Link>
          <Link to="/app/offers" className="nav-link">Offers</Link>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </>

  )
}

export default NavbarLayout