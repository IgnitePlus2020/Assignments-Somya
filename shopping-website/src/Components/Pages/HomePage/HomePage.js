import React,{Component} from 'react'
import Table from '../../Table/Table'
 export default class HomePage extends Component {

constructor(props) {
super(props)
this.state={
  search:""
}
}
  render(){
    return (
      <div className="App">
        
        <div className="title">
          <h3 style={{color: "black", boxShadow:"0px 2px 10px 1px	#D3D3D3", align:"center",padding:"10px 5px" }}>HOMEPAGE</h3>
          <div class="right menu" style={{backgroundColor:"white", marginRight:"8px",borderRadius:"6px"}}>
            <div class="item"  style={{backgroundColor:"white",padding:"10px",borderRadius:"18px" ,borderStyle:"solid",borderWidth:"1px",borderColor:"gray",width:"250px",float:"right" }}>
              <div class="ui transparent icon input" >
                <input  type="text" placeholder="Search..." onChange={(e)=>{  this.setState({search:e.target.value},()=>console.log(this.state));}   }></input>
                <i class="search link icon"></i>
              </div>
            </div>
          </div>
        </div>
        {console.log(this.state.search)}
        <Table search={this.state.search}/>
       
      </div>
    );
  }
   
  }
 