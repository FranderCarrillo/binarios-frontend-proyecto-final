import { useQuery } from "@tanstack/react-query";
import { getCompanyById } from "./CompanyService";

export const useGetCompanyById = (id: number) => {
  const { data: company, isPending, error } = useQuery(
  {
    queryKey: ['company', id],
    queryFn: () => getCompanyById(id)
  });

  return { company, isPending, error };
};