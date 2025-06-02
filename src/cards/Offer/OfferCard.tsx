import type { Offer } from "../../models/Offer/Offer"

type OfferProps = {
  offer: Offer
  handleFunction: (offer: Offer) => void,
  buttonText?: string,
  buttonClassName?: string;
}

const OfferCard = ({ offer, handleFunction, buttonText,buttonClassName }: OfferProps) => {
  return (
    <div
      key={offer.offerId}
      className="bg-white rounded-xl shadow-md p-6 border border-[#81C3D7]"
    >
      <h3 className="text-2xl font-semibold text-[#2F6690] mb-1">
        {offer.job}
      </h3>
      <p className="text-sm text-gray-600 mb-2">
        Empresa: <span className="font-medium">{offer.company?.name}</span>
      </p>
      <p className="text-sm text-gray-700 mb-4">{offer.description}</p>

      <div className="mb-4">
        <p className="text-sm font-medium text-[#3A7CA5] mb-2">Habilidades requeridas:</p>
        <div className="flex flex-wrap gap-2">
          {offer.offerSkills?.map((skill) => (
            <div
                key={skill.skillId}
                title={skill.skill?.name}
                className="flex items-center gap-2 px-4 py-2 bg-[#F4F7F8] border border-[#D1E3ED] rounded-full text-sm text-[#2F6690] transition-transform transform hover:scale-105 cursor-help"
            >
                {skill.skill?.icon && (
                <img
                    src={skill.skill.icon}
                    alt={skill.skill.name}
                    className="w-8 h-8 object-contain"
                />
                )}
                <span className="font-medium">{skill.skill?.name}</span>
            </div>
            ))}

        </div>
      </div>

      <button
        onClick={() => handleFunction(offer)}
        className={`mt-2 w-full py-2 px-4 rounded-md font-semibold transition ${buttonClassName}`}
      >
        {buttonText || "Click"}
      </button>
    </div>
  )
}
export default OfferCard;
