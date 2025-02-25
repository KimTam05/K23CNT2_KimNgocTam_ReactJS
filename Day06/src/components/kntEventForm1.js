import React, { Component } from 'react'

export default class KntEventForm1 extends Component {
    constructor(props) {
      super(props)
      this.state = {
        kntStudentName: 'Kim Tâm',
      }
    }
    // Hàm xử lý sự khiện thì textbox (kntStudentName) thay đổi
    kntHandleChange = (event) => {
        // Update state
        this.setState({
            kntStudentName: event.target.value,
        })
    }
    kntHandleSubmit = (ev) => {
        alert('Xin chào ' + this.state.kntStudentName);
        ev.preventDefault();
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>Form Input</h2>
        <form onSubmit={this.kntHandleSubmit}>
            <label htmlFor='kntStudentName'>
                <input type='text' id='kntStudentName' name='kntStudentName' value={this.state.kntStudentName} onChange={this.kntHandleChange}/>
            </label>
            <button className='btn btn-primary'>Click Here</button>
        </form>
      </div>
    )
  }
}
