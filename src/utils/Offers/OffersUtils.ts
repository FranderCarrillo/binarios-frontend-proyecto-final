// hooks/useOffersLogic.ts
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";
import { handleApiError } from "../../utils/handleApiError";
import { useCreateCandidateOfferMutation } from "../../services/CandidateOffer/CandidateOfferHooks";
import type { Offer } from "../../models/Offer/Offer";

export const useOffersUtil = (candidateID: number) => {
  const navigate = useNavigate();
  const addCandidateOffer = useCreateCandidateOfferMutation();

  const handleToAddOffer = async (offer: Offer) => {
    try {
      await addCandidateOffer.mutateAsync({
        candidateId: candidateID,
        offerId: offer.offerId,
      });
      toast.success("¡Postulación exitosa, no nos llame!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error: any) {
      handleApiError(error, "¡Nosotros lo llamamos!");
    }
  };

  const toggleView = () => {
    navigate({ to: "/user/candidateOffer" });
  };

  return { handleToAddOffer, toggleView };
};
