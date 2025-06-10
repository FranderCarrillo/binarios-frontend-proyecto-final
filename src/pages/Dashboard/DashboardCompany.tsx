import CompanyCard from '../../cards/Company/CompanyCard'
import { getLoggedIn } from '../../utils/auth'
import { useGetCompanyById } from '../../services/Company/CompanyHooks'
import { useNavigate } from '@tanstack/react-router'
import { useLogoutMutation } from '../../services/Auth/AuthHooks'
import { OfferTable } from '../../components/Tables/OfferTable'

const DashboardCompany = () => {
  const tokenDecode = getLoggedIn()
  const { company } = useGetCompanyById(tokenDecode?.Id || 0)

  const navigate = useNavigate()
  const logoutMutation = useLogoutMutation()

  const handleLogOut = async () => {
    await logoutMutation.mutateAsync()
    navigate({ to: '/' })
  }

  return (
    <div className="min-h-screen bg-[#D9DCD6] p-6 flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tarjeta 1: Información de la empresa */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
          <CompanyCard companyInfo={company} />
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleLogOut}
              className="px-6 py-2 bg-[#3A7CA5] text-white rounded-md hover:bg-[#2F6690] font-semibold"
            >
              Cerrar sesión
            </button>
          </div>
        </div>

        {/* Tarjeta 2: Tabla de ofertas */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-[#16425B]">Ofertas publicadas</h2>
          <OfferTable data={company?.offers ?? []} />
        </div>
      </div>
    </div>
  )
}

export default DashboardCompany
