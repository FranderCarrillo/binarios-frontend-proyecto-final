import type { Company } from "../../models/Company/Company";

type Props = {
  companyInfo?: Company;
};

const CompanyCard = ({ companyInfo }: Props) => {
  return (
    <section className="mb-6 text-center">
      <h1 className="text-3xl font-bold text-[#16425B]">
        Bienvenido, {companyInfo?.name}
      </h1>
      <p className="text-sm text-gray-700 mt-2">
        Nombre de la empresa: {companyInfo?.name}
      </p>
      <p className="text-sm text-gray-700 mt-2">
        Sitio web: <a href={companyInfo?.webSite} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{companyInfo?.webSite}</a>
      </p>
      <p className="text-sm text-gray-700 mt-2">
        Correo: {companyInfo?.email}
      </p>
    </section>
  );
};

export default CompanyCard;
