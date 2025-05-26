import React from 'react'
import { useGetCandidateById } from '../../services/Offers/OfferHooks';
import type { Offer } from '../../models/Offer/Offer';
import { useCreateCandidateOfferMutation, useGetOffersCandidateById } from '../../services/CandidateOffer/CandidateOfferHooks';

const Offers = () => {
    const candidateID = localStorage.getItem('ID');
    
    const { offers } = useGetCandidateById(Number(candidateID));

    const { offersCandidate, isPending, error } = useGetOffersCandidateById(Number(candidateID));

    const addCandidateOffer = useCreateCandidateOfferMutation();

    const handleToAddSkill = (offer: Offer) => {
      console.log(offer);
      addCandidateOffer.mutateAsync({
        candidateId : Number(candidateID),
        offerId : offer.offerId
      });
    }

    const postulaciones = () => {
      if(offersCandidate != null){
        console.log(offersCandidate);
      }
      else{
        console.log("No ha postulado!!");
      }
    }


  return (
    <div>
      <section className="skills-candidate">
        <h2>Skills</h2>
        <div className="buttons-skills">
          {offers?.map((offer) => (
            <button
              key={offer.offerId}
              onClick={() => handleToAddSkill(offer)}
              // className={skills.some(s => s.skillId === skill.skillId) ? "active" : ""}
              // disabled={addSkillMutation.isPending || removeSkillMutation.isPending}
            >
              {offer.job}
            </button>
          ))}
        </div>
      </section>
      <button onClick={postulaciones}>Postulaciones</button>
    </div>
  )
}

export default Offers;