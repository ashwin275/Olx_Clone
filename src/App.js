import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost'
import Post from './store/PostContext'


import { AuthContext, FirebaseContext } from './store/Context';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {Setuser} = useContext(AuthContext)
  const {firebase} =   useContext(FirebaseContext)
  useEffect(()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        Setuser(user)
      })
  })
  return (
<Post>
    <Router>
      <Route exact path='/'>
           <Home />
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>

      <Route path = '/login'>
        <Login/>
      </Route>
      
      <Route path = '/create'>
        <Create/>
      </Route>

      <Route path='/view'>
      <ViewPost/>
      </Route>
      
    </Router>
</Post>
    
  );
}

export default App;
