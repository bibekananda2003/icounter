import React from 'react'
import './second_css.css'

class Second extends React.Component{
    constructor(){
        super();
        this.state={
            counter:0,
            color:'white'
        }
    }
    increment = () => {
        setTimeout(() => {
          this.setState({color: '#59fd00', counter: this.state.counter + 1 });
        }, 100); 
      }
    
      decrement = () => {
        setTimeout(() => {
          this.setState({ color: '#c05534', counter: this.state.counter - 1 });
        }, 100); 
      }

      
    

    changeColorToWhite = () => {
        this.setState({ color: 'white' });
      };
    
      componentDidMount() {
        this.intervalId = setInterval(this.changeColorToWhite, 3000);
      }

    
    render(){
        return(
            <div class="small_container">
                <h1>Interactive Counter</h1>
                <h2 style={{color:this.state.color}} >Counter : {this.state.counter}</h2>
                <div class="btns">
                <button class="btn" id="incr_btn" onClick={this.increment.bind(this)}>Increment</button>
                <button class="btn" id="decr_btn" onClick={this.decrement.bind(this)}>Decrement</button>
                </div>
            </div>
        );
    }
}

export default Second;