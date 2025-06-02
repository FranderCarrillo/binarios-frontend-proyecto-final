import type { Candidate } from "../../models/Candidate/Candidate";
import type { Skill } from "../../models/Skill/Skill";

interface Props {
  skills?: Skill[];
  candidate?: Candidate;
  onToggle: (skillId: number) => void;
  isLoading: boolean;
}

const SkillsCard = ({ skills, candidate, onToggle, isLoading }: Props) => {
  return (
    <section className="skills-candidate text-center">
      <h2 className="text-2xl font-semibold text-[#2F6690] mb-4">Habilidades</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills?.map((skill) => {
          const isSelected = candidate?.candidateSkills?.some(
            (s) => s.skillId === skill.skillId
          );

          return (
            <button
              key={skill.skillId}
              onClick={() => onToggle(skill.skillId)}
              disabled={isLoading}
              title={skill.name}
              className={`group px-4 py-2 rounded-full border flex items-center justify-center min-w-[80px] h-[48px]
                transition font-medium text-m relative overflow-hidden
                ${
                  isSelected
                    ? "bg-[#2F6690] text-white border-[#2F6690] hover:bg-[#16425B]"
                    : "bg-white text-[#2F6690] border-[#2F6690] hover:bg-[#E1EEF3]"
                }`}
            >
              {isSelected ? (
                <span className="z-10">{skill.name}</span> ) : 
                ( <>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 object-contain transition-opacity duration-200 group-hover:opacity-0"
                  />
                  <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {skill.name}
                  </span>
                </> )}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsCard;
