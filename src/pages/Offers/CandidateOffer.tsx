import { useQueryClient } from '@tanstack/react-query';
import { handleApiError } from '../../utils/handleApiError';
import { toast } from 'react-toastify';
import type { Offer } from '../../models/Offer/Offer';
import { useDeleteCandidateOfferMutation, useGetOffersCandidateById } from '../../services/CandidateOffer/CandidateOfferHooks';
import { useNavigate } from '@tanstack/react-router';
import OfferCard from '../../cards/Offer/OfferCard';


const CandidateOffer = () => {
    const queryClient = useQueryClient();
    const deleteCandidateOffer = useDeleteCandidateOfferMutation();
    const candidateID = localStorage.getItem("ID");
    const navigate = useNavigate();
    const { offersCandidate, isPending } = useGetOffersCandidateById(Number(candidateID));
    
    const handleDeleteOffer = async (offer: Offer) => {
        try {
            await deleteCandidateOffer.mutateAsync({
            candidateId: Number(candidateID),
            offerId: offer.offerId,
            });

            queryClient.invalidateQueries({ queryKey: ["candidateOffer", Number(candidateID)] });
            toast.success('¡Se ha desvinculado de la Oferta!', { position: "top-right", autoClose: 3000 });
        } catch (error: any) {
            console.error(error); 
            handleApiError(error, 'Ya se ha desvinculado!');
        }
    };


    const toggleView = () => {
        navigate({ to: "/user/offers" });
    }

    if (isPending) {
        return <div className="text-center text-gray-500">Cargando postulaciones...</div>;
    }

    return (
        <div className="min-h-screen bg-[#D9DCD6] px-6 py-10">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-[#16425B]">
                    Postulaciones Realizadas
                    </h2>

                    <button
                        onClick={toggleView}
                        className="text-[#2F6690] font-medium underline hover:text-[#16425B] transition"
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
                            />
                        ))
                        ) : (
                        <div className="col-span-full flex flex-col items-center justify-center text-center mt-8">
                            <img
                                src="https://www.svgrepo.com/show/441689/page-not-found.svg"
                                alt="Sin postulaciones"
                                className="w-80 h-auto mb-4"
                            />
                            <p className="text-[#16425B] text-lg font-medium">Aún no tenés postulaciones registradas</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default CandidateOffer
