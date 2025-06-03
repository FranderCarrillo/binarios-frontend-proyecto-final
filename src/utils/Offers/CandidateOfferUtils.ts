// hooks/useCandidateOfferLogic.ts
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";
import { handleApiError } from "../../utils/handleApiError";
import type { Offer } from "../../models/Offer/Offer";
import { useDeleteCandidateOfferMutation } from "../../services/CandidateOffer/CandidateOfferHooks";

export const useCandidateOfferUtil = (candidateID: number) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const deleteCandidateOffer = useDeleteCandidateOfferMutation();

  const handleDeleteOffer = async (offer: Offer) => {
    try {
      await deleteCandidateOffer.mutateAsync({
        candidateId: candidateID,
        offerId: offer.offerId,
      });

      queryClient.invalidateQueries({ queryKey: ["candidateOffer", candidateID] });

      toast.success("¡Se ha desvinculado de la Oferta!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error: any) {
      console.error(error);
      handleApiError(error, "Ya se ha desvinculado!");
    }
  };

  const toggleView = () => {
    navigate({ to: "/user/offers" });
  };

  return {
    handleDeleteOffer,
    toggleView,
  };
};
