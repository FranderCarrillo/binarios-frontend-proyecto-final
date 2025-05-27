import "./OfferCard.css";
import type { Offer } from "../../models/Offer/Offer";

interface Props {
  offer: Offer;
  skills: string[];
}

export function OfferCard({ offer, skills }: Props) {
  return (
    <div className="offer-card">
      <p className="company-name">{offer.company?.name ?? "Empresa desconocida"}</p>

      <p className="label">Puesto:</p>
      <p className="value">{offer.job}</p>

      <p className="label">Descripción:</p>
      <p className="value">{offer.description}</p>

      <p className="label">Habilidades:</p>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </div>
  );
}