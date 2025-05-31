import { useGetCandidateById } from '../../services/Offers/OfferHooks';
import type { Offer } from '../../models/Offer/Offer';
import {
  useCreateCandidateOfferMutation
} from '../../services/CandidateOffer/CandidateOfferHooks';
import OfferCard from '../../cards/Offer/OfferCard';
import { toast } from 'react-toastify';
import { handleApiError } from '../../utils/handleApiError';
import { useNavigate } from '@tanstack/react-router';

const Offers = () => {
  const navigate = useNavigate();
  const candidateID = localStorage.getItem('ID');
  const { offers, isPending } = useGetCandidateById(Number(candidateID));
  const addCandidateOffer = useCreateCandidateOfferMutation();

  const handleToAddOffer = async (offer: Offer) => {
    try {
        await addCandidateOffer.mutateAsync({
        candidateId: Number(candidateID),
        offerId: offer.offerId,
        })
        toast.success('¡Postulacion exitosa, no nos llame!', { position: "top-right", autoClose: 3000 });
    } catch (error: any) {
        handleApiError(error, 'Nosotros lo llamamos!');
    }
  };

  const toggleView = () => {
    navigate({ to: "/user/candidateOffer" });
  };

  if (isPending) {
      return <div className="text-center text-gray-500">Cargando ofertas...</div>;
  }
    
  return (
    <div className="min-h-screen bg-[#D9DCD6] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#16425B]">
            Ofertas Disponibles
          </h2>

          <button
            onClick={toggleView}
            className="text-[#2F6690] font-medium underline hover:text-[#16425B] transition"
          >
            Ver Postulaciones
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {offers?.map((offer) =>
            <OfferCard
              key={offer.offerId}
              offer={offer}
              handleFunction={handleToAddOffer}
              buttonText='Postularme'
            />
          )}
        </div>
      </div>
    </div>

  );
};

export default Offers;
