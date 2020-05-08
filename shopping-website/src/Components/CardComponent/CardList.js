import React from 'react';
import './card-list.css';
import {Card} from  './Card'

export const CardList=props=>(

<div className='card-list'>
     {
        //  console.log(props.obj.items),
        //   props.obj.items.map((item)=>console.log(item.name)),
         props.obj.items.map((sub)=>
            <Card name={sub.name} price={sub.price} url={sub.imageUrl}/>
          )
    }
    </div>
    );

