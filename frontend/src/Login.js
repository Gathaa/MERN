import './App.css';
import { useState } from 'react';
import axios from "axios";

function Login () {
  const [Email,SetEmail] = useState('');
  const [Password,SetPassword]=useState('');
  
  return (

    <div className="log">
    <div className='tab'>
    <img className='logo' src={require('./orange.png')} alt='Orangelogo' />

    </div>
    <form action='post'>
    <div className='inputbox'>
    <input onChange={(e) =>{SetEmail(e.target.value)}} type="email" placeholder="email" className="input-field" required/>
        <input onChange={(e) =>{SetPassword(e.target.value)}} type="password" placeholder="Password" className="input-field" required />
        <button className="login-button">Login</button>
        </div>
        </form>
    </div>
    
  );
}

export default Login;
