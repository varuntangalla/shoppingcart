import React, { Component } from 'react';

class Counter extends Component {

    componentDidUpdate(prevProps, prevState) {

        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
    }

    componentWillUnmount() {

        console.log("Counter - Unmount");


    }

  // constructor(){
   //     super();
   //  this.handleIncrement = this.handleIncrement.bind(this);
  //  }


  /* handleIncrement = () =>{ 
       this.setState({ value: this.state.value + 1 })
    } 
*/
   /* handleDecrement = product => {
        this.setState({ count: this.state.count -1});
    }*/

   // <button onClick={ this.handleDecrement} className="btn btn-secondary btn-sm">Decrement</button><br/>

    render() { 
        console.log('App - Rendered'); 
      //  console.log(this.props);
      // console.log('props', this.props);
        return(
            <div> 
            <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>  
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button> 
         </div>     
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

        formatCount()
        {
            const { value } = this.props.counter;
            
            return value === 0 ? "Zero" : value;
        }
    
}
 
export default Counter;