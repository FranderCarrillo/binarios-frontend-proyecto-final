
import { useQueryClient } from "@tanstack/react-query";
import { useLoggedInCandidate } from "../services/Auth/AuthHooks";
import {  useGetCandidateById } from "../services/Candidate/CandidateHooks";
import { useCreateCandidateSkillMutation } from "../services/CandidateService/CandidateSkillHooks";
import { useGetAllSkill_ReactQuery } from "../services/Skills/SkillHoks";


const Dashboard = () => {
  //const { data: user } = useLoggedInCandidate();
  const queryClient = useQueryClient();

  const candidateID = localStorage.getItem('ID');
  
  const { candidate } = useGetCandidateById(Number(candidateID));

  const { skills, isPending, error } = useGetAllSkill_ReactQuery();

  //const removeSkillMutation = useAddCandidateSkill();

  const addSkillMutation = useCreateCandidateSkillMutation();


  const handleToAddSkill = (skillId: number) => {
    //const isSelected = skills?.some(s => s.skillId === skillId);
    addSkillMutation.mutateAsync({
      candidateId : Number(candidateID),
      skillId: skillId
    })

   queryClient.invalidateQueries({ queryKey: ['candidate', Number(candidateID)] });
  };

    return (
    <div className="MyProfile">
      <section className="info-candidate">
        <h1>Bienvenido, {candidate?.email}</h1>
        <p>Correo: {candidate?.email}</p>
      </section>

      <section className="skills-candidate">
        <h2>Skills</h2>
        <div className="buttons-skills">
          {skills?.map((skill) => (
            <button
              key={skill.skillId}
              onClick={() => handleToAddSkill(skill.skillId)}
              // className={skills.some(s => s.skillId === skill.skillId) ? "active" : ""}
              // disabled={addSkillMutation.isPending || removeSkillMutation.isPending}
            >
              {skill.name}
            </button>
          ))}
        </div>
      </section>
    </div>
  );

};

export default Dashboard;

