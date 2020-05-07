import React from 'react'

class Dropdown extends React.Component{
  constructor(){
    super();
    this.state={
       category:''
    };
  }
  
    render(){
      return(

        <select  value="Category" onChange={(e)=>{  this.setState({searchValue:e.target.value},()=>console.log(this.state));}   }
        >
        <option value="Category">category</option>
        <option value="Hats">Hats</option>
        <option value="Jacket">Jacket</option>
        <option value="Sneakers">Sneakers</option>
        <option value="Men">Men</option>
        <option value="Women">Cherry</option>
      </select>
          
      );

    
  
  }
  
}
export default  Dropdown
// import React from 'react'

// class Dropdown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'Category'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick Category: 
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="Women">Women</option>
//             <option value="Men">Men</option>
//             <option value="Hat">Hat</option>
//             <option value="Jacket">Jacket</option>
//             <option value="Sneaker">Sneaker</option>
//           </select>
//         </label>
//        {/* /<input type="submit" value="Submit" /> */}
//       </form>
//     );
//   }
// }

// export default  Dropdown