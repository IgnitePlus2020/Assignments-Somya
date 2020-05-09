import React from 'react'
import Card from '../CardComponent/Card'

 class NavigationMenuBar extends React.Component {

  constructor(){
    super();
   
  }

   render(){
    return (
      <div className="App">
        <div class="ui menu" style={{color: "white", backgroundColor:"blue"  }}>
  <a class="item" style={{color: "white", backgroundColor:"blue" ,padding:"0px 50px"}} href="/">
    <i class="home icon"></i> Home
  </a>
  <a class="item" style={{color: "white", backgroundColor:"blue" ,padding:"0px 50px"}} href="/category">
    <i class="tags icon"></i> Shop
  </a>
  <a class="item" style={{color: "white", backgroundColor:"blue" ,padding:"0px 50px"}} href="/order">
    <i class="shopping basket icon"></i> Order
  </a>

  <div className="CompanyName" align ="center" >
  <h1  style={{paddingLeft: "230px"}}>shopie</h1>
  </div>


</div>

       
       
      </div>
    );

   }
 
  }
  export default NavigationMenuBar;