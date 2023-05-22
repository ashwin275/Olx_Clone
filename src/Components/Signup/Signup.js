import React from 'react';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';


export default function Signup() {

  const history = useHistory();
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [phone,setPhone] = useState('')
  const {firebase} = useContext(FirebaseContext)
  
  const handleSubmit = (e)=>{
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
          result.user.updateProfile({displayName:username}).then(()=>{
            firebase.firestore().collection('users').add({
              if:result.user.uid,
              username:username,
              phone:phone
            }).then(()=>{
             history.push("/login")
            })

          })
        })

  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='image'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  );
}
