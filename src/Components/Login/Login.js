import React from 'react';
import {FirebaseContext} from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import { useState,useContext } from 'react';
import { Link , useHistory} from 'react-router-dom';


function Login() {

  const history = useHistory()
  const [email,setemail] = useState('')
  const [password,setPassword] =  useState('')
  const {firebase} = useContext(FirebaseContext)

  const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
      
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'><button>SignUp</button></Link>
        
      </div>
    </div>
  );
}

export default Login;
