import { useLoginMutation } from '../../services/Auth/AuthHooks';
import LogIn from '../../componets/Login/Login';
import Auth from '../../componets/Login/Auth';

const Home = () => {
  const loginMutation = useLoginMutation();

  const handleLogin = () => {
    loginMutation.mutateAsync({
          email: 'jose@gmail.com',
          password: '1234'
        })
    .then(console.log);
  }

  return (
    <div>
      <LogIn />
      <Auth />
      {/* <div>Welcome Login!</div>
      <button onClick={handleLogin}>Login</button> */}
    </div>
  )
}

export default Home