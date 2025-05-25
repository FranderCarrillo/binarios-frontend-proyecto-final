
import { useLoggedInCandidate } from "../services/Auth/AuthHooks";
import {  useGetCandidateById } from "../services/Candidate/CandidateHooks";
import { useGetAllSkill_ReactQuery } from "../services/Skills/SkillHoks";


const Dashboard = () => {
  //const { data: user } = useLoggedInCandidate();

  const candidateID = localStorage.getItem('ID');
  
  const { candidate } = useGetCandidateById(Number(candidateID));

  const { skills, isPending, error } = useGetAllSkill_ReactQuery();

  // const removeSkillMutation = useAddCandidateSkill();

  // const addSkillMutation = useAddCandidateSkill(Number());


  // const handleToggleSkill = (skillId: number) => {
  //   const isSelected = skills.some(s => s.id === skillId);

  //   if (isSelected) {
  //     removeSkillMutation.mutate(skillId);
  //   } else {
  //     addSkillMutation.mutate(skillId);
  //   }
  // };

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
              // onClick={() => handleToggleSkill(skill.skillId)}
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