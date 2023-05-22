import React, { Fragment ,useState} from 'react';
import './Create.css';
import Header from '../Header/Header';


const Create = () => {
const [name,setName] = useState('')
const [ price,setPrice] =  useState('')
const [ category,setCategory] =  useState('')
const [image,setImage] = useState(null)

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
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
          </form>
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
          <form>
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file"/>
            <br />
            <button className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
