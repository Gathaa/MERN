import './App.css';
import { useState } from 'react';
import axios from "axios";
import {useNavigate,Link} from "react-router-dom";
function Login () {
  const [Email,SetEmail] = useState('');
  const [Password,SetPassword]=useState('');

  async function submit(e){
    e.preventDefault();

    try{

        await axios.post("http://localhost:8000/Login",{
            Email,Password
        })
        .then(res=>{
            if(res.data ==="Email Exists"){
                alert("Welcome")
            }
            else if(res.data ==="Does Not Exist"){
                alert("User Has To Sign Up")
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })

    }
    catch(e){
        console.log(e);

    }

}
  return (
    <div className="log">
    <div className='tab'>
    <img className='logo' src={require('./orange.png')} alt='Orangelogo' />
    </div>
    <form action='POST'>
    <div className='inputbox'>
    <input onChange={(e) =>{SetEmail(e.target.value)}} value={Email} type="email" placeholder="email" className="input-field" required/>
        <input onChange={(e) =>{SetPassword(e.target.value)}} value={Password} type="password" placeholder="Password" className="input-field" required />
        <button type='submit' className="login-button" onClick={submit}>Login</button>
        </div>
        </form>
        <br></br>

        <p>You Do Not Have An Account !!!</p>

    </div>
    
  );
}

export default Login;
