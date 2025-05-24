import { useLoginMutation, useLogoutMutation } from '../../services/Auth/AuthHooks';
import { useGetAllSkill_ReactQuery } from '../../services/Skills/SkillHoks';

const ListSkills = () => {
    const { skills, isPending, error } = useGetAllSkill_ReactQuery();

    const loginMutation = useLoginMutation();
    const logoutMutation = useLogoutMutation();

    const handleLogin = () => {
      loginMutation.mutateAsync({
          email: 'jose@gmail.com',
          password: '1234',
          role : 'CANDIDATE'
        })
    .then(console.log);
    }

    const handleLogOut = () => {
      logoutMutation.mutateAsync()
      .then(console.log);
    }

  if(isPending)
  return '...Loading'

  if(error)
    <button onClick={handleLogin}>Login</button>

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