import React,{useEffect,useContext,useState} from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Posts() {
   const {firebase} = useContext(FirebaseContext)
   const [Products,setProducts] = useState([])
   const {setPostDetails} = useContext(PostContext)
   const history = useHistory()

  
   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await firebase.firestore().collection('products').get();
        const allPost = snapshot.docs.map((product) => ({
          ...product.data(),
          id: product.id
        }));
        setProducts(allPost);
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [history]);
 
   

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

        {Products.map((product)=>{
           
          return <div
           className="card"
           onClick={()=>{
            
            setPostDetails(product);
            
            history.push('/view')
           }}
         >
           <div className="favorite">
             <Heart></Heart>
           </div>
           <div className="image">
             <img src={product.url} alt="" />
           </div>
           <div className="content">
             <p className="rate">&#x20B9; {product.price}</p>
             <span className="kilometer">{product.category}</span>
             <p className="name"> {product.name}</p>
           </div>
           <div className="date">
             <span>{product.createdAt}</span>
           </div>
         </div>
        })


         
   }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
