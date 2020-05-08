import React from 'react'
import DATA from '../../Data/data'

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
                  <ul>
                    {item.items.map((sub)=>
                      <li>
                        {sub.name}
                      </li>
                    )}
                  </ul>
                
                </div>

              )
          }
        </div>
    );
}


    }

  export default  Table