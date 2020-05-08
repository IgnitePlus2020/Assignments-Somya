import React from 'react'
import DATA from '../../Data/data'
import { Card } from '../CardComponent/Card'
import { CardList } from '../CardComponent/CardList'

class Table extends React.Component{
  
     componentDidMount(){
        // const list=this.SHOP_DATA.map((items)=>items.items)
        const list=DATA.map((items)=>items.items)

         console.log(list)       
     }
    

render(){
    return(
        <div className="table">
          {
              DATA.map((item)=>
                <div>{item.title}
                <CardList obj={item}/>
                 <hr/>
                
                </div>

              )
          }
        </div>
    );
}


    }

  export default  Table