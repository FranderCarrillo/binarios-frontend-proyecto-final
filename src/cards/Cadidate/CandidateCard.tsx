import type { Candidate } from "../../models/Candidate/Candidate";
type Props = {
  candidateInfo?: Candidate;
}

const CandidateCard = ({ candidateInfo }: Props) => {
  return (
    <section className="mb-6 text-center">
      <h1 className="text-3xl font-bold text-[#16425B]">
        Bienvenido, {candidateInfo?.name}
      </h1>
      <p className="text-sm text-gray-700 mt-2">
        Nombre: {candidateInfo?.name} {candidateInfo?.surname1} {candidateInfo?.surname2}
      </p>
      <p className="text-sm text-gray-700 mt-2">
        Correo: {candidateInfo?.email}
      </p>
    </section>
  );
};

export default CandidateCard;