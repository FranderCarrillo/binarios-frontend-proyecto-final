import type { Offer } from "../../models/Offer/Offer"

type OfferProps = {
    offer: Offer
    handleToAddOffer: (offer: Offer) => void
}


const OfferCard = ({offer, handleToAddOffer}: OfferProps) => {
   return (
    <div
        key={offer.offerId}
        className="bg-white rounded-xl shadow-md p-6 border border-[#81C3D7]">
        <h3 className="text-xl font-semibold text-[#2F6690] mb-1">
            {offer.job}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
            Empresa: <span className="font-medium">{offer.company?.name}</span>
        </p>
        <p className="text-sm text-gray-700 mb-4">{offer.description}</p>

        <div className="mb-4">
            <p className="text-sm font-medium text-[#3A7CA5] mb-1">Habilidades requeridas:</p>
            <ul className="list-disc pl-5 text-sm text-gray-600">
                {offer.offerSkills?.map((skill) => (
                <li key={skill.skillId}>{skill.skill?.name}</li>
                ))}
            </ul>
        </div>

        <button
            onClick={() => handleToAddOffer(offer)}
            className="mt-2 w-full bg-[#3A7CA5] hover:bg-[#2F6690] text-white py-2 px-4 rounded-md font-semibold transition"
        >
            Postularme
        </button>
    </div>
  )
}

export default OfferCard