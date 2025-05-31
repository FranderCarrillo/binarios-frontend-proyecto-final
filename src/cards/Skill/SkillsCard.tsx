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
      <h2 className="text-2xl font-semibold text-[#2F6690] mb-4">Skills</h2>
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
              className={`px-4 py-2 rounded-full border transition text-sm font-medium
                ${
                  isSelected
                    ? "bg-[#2F6690] text-white border-[#2F6690] hover:bg-[#16425B]"
                    : "bg-white text-[#2F6690] border-[#2F6690] hover:bg-[#E1EEF3]"
                }`}
            >
              {skill.name}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsCard;