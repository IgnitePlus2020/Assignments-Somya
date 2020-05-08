
import React from 'react';
import DATA from '../../Data/data'


export const CategoryWiseProduct=props=>(
    
   


<div className="Dynamictable">
     <h1 >{props.category}</h1>

     <div class="ui container">
  <p>
  <div >
        <table class="ui inverted yellow table">
          <thead>
            <tr><th>Name</th>
            <th>Price</th>
            <th>image</th>
          </tr></thead>
          {console.log(props),
            props.list[0].items.map((item,index)=>   
          
                <tbody>
            <tr>
            <td>{item.name}</td>
          <td>{item.price}</td>
          <td><a href={item.imageUrl}>{item.imageUrl}</a></td>
          </tr>
          </tbody>
)
          }
          </table>
       
          
        </div>
  </p>
</div>

   </div>
    )

