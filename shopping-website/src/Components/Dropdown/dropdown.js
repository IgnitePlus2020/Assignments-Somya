import React from 'react'
import {CategoryWiseProduct} from '../CategoryWiseProduct/CategoryWiseProduct'
import DATA from '../../Data/data'

class Dropdown extends React.Component{
  constructor(){
    super();
    this.state={
      searchValue:'',
      AllProducts:DATA,
      
    };
  }
  
    render(){
      const {searchValue,AllProducts}=this.state;
      
      const filteredProducts=AllProducts.filter(prod=>
        prod.title.includes((this.state.searchValue || ''))
        );
        console.log(filteredProducts)
      


      return(
<div className="dropdown">
        <select  value="Category" onChange={(e)=>{  this.setState({searchValue:e.target.value},()=>console.log(this.state));}   }
        >
        <option value="Category">category</option>
        
        <option value="Hats">Hats</option>
        <option value="Sneaker">Sneakers</option>
        <option value="Jacket">Jacket</option>
        <option value="Women">Women</option>
        <option value="Mens">Men</option>
       
        
    
     
       
      </select>
      <CategoryWiseProduct category={(this.state.searchValue)} list={filteredProducts}/>
      </div>
          
      );

    
  
  }
  
}
export default  Dropdown
