import { useState } from 'react';
import { useGetCandidateById } from '../../services/Offers/OfferHooks';
import type { Offer } from '../../models/Offer/Offer';
import {
  useCreateCandidateOfferMutation,
  useGetOffersCandidateById,
} from '../../services/CandidateOffer/CandidateOfferHooks';
import OfferCardPostulations from '../../cards/Offer/OfferCardPostulations';
import OfferCard from '../../cards/Offer/OfferCard';
import { toast } from 'react-toastify';
import { handleApiError } from '../../utils/handleApiError';

const Offers = () => {
  const candidateID = localStorage.getItem('ID');
  const { offers } = useGetCandidateById(Number(candidateID));
  const { offersCandidate, isPending, error } = useGetOffersCandidateById(Number(candidateID));
  const addCandidateOffer = useCreateCandidateOfferMutation();

  const [showPostulaciones, setShowPostulaciones] = useState(false);

  const handleToAddSkill = async (offer: Offer) => {
    try {
        await addCandidateOffer.mutateAsync({
        candidateId: Number(candidateID),
        offerId: offer.offerId,
        });
        toast.success('¡Postulacion exitosa, no nos llame!', { position: "top-right", autoClose: 3000 });
    } catch (error: any) {
        handleApiError(error, 'Nosotros lo llamamos!');
    }
  };

  const toggleView = () => {
    setShowPostulaciones((prev) => !prev);
  };

  const currentList = showPostulaciones ? offersCandidate : offers;

  return (
    <div className="min-h-screen bg-[#D9DCD6] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#16425B] mb-8">
          {showPostulaciones ? 'Postulaciones Realizadas' : 'Ofertas Disponibles'}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {currentList?.map((offer) =>
            showPostulaciones ? (
              <OfferCard
                key={`offer-${offer.offerId}`}
                offer={offer}
              />
            ) : (
              <OfferCardPostulations 
                key={`post-${offer.offerId}`}
                offer={offer}
                handleToAddSkill={handleToAddSkill}
              />
            )
          )}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={toggleView}
            className="text-[#2F6690] font-medium underline hover:text-[#16425B] transition"
          >
            {showPostulaciones ? 'Ver Ofertas' : 'Ver Postulaciones'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
