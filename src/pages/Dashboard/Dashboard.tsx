import { useQueryClient } from "@tanstack/react-query";
import { useGetCandidateById } from "../../services/Candidate/CandidateHooks";
import { useCreateCandidateSkillMutation, useDeleteCandidateSkillMutation } from "../../services/CandidateService/CandidateSkillHooks";
import { useGetAllSkill_ReactQuery } from "../../services/Skills/SkillHoks";
import { useLogoutMutation } from "../../services/Auth/AuthHooks";
import { useNavigate } from "@tanstack/react-router";



const Dashboard = () => {
    const navigate = useNavigate();
    
    const queryClient = useQueryClient();

    const candidateID = localStorage.getItem('ID');
    
    const { candidate } = useGetCandidateById(Number(candidateID));

    const { skills, isPending, error } = useGetAllSkill_ReactQuery();

    const removeSkillMutation = useDeleteCandidateSkillMutation();

    const addSkillMutation = useCreateCandidateSkillMutation();


    const handleToggleSkill = (skillId: number) => {
      if (!candidate) return;

      const hasSkill = candidate.candidateSkills?.some(
        (s) => s.skillId === skillId
      );

      const mutation = hasSkill
        ? removeSkillMutation.mutateAsync
        : addSkillMutation.mutateAsync;

      mutation({
        candidateId: Number(candidateID),
        skillId: skillId,
      }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['candidate', Number(candidateID)] });
      });
    };


    const logoutMutation = useLogoutMutation();
    
    const handleLogOut = () => {
      logoutMutation.mutateAsync()
      .then(() => navigate({ to: '/' }));
    }

  return (
  <div className="MyProfile">
    <section className="info-candidate">
      <h1>Bienvenido, {candidate?.name}</h1>
      <h2>{candidate?.surname1}</h2>
      <p>Correo: {candidate?.email}</p>
    </section>

    <section className="skills-candidate">
      <h2>Skills</h2>
      <div className="buttons-skills">
        {skills?.map((skill) => (
          <button
            key={skill.skillId}
            onClick={() => handleToggleSkill(skill.skillId)}
            className={`skill-button ${
              candidate?.candidateSkills?.some(s => s.skillId === skill.skillId)
                ? "selected-skill"
                : ""
            }`}
            disabled={addSkillMutation.isPending || removeSkillMutation.isPending}
          >
            {skill.name}
          </button>
        ))}
      </div>
    </section>
    <button onClick={handleLogOut}>Logout</button>
  </div>
  );

};

export default Dashboard;

