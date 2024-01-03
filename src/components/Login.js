import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { Loggedin } from '../store/slices/isloggedslice'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch=useDispatch()
  const navigate = useNavigate();

  const handleLogin = async () => {
    await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    }).then(async (response) => {
      const data = await response.json();
      if (response.status === 200) {
        localStorage.setItem('token', data.token);
        dispatch(Loggedin(true))
        navigate('/home')
      }else{
        setError(data.message)
        setTimeout(() => {
          setError('')
        }, 3000);
      }
    })

  }
  return (
    <div className='login-container'>
      Login
      <input type='text' className='username' placeholder='Username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
      <input type='password' className='password' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
      <button className='login' onClick={handleLogin}>Log In</button>
      <div className='login-error'>{error}</div>
    </div>
  )
}

export default Login
