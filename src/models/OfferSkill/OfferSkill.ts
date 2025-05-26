export interface OfferSkill {
  id: number,
  offerId: number,
  offer?: Offer,
  skillId: number,
  skill?: Skill
}

export const OfferSkillInitialState = {
    id : 0,
    offerId: 0,
    offer: undefined,
    skillId:0,
    skill:undefined,
}
