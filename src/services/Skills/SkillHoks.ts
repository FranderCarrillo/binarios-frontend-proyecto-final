import { useQuery } from "@tanstack/react-query";
import { getAllSkills } from "./SkillServices";

export const useGetAllSkills = () => {
  const { data: skills, isPending, error } = useQuery({
    queryKey: ['skills'], 
    queryFn: getAllSkills, 
  });

  return { skills, isPending, error };
};

