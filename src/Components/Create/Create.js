import React, { Fragment ,useContext,useEffect,useState} from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/Context'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Create = () => {
const history = useHistory()
const {firebase} = useContext(FirebaseContext)
const {user} = useContext(AuthContext)
const [name,setName] = useState('')
const [ price,setPrice] =  useState('')
const [ category,setCategory] =  useState('')
const [image,setImage] = useState(null)
const date = new Date()

useEffect(()=>{
  if (!user){
    history.push('/login')
  }
})


const handleSubmit=()=>{
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
           ref.getDownloadURL().then((url)=>{
            console.log(url)
            firebase.firestore().collection('products').add({
              name,
              category,
              price,
              url,
              userId:user.uid,
              createdAt:date.toDateString()
            })
            history.push('/')
           })
      })
}


  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              onChange={(e)=>setName(e.target.value)}
              value={name}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price}  onChange={(e)=>setPrice(e.target.value)}/>
            <br />
         
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
          
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file"/>
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
