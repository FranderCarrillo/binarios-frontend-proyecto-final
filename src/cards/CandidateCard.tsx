interface Props {
  name?: string;
  surname1?: string;
  surname2?: string;
  email?: string;
}

const CandidateCard = ({ name, surname1, surname2, email }: Props) => {
  return (
    <section className="mb-6 text-center">
      <h1 className="text-3xl font-bold text-[#16425B]">
        Bienvenido, {name}
      </h1>
      <p className="text-sm text-gray-700 mt-2">
        Nombre: {name} {surname1} {surname2}
      </p>
      <p className="text-sm text-gray-700 mt-2">
        Correo: {email}
      </p>
    </section>
  );
};

export default CandidateCard;