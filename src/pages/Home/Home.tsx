import React from 'react'
import { Login } from '../../services/Auth/AuthService';
import { useLoginMutation } from '../../services/Auth/AuthHooks';

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
      <div>Welcome Home!</div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Home