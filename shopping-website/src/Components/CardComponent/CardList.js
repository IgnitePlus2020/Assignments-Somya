import React, { cloneElement } from 'react';
import './card-list.css';
import {Card} from  './Card'

export class CardList extends React.Component{


   constructor(props){
      super(props);
      this.state={
        search:"all"
      }
      
        }
   render(){
      const filteredItems=this.props.obj.items.filter(item=>
         item.name.toLowerCase().includes((this.props.search || '').toLowerCase())
         );
         console.log(filteredItems,"OOOOOOOOO")



      return <div className='card-list'>
      {
         console.log(this.props.search),
         //   props.obj.items.map((item)=>console.log(item.name)),
         //  this.props.obj.items.map(sub=>{
            filteredItems.map(sub=>{
       
         return      <div className="card">
                        <img src={sub.imageUrl} alt="Avatar" ></img>
                           <div class="container">
                           <h4><b>{sub.name}</b></h4> 
                           <p>{sub.price}</p>
                           <b></b> 
                        </div>
                  </div>
         
             
          }
          )
     }
     </div>
   }


}

