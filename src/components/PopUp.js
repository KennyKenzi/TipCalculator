import React from 'react';  
import '../App.css';  

class Popup extends React.Component {  

    handleClick = () => {
           this.props.toggle();
           if(this.props.clearInfo){
             this.props.clearInfo()  
           }
           
          };




  render() {  
return (  
<div className='popup'>  
    <div className='popup\_inner'>  
        <h1>{this.props.text}</h1> 
        <p>{this.props.tipTotal}</p> 
        <p>{this.props.tipPerPerson}</p> 
        <button onClick={this.handleClick}>close</button>  
    </div>  
</div>  
);  
}  
}  

export default Popup;