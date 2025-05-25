import React from 'react'
import { useGetCandidateById } from '../../services/Offers/OfferHooks';
import type { Offer } from '../../models/Offer/Offer';

const Offers = () => {
    const candidateID = localStorage.getItem('ID');
    
    const { offers } = useGetCandidateById(Number(candidateID));

    const handleToAddSkill = (offer: Offer) => {
      //const isSelected = skills?.some(s => s.skillId === skillId);
      console.log(offer);
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
    </div>
  )
}

export default Offers;