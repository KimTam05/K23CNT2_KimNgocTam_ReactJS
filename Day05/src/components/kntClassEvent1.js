import React, { Component } from 'react'

export default class KntClassEvent1 extends Component {
    kntEventHandleClick1 = () => {
        alert('Button 01 is Clicked');
    };
    kntEventHandleClick2 = (name) => {
        alert('Button 02 is Clicked; name: ' + name);
    };
  render() {
    return (
      <div>
        <button className='btn btn-primary mx-1' onClick={this.kntEventHandleClick1()}>Button01</button>
        <button className='btn btn-danger mx-1' onClick={()=>this.kntEventHandleClick2("Kim Tâm")}>Button02</button>
      </div>
    )
  }
}
