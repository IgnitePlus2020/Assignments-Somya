import React from 'react'
import OrderForm from '../../OrderForm/orderform'


 const OrderFormPage=()=> {
    return (
      <div className="App">
        <h3 style= {{color: "black", boxShadow:"0px 2px 10px 1px	#D3D3D3", align:"center" ,marginBottom:"50px",padding:"8px 5px" }}>ORDER</h3>
        <OrderForm/>
       
       
      </div>
    );
  }
  export default OrderFormPage;