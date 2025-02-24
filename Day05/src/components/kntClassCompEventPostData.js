import React, { Component } from 'react'

export default class KntClassCompEventPostData extends Component {
    constructor(props) {
        super(props);
    }

    kntEventHandleClick = () => {
        this.props.onKntDataToApp("Data form child component - KntClassCompEventPostData");
    }
  render() {
    return (
      <div>
        <button className='btn btn-primary' onClick={this.kntEventHandleClick}>
            Button 1 - Upload data to app
        </button>
      </div>
    )
  }
}
