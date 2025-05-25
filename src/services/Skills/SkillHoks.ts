import { useQuery } from "@tanstack/react-query";
import { getAllSkill_Axios,  } from "./SkillServices";

export const useGetAllSkill_ReactQuery = () => {
  const { data: skills, isPending, error } = useQuery({
    queryKey: ['skills'], 
    queryFn: getAllSkill_Axios, 
  });

  return { skills, isPending, error };
};

