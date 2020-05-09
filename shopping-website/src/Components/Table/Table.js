import React from 'react'
import DATA from '../../Data/data'

import { CardList } from '../CardComponent/CardList'

class Table extends React.Component{

  constructor(props){
super(props);
this.state={
  search:"all"
}

  }
  
     componentDidMount(){
        // const list=this.SHOP_DATA.map((items)=>items.items)
        const list=DATA.map((items)=>items.items)

         console.log(list)       
     }
    

render(){

  
  
    return(
      
        <div className="table" >
          {
            
              DATA.map((item)=>
                <div><h1 style={{color: "white", backgroundColor:"#D3D3D3" ,margin:"30px 70px",marginTop:"100px" }}>{item.title}</h1>
                   
                   <h4>showing results for {this.props.search}</h4>
                  <CardList obj={item} search={this.props.search}/>
                  <hr/>
         
          
                </div>

              )
          }
        </div>
    );
}


    }

  export default  Table