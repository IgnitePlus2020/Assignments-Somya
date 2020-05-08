import React from 'react'
import './card.styles.css'
export const Card= props =>(

<div className="card">
  <img src={props.url} alt="Avatar" ></img>
  <div class="container">
<h4><b>{props.name}</b></h4> 
    <p>{props.price}</p>
    <b></b> 
  </div>
</div>
)