// Work around using setState callback function parameter


import React, { Component } from 'react'

 class Topic3 extends Component {
    state={
        inp:"",
        consoledVal:""
    }
    handleOnclick=()=>{
        console.log('1 :',this.state.consoledVal);
        this.setState({consoledVal:this.state.inp},()=>{//callBack function
            console.log('2 :', this.state.consoledVal); 
        })
        console.log('3 :',this.state.consoledVal);
        this.state.inp="";
    }
  render() {
    return (
      <div>
        <input value={this.state.inp} onChange={(event)=>{
            this.setState({inp:event.target.value})
        }} />
        <button onClick={this.handleOnclick}>Click Me</button>
      </div>
    )
  }
}

export default Topic3