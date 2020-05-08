import React from 'react'
import Dropdown from '../../Dropdown/dropdown'
 const ShopCategory=()=> {
    return (
      <div className="App">
        <h1 style= {{color: "black", boxShadow:"0px 2px 10px 1px	#D3D3D3", align:"center" ,marginBottom:"50px",padding:"5px 5px" }}>Shop by category</h1>
        <Dropdown/>
      
       
      </div>
    );
  }
  export default ShopCategory;