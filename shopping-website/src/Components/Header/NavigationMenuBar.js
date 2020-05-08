import React from 'react'

 const NavigationMenuBar=()=> {
    return (
      <div className="App">
        <div class="ui menu">
  <a class="item" href="/">
    <i class="home icon"></i> Home
  </a>
  <a class="item" href="/order">
    <i class="shopping basket icon"></i> Order
  </a>
  <a class="item" href="/category">
    <i class="tags icon"></i> Shop
  </a>
  <div className="CompanyName" align ="center" >
  <h1  style={{paddingLeft: "400px"}}>shopie</h1>
  </div>
  <div class="right menu">
    <div class="item">
      <div class="ui transparent icon input">
        <input type="text" placeholder="Search..."></input>
        <i class="search link icon"></i>
      </div>
    </div>
  </div>
</div>

       
       
      </div>
    );
  }
  export default NavigationMenuBar;