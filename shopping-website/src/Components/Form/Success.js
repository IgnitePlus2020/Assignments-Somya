import React, { Component } from 'react'

export class Success extends Component {
    render() {
        return (
            <div style={{padding:"100px"}}>
                <h1>Thankyou for shopping with us !!! </h1><br/>
                  <a class="item" style={{color: "gray", backgroundColor:"#7FFF00" ,padding:"10px 50px",borderRadius:"10px"}} href="/">
    <i class="shop icon"></i> Continue Shopping
  </a>
            </div>
        )
    }
}

export default Success
