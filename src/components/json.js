import React from 'react';
import data from "../Data/images.json";
import styling from "./json.module.css"

const Json = () => {
    return ( 
        <div className={styling.wrapper}>
           <h1>Images</h1>

          <div className={styling.block}>
            {data.map((item) => {
            return (
                <div className={styling.inner} key={item.id}>
                <img src={item.link} alt={item.alt}/>
             </div>
            );
           })}
</div>
          
           
        </div>

    
     );
}
 
export default Json;