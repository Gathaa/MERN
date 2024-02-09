import './App.css';
import { useState } from 'react';
import axios from "axios";

function Register () {
  const [Email,SetEmail] = useState('');
  const [Password,SetPassword]=useState('');
  const [FName,Setfname]=useState('')
  const [Lname,Setlname]=useState('')
  
  return (

    <div className="log">
    <div className='tab'>
    <img className='logo' src={require('./orange.png')} alt='Orangelogo' />

    </div>
    <form action='post'>
    <div className='inputbox'>
    <input onChange={(e) =>{Setfname(e.target.value)}} type="string" placeholder="First Name" className="input-field" required/>
    <input onChange={(e) =>{Setlname(e.target.value)}} type="string" placeholder="Last Name" className="input-field" required/>
    <input onChange={(e) =>{SetEmail(e.target.value)}} type="email" placeholder="Email" className="input-field" required/>
        <input onChange={(e) =>{SetPassword(e.target.value)}} type="password" placeholder="Password" className="input-field" required />
        <button className="login-button">Register</button>
        </div>
        </form>
    </div>
    
  );
}

export default Register;
