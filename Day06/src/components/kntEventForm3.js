import React, { Component } from 'react'

export default class KntEventForm3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kntGender: 'Nam',
        }
    }
    // Hàm xử lý sự kiện change
    kntHandleChange = (event) => {
        this.setState({
            kntGender: event.target.value,
        })
    }
    // Hàm xử lý sự kiện submit
    kntHandleSubmit = (event) => {
        alert('Giới tính của bạn là: ' + this.state.kntGender);
        event.preventDefault();
    }
  render() {
    return (
      <div className='alert alert-success'>
        <h2>Form Input - Radio</h2>
        <form onSubmit={this.kntHandleSubmit}>
            <div>
                <label htmlFor='kntGender'>
                    Giới tính: 
                </label>
                <input type='radio' id='kntGender' name='kntGender' value='Nam' className='mx-2' checked={this.state.kntGender === 'Nam'} onChange={this.kntHandleChange}/><label htmlFor='kntNam' >Nam</label>
                <input type='radio' id='kntGender' name='kntGender' value='Nữ' className='mx-2' checked={this.state.kntGender === 'Nữ'} onChange={this.kntHandleChange}/><label htmlFor='kntNu'>Nữ</label>
                <input type='radio' id='kntGender' name='kntGender' value='Khác' className='mx-2' checked={this.state.kntGender === 'Khác'} onChange={this.kntHandleChange}/><label htmlFor='kntKhac'>Khác</label>
            </div>
            <button className='btn btn-primary'>Click Here</button>
        </form>
      </div>
    )
  }
}
