import React, { Component } from 'react'

export default class KntClassCompEventState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kntFullname: "Kim Ngọc Tâm",
            kntAge: 20,
        }
    }

    kntEventHandleButtonClick1 = () => {
        alert('Fullname: ' + this.state.kntFullname + ' - Age: ' + this.state.kntAge);
    }
  render() {
    return (
      <div>
        <button className='btn btn-primary mx-1' onClick={this.kntEventHandleButtonClick1}>Dữ liệu trong state: </button>
      </div>
    )
  }
}
