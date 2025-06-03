import { useGetOffersCandidateById } from "../../services/CandidateOffer/CandidateOfferHooks";
import OfferCard from "../../cards/Offer/OfferCard";
import { useCandidateOfferUtil } from "../../utils/Offers/CandidateOfferUtils";


const CandidateOffer = () => {
  const candidateID = Number(localStorage.getItem("ID"));
  const { offersCandidate, isPending } = useGetOffersCandidateById(candidateID);
  const { handleDeleteOffer, toggleView } = useCandidateOfferUtil(candidateID);

  if (isPending) {
    return <div className="text-center text-gray-500">Cargando postulaciones...</div>;
  }

  return (
    <div className="min-h-screen bg-[#D9DCD6] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#16425B]">Postulaciones Realizadas</h2>
          <button
            onClick={toggleView}
            className="text-[#2F6690] text-xl font-medium underline hover:text-[#16425B] transition"
          >
            Ver Ofertas
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {offersCandidate && offersCandidate.length > 0 ? (
            offersCandidate.map((offer) => (
              <OfferCard
                key={offer.offerId}
                offer={offer}
                handleFunction={handleDeleteOffer}
                buttonText="Anular"
                buttonClassName="bg-red-600 hover:bg-red-700 text-white"
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-center mt-8">
              <img
                src="https://www.svgrepo.com/show/83421/job-search.svg"
                alt="Sin postulaciones"
                className="w-40 h-auto mb-4"
              />
              <p className="text-[#16425B] text-lg font-medium">
                Aún no hay postulaciones registradas
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CandidateOffer;
