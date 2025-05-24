import { useLoginMutation, useLogoutMutation } from '../../services/Auth/AuthHooks';
import { useGetAllSkill_ReactQuery } from '../../services/Skills/SkillHoks';

const ListSkills = () => {
  const { skills, isPending, error } = useGetAllSkill_ReactQuery();


  if(isPending)
  return '...Loading'

  if(error)
    

  return (
    <div>
      <div className='card-container'>
        {skills?.map(skill=>(
          <h2 key={skill.skillId}>{skill.name}</h2>
        ))}
      </div>
      {/* <button onClick={handleLogOut}>LogOut</button> */}
    </div>
  )
}

export default ListSkills