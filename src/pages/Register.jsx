import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input  required type="text" placeholder='username' />
        <input  required type="paswword" placeholder='password' />
        <button>Register</button>
        <p>This is an error!</p>
        <span>Don you have an account <Link to={'/login'}>Login</Link></span>
      </form>
    </div>
  )
}

export default Register
