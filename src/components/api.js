import React ,{useState , useEffect} from 'react';
import axios from "axios";
import styles from "./api.module.css";

const API = () => {

const [posts,setPosts]=useState([]);
const [photos , setPhotos] = useState([])

useEffect (()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(res=>{
        console.log(res)
        setPhotos(res.data)
    })
    .catch (err=>console.log(err))
},[])

useEffect (()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
        console.log(res)
        setPosts(res.data)
    })
    .catch (err=>console.log(err))
},[])


    return ( 

        <div className={styles.main}>
        <div className={styles.posts}>
           <ul>
               {
               posts.map(post=>(
               <li key={post.id}>{post.title}</li>
                ))
               }
           </ul>
       </div>


       <div className={styles.photos}>
        {
            photos.map(photo=>(
              <div key={photo.id} className={styles.inner}>
              <img src={photo.url} alt={photo.title}/>
             </div>   
            ))
        }
    
</div>
        </div>
      
   
     );
}
 
export default API;