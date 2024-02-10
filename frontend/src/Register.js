import './App.css';
import { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

function Register() {
    const [Email, SetEmail] = useState('');
    const [Password, SetPassword] = useState('');
    const [Fname, Setfname] = useState('');
    const [Lname, Setlname] = useState('');
  
    async function submit(e) {
      e.preventDefault();
  
      try {
        const res = await axios.post("http://localhost:8000/Register", {
          Fname,
          Lname,
          Email,
          Password
        });
  
        if (res.data === "Email Already Exists !! Sowwwy :(") {
          alert("User already exists");
        } else if (res.data === "Email Registered Successfully !!! Enjoy :)") {
          alert("Welcome");
        }
      } catch (error) {
        alert("An error occurred. Please check your details and try again.");
        console.error(error);
      }
    }
  
    return (
      <div className="log">
        <div className='tab'>
          <img className='logo' src={require('./orange.png')} alt='Orangelogo' />
        </div>
        <form>
          <div className='inputbox'>
            <input onChange={(e) => { Setfname(e.target.value) }} type="string" placeholder="First Name" className="input-field" required />
            <input onChange={(e) => { Setlname(e.target.value) }} type="string" placeholder="Last Name" className="input-field" required />
            <input onChange={(e) => { SetEmail(e.target.value) }} type="email" placeholder="Email" className="input-field" required />
            <input onChange={(e) => { SetPassword(e.target.value) }} type="password" placeholder="Password" className="input-field" required />
            <button type="submit" className="login-button" onClick={()=>{
                alert("Hello World")
            }}>Register</button>
          </div>
        </form>
        <p>Already Have An Account ?</p>
      </div>
    );
  }
  

export default Register;