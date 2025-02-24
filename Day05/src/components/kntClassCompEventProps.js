import React, { Component } from 'react'

export default class KntClassCompEventProps extends Component {
    kntEventHandleButtonClick1 = () => {
        alert('Hello ' + this.props.kntRenderTitle);
    };

  render() {
    return (
      <div>
        <button className='btn btn-primary mx-1' onClick={this.kntEventHandleButtonClick1}>Item 1</button>
      </div>
    )
  }
}
