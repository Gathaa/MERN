import './App.css';
import { useState } from 'react';
import axios from "axios";

function Login () {

  const [Email,SetEmail] = useState('');
  const [Password,SetPassword]=useState('');
  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8000/api/Auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
  }
  return (
    <div className="log">
    <div className='tab'>
    <img className='logo' src={require('./orange.png')} alt='Orangelogo' />
    </div>
    <form action='post'>
    <div className='inputbox'>
    <input onChange={SetEmail} value={Email} type="email" placeholder="email" className="input-field" required/>
        <input onChange={SetPassword} value={Password} type="password" placeholder="Password" className="input-field" required />
        <button className="login-button">Login</button>
        </div>
        </form>
    </div>
    
  );
}
export default Login;
