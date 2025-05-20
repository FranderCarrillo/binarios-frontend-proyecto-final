import { logout } from '../../api/apiToken';
import { useGetAllSkill_ReactQuery } from '../../services/Skills/SkillHoks';

const ListSkills = () => {
    const { skills, isPending, error } = useGetAllSkill_ReactQuery();

    const LogOut = () =>{
        logout();
    }

  return (
    <div>
      <div className='card-container'>
        {skills?.map(skill=>(
          <h2 key={skill.skillId}>{skill.name}</h2>
        ))}
      </div>
      <button onClick={LogOut}>logout</button>
    </div>
  )
}

export default ListSkills